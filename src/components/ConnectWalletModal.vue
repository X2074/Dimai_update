<template>
    <ModalComponent :open="open">
        <div class="border-2 border-black rounded-lg p-16 bg-white flex flex-col items-center w-[621px] h-[387px]" @click="$emit('closeModal')">
            <BulbIcon class="w-10 h-10 mt-[105px]"/>
            <h6 class="text-xl font-medium text-black mt-[41px]">{{ $t('please use dimai to draw') }}</h6>
            <p href="#" class="text-blue-500 text-xl font-semibold underline cursor-pointer mt-[44px]" @click="openWeb3Modal">Connect wallet</p>
<!--            <div class="mt-[44px]">
                <w3m-core-button  icon="hide" :label="$t('connect wallet')" class="connect-btn" v-model="web3modal"></w3m-core-button>
            </div>-->
        </div>
    </ModalComponent>

</template>

<script setup>
import ModalComponent from "@components/ModalComponent.vue";
import {onMounted, defineEmits} from "vue";
import BulbIcon from "@components/BulbIcon.vue";
import { web3modal } from '@/utils/wallet'
defineProps(['open']);

const emits = defineEmits(['closeModal']);

const openWeb3Modal = async () => {
    // emits('closeModal');
    await web3modal.openModal();
}


</script>