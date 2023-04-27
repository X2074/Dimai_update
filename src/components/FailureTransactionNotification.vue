<template>
    <ModalComponent :open="open">
        <div class="w-[353px] h-[221px] border-2 border-black rounded-lg p-16 bg-white flex flex-col items-center" @click="() => {open = false}">
            <RedCloseIcon class="w-5 h-5" />
            <h6 class="text-lg text-black font-semibold mt-10">{{ $t('transaction failure') }}</h6>
            <p class="text-gray-400 text-sm font-normal mt-[10px]" >"{{  reason }}"</p>
        </div>
    </ModalComponent>
</template>

<script setup>
import RedCloseIcon from "@components/RedCloseIcon.vue";
import ModalComponent from "@components/ModalComponent.vue";

defineProps(['open', 'reason']);
</script>