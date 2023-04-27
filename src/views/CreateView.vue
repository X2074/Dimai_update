<script setup>
import SecondaryButton from "@components/SecondaryButton.vue";
import PrimaryButton from "@components/PrimaryButton.vue";
import Header from "@components/Header.vue";
import Footer from "@components/Footer.vue";
import Button from "@components/Button.vue";
import PlusIcon from "@components/PlusIcon.vue";
import CreateAdvance from "@components/CreateAdvance.vue";
import CreateSimple from "@components/CreateSimple.vue";
import {ref} from "vue";
import ConnectWalletModal from "@components/ConnectWalletModal.vue";

const model = ref('model-a');

function changeModel(m) {
  if (m === 'model-a' && model.value !== 'model-a'){
    model.value = 'model-a'
  }else if (m === 'model-b' && model.value !== 'model-b'){
    model.value = 'model-b';
  }
}

const openSuccessNotification = ref(false);
function openSuccessModal() {
  console.log(openSuccessNotification.value)
  openSuccessNotification.value = true;
  console.log(openSuccessNotification.value)
}

</script>

<template>
<!--  <Modal />-->
  <Header />
  <div class="my-container px-12 py-10">
    <div class="flex mt-36 gap-4 items-center">
      <h6 class="mr-10">{{ $t('choose a model') }}:</h6>
        <label id="label-a" for="model-a-toggle" >
            <input type="radio" class="hidden peer/model-a" id="model-a-toggle" value="model-a" name="model" :checked="model === 'model-a'"/>
            <span class="peer-checked/model-a:bg-black peer-checked/model-a:text-white px-8 py-1 border-2 rounded-lg border-black float-right font-semibold shadow-md shadow-[#000000] text-base cursor-pointer" @click="changeModel('model-a')">{{ $t('model a') }}</span>
        </label>
        <label id="label-b" for="model-b-toggle" >
            <input type="radio" class="hidden peer/model-b" id="model-b-toggle" value="model-b" name="model"/>
            <span class="peer-checked/model-b:bg-black peer-checked/model-b:text-white px-8 py-1 border-2 rounded-lg border-black float-right font-semibold shadow-md shadow-[#000000] text-base cursor-pointer" @click="changeModel('model-b')">{{ $t('model b') }}</span>
        </label>
    </div>

    <div class="grid md:flex items-start gap-12 md:mt-12 mb-36">
        <CreateAdvance v-if="model === 'model-a'"/>
        <CreateSimple v-else />
    </div>
  </div>


  <Footer />
</template>

<style scoped>
.slider {
  -webkit-appearance: none;
  height: 5px;
  background: #000000;
  outline: none;
  -webkit-transition: .2s;
  transition: opacity .2s;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #000000;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: relative;
  background: #000000;
  cursor: pointer;
  margin-top: -40px;
}
</style>