<template>
    <ModalComponent :open="open">
        <div class="border-2 border-black rounded-lg p-16 bg-white flex flex-col items-center w-[353px] h-[221px]" @click="() => {open = false}">
            <RefreshIcon />
            <h6 class="text-xl text-black font-semibold mt-7">
                {{ $t('payment timeout') }}
            </h6>
            <h6 class="text-xl text-black font-semibold">
                {{ $t('please refresh this page') }}
            </h6>
        </div>
    </ModalComponent>

</template>
<script setup>
import ModalComponent from "@components/ModalComponent.vue";
import RefreshIcon from "@components/icons/RefreshIcon.vue";
import {onMounted} from "vue";

defineProps(['open']);

/*onMounted(() => {
    setTimeout(() => {
        console.log('hutt', 'jj')
        open.value = false;
    }, 2000)
});*/
</script>