<script setup>
import Button from "@components/Button.vue";
import createImage from "@assets/create-image.png";
import {ref} from "vue";
import {useUserStore} from "@/stores/user";
import ConnectWalletModal from "@components/ConnectWalletModal.vue";
import {useRouter} from "vue-router";

const userStore = useUserStore();
const openConnectWalletModal = ref(false);
const router = useRouter();

const generate = () => {

}

const gotoPersonalCenter = () => {
    router.push({name: "PersonalCenter"});
}

const gotoThemePainting = () => {
    router.push({name: "ThemePainting"});
}
</script>
<template>
    <div class="w-full">
        <div class="w-full">
            <div class="flex text-right justify-end">
                <Button class="mr-5" @click="gotoPersonalCenter">{{ $t('history generation') }}</Button>
                <Button @click="gotoThemePainting">{{ $t('add to today') }}</Button>
            </div>

            <div class="clear-both"></div>
            <div class="border-[3px] border-black border-dashed rounded-lg text-center items-center h-[623px] w-full my-5 flex flex-col justify-center">
                <p class="font-normal text-2xl">{{ $t('waiting for you') }}</p>
                <p class="font-normal text-2xl">{{ $t('go ahead and create') }}</p>
            </div>
        </div>
        <div class="clear-both"></div>
        <div class='flex items-center justify-end relative w-full rounded-lg overflow-hidden mx-auto'>
            <textarea class="block rounded-lg border-black border-2 p-2 my-5 w-full h-[80px]" rows="6" placeholder="Write down your ideas"></textarea>
            <span class="absolute px-2 py-1 text-gray-700 font-semibold rounded text-sm">
                <button class="px-14 py-2 border-2 rounded-lg border-black text-base font-semibold shadow-md shadow-[#000000]" @click="openConnectWalletModal = true" v-if="userStore.token === ''">{{ $t('generate') }}</button>
                    <Button v-else @click="generate">
                        <span class="border-black border-2 rounded-full px-1.5 font-semibold text-lg mr-2">D</span>
                        5 Dim
                        <span class="text-xl ml-3">{{ $t('generate') }}</span>
                    </Button>
            </span>
        </div>
    </div>
    <Teleport to="body">
        <ConnectWalletModal :open="openConnectWalletModal" @close-modal="openConnectWalletModal = false"/>
    </Teleport>
</template>

<style scoped>

.radio input ~ label {
  background-color: rgb(233, 225, 225);
  color: rgb(158, 146, 146);
}
.radio input:checked ~ label {
  background-color: rgb(70, 230, 22);
  border: solid 2px #a5d63f;
  color: white;
}
</style>
