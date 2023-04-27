<template>
    <ModalComponent :open="open">
        <div class="w-[353px] h-[221px] border-2 border-black rounded-lg p-16 bg-white flex flex-col items-center" @click="() => {open = false}">
            <RedCloseIcon />
            <h6 class="text-xl text-black font-semibold mt-10">{{ $t('build failed') }}</h6>
        </div>
    </ModalComponent>
</template>

<script setup>
import RedCloseIcon from "@components/RedCloseIcon.vue";
import ModalComponent from "@components/ModalComponent.vue";

defineProps(['open']);
</script>