<script setup>
import Header from "@components/Header.vue";
import Footer from "@components/Footer.vue";
import SecondaryButton from "@components/SecondaryButton.vue";
import WalletIcon from "@components/WalletIcon.vue";
import WalletIcon2 from "@components/icons/WalletIcon2.vue";
import {onMounted, ref} from "vue";
import store from "@/store";
import {useI18n} from "vue-i18n";

const loadingHotWords = ref(true);
const hotWords = ref({});
const {locale} = useI18n({ useScope: 'global' });


onMounted(async () => {
  loadingHotWords.value = true;
  try {
    let response = await store.dispatch('user/getHotWords');
    let res = response.value;
    hotWords.value = JSON.parse(res);
    // hotWords.value = await store.dispatch('user/getHotWords');
  }catch (e) {

  }
  loadingHotWords.value = false;
});


</script>

<template>
  <Header />

  <div class="my-container p-3 md:p-0 mt-16 md:mt-36">
    <div class="flex justify-between mb-32 items-center">
      <div class="mx-2">
        <secondary-button>&lt;</secondary-button>
      </div>
      <div class="mx-2 text-center">
        <h5 class="mb-10 font-semibold text-4xl">2023-03-03</h5>
        <p class="font-semibold text-4xl mt-[102px]" v-if="locale === 'en'">{{ hotWords.en }}</p>
          <p class="font-semibold text-4xl mt-[102px]" v-else>{{ hotWords.zh }}</p>
        <h6 class="font-semibold text-4xl mt-[68px]">"A purple bee"</h6>
      </div>
      <div class="mx-2">
        <secondary-button>&gt;</secondary-button>
      </div>
    </div>

    <h2 class="text-xl md:text-4xl mb-20 font-semibold">Theme Painting</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
      <div class="card">
        <div class="card-header w-80">
          <h6 class="text-base font-semibold">I am a picture to participate in today's theme content campaign</h6>
        </div>
        <div class="card-footer">
          <p># I am the keyword I am the keyword I am the keyword I am the keyword I am the keyword </p>
          <div class="flex items-start">
            <img src="@/assets/user.png" alt="" width="60" height="60" class="rounded-full">
            <div class="userinfo-username">
              <h6 class="font-semibold">Someone</h6>
              <p class="flex">
                <span class="mr-1"><WalletIcon2 style="width: 20px" /></span>
                0xqwertyuiopasdfghjklzxcvbnm
              </p>
            </div>

          </div>
        </div>
      </div>
        <div class="card">
            <div class="card-header w-80">
                <h6 class="text-base font-semibold">I am a picture to participate in today's theme content campaign</h6>
            </div>
            <div class="card-footer">
                <p># I am the keyword I am the keyword I am the keyword I am the keyword I am the keyword </p>
                <div class="flex items-start">
                    <img src="@/assets/user.png" alt="" width="60" height="60" class="rounded-full">
                    <div class="userinfo-username">
                        <h6 class="font-semibold">Someone</h6>
                        <p class="flex">
                            <span class="mr-1"><WalletIcon2 style="width: 20px" /></span>
                            0xqwertyuiopasdfghjklzxcvbnm
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header w-80">
                <h6 class="text-base font-semibold">I am a picture to participate in today's theme content campaign</h6>
            </div>
            <div class="card-footer">
                <p># I am the keyword I am the keyword I am the keyword I am the keyword I am the keyword </p>
                <div class="flex items-start">
                    <img src="@/assets/user.png" alt="" width="60" height="60" class="rounded-full">
                    <div class="userinfo-username">
                        <h6 class="font-semibold">Someone</h6>
                        <p class="flex">
                            <span class="mr-1"><WalletIcon2 style="width: 20px" /></span>
                            0xqwertyuiopasdfghjklzxcvbnm
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header w-80">
                <h6 class="text-base font-semibold">I am a picture to participate in today's theme content campaign</h6>
            </div>
            <div class="card-footer">
                <p># I am the keyword I am the keyword I am the keyword I am the keyword I am the keyword </p>
                <div class="flex items-start">
                    <img src="@/assets/user.png" alt="" width="60" height="60" class="rounded-full">
                    <div class="userinfo-username">
                        <h6 class="font-semibold">Someone</h6>
                        <p class="flex">
                            <span class="mr-1"><WalletIcon2 style="width: 20px" /></span>
                            0xqwertyuiopasdfghjklzxcvbnm
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header w-80">
                <h6 class="text-base font-semibold">I am a picture to participate in today's theme content campaign</h6>
            </div>
            <div class="card-footer">
                <p># I am the keyword I am the keyword I am the keyword I am the keyword I am the keyword </p>
                <div class="flex items-start">
                    <img src="@/assets/user.png" alt="" width="60" height="60" class="rounded-full">
                    <div class="userinfo-username">
                        <h6 class="font-semibold">Someone</h6>
                        <p class="flex">
                            <span class="mr-1"><WalletIcon2 style="width: 20px" /></span>
                            0xqwertyuiopasdfghjklzxcvbnm
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header w-80">
                <h6 class="text-base font-semibold">I am a picture to participate in today's theme content campaign</h6>
            </div>
            <div class="card-footer">
                <p># I am the keyword I am the keyword I am the keyword I am the keyword I am the keyword </p>
                <div class="flex items-start">
                    <img src="@/assets/user.png" alt="" width="60" height="60" class="rounded-full">
                    <div class="userinfo-username">
                        <h6 class="font-semibold">Someone</h6>
                        <p class="flex">
                            <span class="mr-1"><WalletIcon2 style="width: 20px" /></span>
                            0xqwertyuiopasdfghjklzxcvbnm
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="pagination">
      <div class="pagination-items">
        <secondary-button>&lt;</secondary-button>
        <a class="pagination-item active">1</a>
        <a class="pagination-item">2</a>
        <a class="pagination-item">3</a>
        <a class="pagination-item">4</a>
        <secondary-button>&gt;</secondary-button>
      </div>
    </div>
  </div>

  <Footer />

</template>

<style scoped>
.slider .slider-content p {
  margin: 60px 0;
  font-size: 17px;
}
.slider .slider-content h5 {
  font-size: 15px;
}
.slider .slider-content h6 {
  font-size: 16px;
}
.heading {
  font-size: 17px;
}
.box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
}
.card {
  border-radius: 5px;
  border: solid 2px #000000;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
}
.card .card-header {
  margin: 100px auto;
  text-align: center;
  padding: 0 10px;
}
.card .card-footer {
  border-radius: 0 0 10px 10px;
  background: rgba(230, 227, 227, 0.65);
  padding: 20px;
}
.card .card-footer p{
  margin-bottom: 40px;
}
.card > .card-footer > .user-info{
  display: flex;
  justify-content: start;
}
.userinfo-username > h6, .userinfo-username > p
{
  margin: 0 0 0 10px;
}
.pagination {
  margin: 70px auto;
  display: flex;
  justify-content: space-around;
}
.pagination .pagination-items {
  margin: 5px 10px;
  padding: 5px;
}
.pagination .pagination-item {
  margin: 5px 10px;
  padding: 2px 10px;
  text-decoration: none;
  color: #000000;
  font-size: 14px;
  cursor: pointer;
}
.pagination > .pagination-items > .active {
  background-color: #000000;
  color: #ffffff;
  cursor: auto;
}
</style>