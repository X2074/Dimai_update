<template>
  <ModalComponent :open="open">
      <div class="border-2 border-black rounded-lg py-4 px-5 bg-white flex flex-col items-center w-[400px] h-[200px]">
          <h6 class="text-xl font-medium text-black mb-3">{{ $t('Edit your username') }}</h6>
          <div class="mb-2">
              <p class="text-red-500 text-sm font-medium" v-text="errorMessage" v-show="errorMessage"></p>
              <p class="text-green-500 text-sm font-medium" v-text="successMessage"  v-show="successful"></p>
          </div>
          <form action="" method="post" @submit.prevent="updateUsername" class="w-full">
              <input type="text" name="username" id="username" class="border-2 border-black rounded-lg focus:border-blue-700 w-full px-3 py-2 mb-7" v-model="usernameForm.username" :placeholder="$t('username')"/>
              <div class="flex gap-10">
                  <button class="px-8 py-3 border-2 rounded-lg border-black float-right text-sm font-semibold shadow-md shadow-[#000000] w-full" type="submit" :disabled="processing">{{ $t('Save') }}
                       </button>
                  <button class="px-8 py-3 border-2 rounded-lg border-black float-right text-sm font-semibold shadow-md shadow-[#000000] w-full" type="button" :disabled="processing" @click="$emit('closeModal')"> {{ $t('Cancel') }} </button>
              </div>
          </form>
      </div>
  </ModalComponent>
</template>
<script setup>
import ModalComponent from "@components/ModalComponent.vue";
import {defineEmits, reactive, ref, computed} from "vue";
import {useUserStore} from "@/stores/user";

const userStore = useUserStore();
const userInfo = userStore.userInfo;

defineProps(['open']);
const emits = defineEmits(['closeModal', 'isSuccess']);

const processing = ref(false);
const errorMessage = ref('');
const successMessage = ref('Username changed successfully');
const successful = ref(false);
const usernameForm = reactive({
  username: userInfo?.name
});

const updateUsername = async () => {
  processing.value = true;
  try {
    const response = await userStore.updateUserNickname(usernameForm.username);
    if (response.message){
      errorMessage.value = '';
      successful.value = true;
      setTimeout(() => {
          emits('isSuccess')
      }, 2000)
    }
  }catch (e) {
    errorMessage.value = e.message;
    successful.value = false
  }
  processing.value = false;
}
</script>