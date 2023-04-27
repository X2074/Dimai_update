<template>
    <ModalComponent :open="open">
        <div class="w-[353px] h-[221px] border-2 border-black rounded-lg p-16 bg-white flex flex-col items-center" @click="() => {open = false}">
            <GreenCheckIcon />
            <h6 class="text-xl text-black font-semibold mt-7">{{ $t('success transaction') }}</h6>
        </div>
    </ModalComponent>

</template>

<script setup>
import GreenCheckIcon from "@components/GreenCheckIcon.vue";
import ModalComponent from "@components/ModalComponent.vue";
import {onMounted} from "vue";
defineProps(['open']);

onMounted(() => {
    setTimeout(() => {
        open.value = false;
    }, 2000)
});


</script>