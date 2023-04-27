<script setup>
import {reactive, ref, computed, watch} from "vue";
import BuyModal from "./BuyModal.vue";
import { web3modal } from '@/utils/wallet'
import {RouterLink} from "vue-router";
import {useUserStore} from "@/stores/user";
import ConnectWalletModal from "@components/ConnectWalletModal.vue";

const userStore = useUserStore();
const userInfo = computed(() => userStore.userInfo);
const userToken = computed(() => userStore.token);

const openDeposit = ref(false);
const show = ref(false);

const doLogout = () => {
  show.value = false;
  userStore.logout();
}

const openWeb3Modal = async () => {
  await web3modal.openModal();
}
watch(openDeposit, () => {
  console.log(openDeposit, 'open deposit')
});

const closeBuyModal = () => {
  console.log(openDeposit.value, 'close');
  openDeposit.value = false;
  console.log(openDeposit.value, 'close');
}


</script>

<template>
  <div class="" v-if="userToken !== ''">
    <div class="flex justify-between items-center">
      <button @click="openDeposit = true" class="rounded-xl shadow-lg border-2 border-black py-2 px-4">
        <span class="border-black border-2 rounded-full px-1.5 font-semibold text-lg mr-2">D</span>
        100 Dim
      </button>

        <div class="relative px-1">
            <div @mouseenter="show = true" @mouseleave="show = false">
                <img src="@/assets/user.png" class="w-[50px] ml-2" alt="User Image"/>
            </div>
            <div v-show="show" class="absolute left-0 py-2 mt-0 bg-white rounded-md shadow-xl w-44 right-0" @mouseenter="show = true" @mouseleave="show = false">
                <RouterLink to="/personal-center" @click="show = false" class="block px-4 py-2 text-sm text-black hover:text-gray-400 border-black border-2 rounded my-1 hover:border-gray-600">
                    {{ $t('personal center') }}
                </RouterLink>
                <a href="#" @click="doLogout" class="block px-4 py-2 text-sm text-black hover:text-gray-400 border-black border-2 rounded my-1 hover:border-gray-600">
                    {{ $t('logout') }}</a>
            </div>
        </div>
    </div>
  </div>

  <div id='walletConnect' v-else>
      <button class="rounded-xl bg-black text-white py-2.5 px-5 text-sm connect-btn" @click="openWeb3Modal">{{ $t('connect') }}</button>
  </div>
  <Teleport to="#app">
    <BuyModal @close-modal="closeBuyModal" :open="openDeposit"/>
  </Teleport>

</template>
