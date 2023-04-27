<template>
  <ModalComponent :open="open">
      <div class="w-[353px] h-[221px] border-2 border-black rounded-lg px-8 py-5 bg-white text-left">
          <div class="flex justify-end items-center">
              <button class="px-3 py-1 border-black border-2 rounded-md shadow-md shadow-[#000000] text-2xl font-semibold" @click="$emit('close-modal')">X</button>
          </div>

          <h6 class="text-lg text-black font-normal mt-2">{{ $t('please sign the message in') }}</h6>
          <p class="text-sm font-normal my-4">{{ $t('dimai uses this signature') }}</p>
          <RefreshIconGray />
      </div>
  </ModalComponent>
</template>
<script setup>
import ModalComponent from "@components/ModalComponent.vue";
import GreenCheckIcon from "@components/GreenCheckIcon.vue";
import Button from "@components/Button.vue";
import RefreshIconGray from "@components/icons/RefreshIconGray.vue";

defineProps(['open'])
</script>