<script setup>
import Header from "@components/Header.vue";
import Footer from "@components/Footer.vue";
import PencilIcon from "@components/PencilIcon.vue";
import WalletIcon2 from "@components/icons/WalletIcon2.vue";
import {ref, onBeforeMount, onMounted, watch, computed} from "vue";
import userProfileBg from "@assets/user_profile_bg.png";
import CopyIcon from "@components/icons/CopyIcon.vue";
import DownloadIcon from "@components/icons/DownloadIcon.vue";
import EditUsernameModal from "@components/EditUsernameModal.vue";
import userPlaceHolderImage from "@/assets/user.png";
import UploadAvatarModal from "@components/UploadAvatarModal.vue";
import {useUserStore} from "@/stores/user";

const userStore = useUserStore();
const userInfo = computed(() => userStore.userInfo);

const loading = ref(true);
const allImages = ref([]);

const model = ref('model-a');

const changeModel = (m) => {}

const openEditUserModal = ref(false);
const openUploadAvatarModal = ref(false);

const getUserInfo = () => {
  // store.dispatch('user/getUserInfo');
  userStore.getUserInfo();
  openEditUserModal.value = false;
}

onBeforeMount(() => {
  getAllImages();
})

onMounted(()=> {
  loading.value = true;

});

const getAllImages = async () => {
  // let getImgs = await store.dispatch('user/getImgs');
  // allImages.value = getImgs.imgs;
  // loading.value = false;
}

/*watch(user, () => {
  console.log(user, 'watch')
});*/

</script>

<template>
  <Header />
  <div class="w-full px-0 border border-black object-cover" :style="{'background-image' : 'url('+userProfileBg+')'}">
    <div class="relative flex h-[300px] mx-auto items-end bottom-[-50px] p-3 md:pl-24">
      <div class="img-box">
        <img :src="userPlaceHolderImage" alt="" width="80" height="80" @click="openUploadAvatarModal = true">
      </div>
      <div class="user-title">
        <h6 class="mb-0 flex items-center">
          <span class="mr-3 font-semibold text-2xl">{{ userInfo?.name ?? 'username' }}</span>
          <PencilIcon class="w-8 h-8 cursor-pointer" @click="openEditUserModal = true"/>
        </h6>
        <div class="flex mt-6 items-center">
          <WalletIcon2 class="w-8 h-8 mr-3"/>
          <p class="text-lg">{{ userInfo?.address }}</p>
            <span class="ml-10">
                <CopyIcon />
            </span>
        </div>
      </div>
    </div>
  </div>
  <div class="my-container mx-auto px-3">
      <div class="mt-28">
          <h6 class="text-[#ff8d1a] text-2xl font-medium">{{ $t('Note: Your picture') }}</h6>
      </div>
      <div class="flex mt-20 gap-4 items-center">
          <h6 class="mr-10">{{ $t('choose a model') }}:</h6>
          <label id="label-a" for="model-a-toggle" >
              <input type="radio" class="hidden peer/model-a" id="model-a-toggle" value="model-a" name="model" :checked="model === 'model-a'"/>
              <span class="peer-checked/model-a:bg-black peer-checked/model-a:text-white px-8 py-1 border-2 rounded-lg border-black float-right font-semibold shadow-md shadow-[#000000] text-base cursor-pointer" @click="changeModel('model-a')">{{ $t('model a') }}</span>
          </label>
          <label id="label-b" for="model-b-toggle" >
              <input type="radio" class="hidden peer/model-b" id="model-b-toggle" value="model-b" name="model"/>
              <span class="peer-checked/model-b:bg-black peer-checked/model-b:text-white px-8 py-1 border-2 rounded-lg border-black float-right font-semibold shadow-md shadow-[#000000] text-base cursor-pointer" @click="changeModel('model-b')">{{ $t('model b') }}</span>
          </label>
      </div>

      <div class="flex justify-center mt-52 mb-52" v-if="loading === true">
          <h6 class="text-base text-black font-medium">Loading ...</h6>
      </div>

      <div v-else>
          <div v-if="allImages === []">
              <h6 class="text-base text-black font-medium">No painting/drawing found...</h6>
          </div>

          <div v-else class="grid grid-cols-1 md:grid-cols-3 gp-4 md:gap-10 mt-16 mb-12 md:mb-24">
              <div class="card">
                  <div class="card-header w-80">
                      <h6 class="text-base font-semibold">I am a picture to participate in today's theme content campaign</h6>
                  </div>
                  <div class="card-footer">
                      <p># I am the keyword I am the keyword I am the keyword I am the keyword I am the keyword </p>
                      <div class="flex justify-end right-0">
                          <button>
                              <DownloadIcon class="w-6 h-6"/>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>




  </div>

    <Teleport to="body">
        <EditUsernameModal :open="openEditUserModal" @close-modal="openEditUserModal = false" @isSuccess="getUserInfo"/>
    </Teleport>
    <Teleport to="body">
        <UploadAvatarModal :open="openUploadAvatarModal" @close-modal="openUploadAvatarModal = false" @isSuccess="getUserInfo"/>
    </Teleport>

  <Footer />
</template>
