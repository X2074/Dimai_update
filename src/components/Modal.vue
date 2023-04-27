<script setup>
import {ref, computed, defineEmits} from "vue";
import ClockIcon from "@components/ClockIcon.vue";
import ArrowImg from "@components/ArrowImg.vue";
import Button from "@components/Button.vue";
import BulbIcon from "./BulbIcon.vue";
import ModalComponent from "@components/ModalComponent.vue";
import Popper from "vue3-popper";
import {web3, contract, account} from "@/utils/wallet";
import {CONTRACT_ADDRESS} from "@/constant";

defineProps(['open']);
const emits = defineEmits(['closeModal']);

const showTooltip = ref(false);

const quantity = ref('0');
// const payAmount = web3.utils.toWei(quantity.value, "ether");
const payAmount = computed(() => {
    return web3.utils.toWei(quantity.value, "ether");
})


const buyDIM = async () => {
    // check DIM balance of the contract
    const DIMBalance = await contract.methods.tokenBalance().call();
// get the ratio between MEER and DIM
    const ratio = await contract.methods.ratio().call();
// Calculate the token amount to send to user
    const tokenAmount = ratio * payAmount;

    console.log(DIMBalance, 'dim bal')
    console.log(ratio, 'ratio')
    console.log(tokenAmount, 'token amt')
    console.log(payAmount.value, 'pay amt')
    console.log(quantity.value, 'quantity amt')

    if (DIMBalance < tokenAmount) {
        console.log("DIM balance insufficient!")
    } else {
        try {
            const gasPrice = await web3.eth.getGasPrice();

            const tx = {
                from: account.address,
                to: CONTRACT_ADDRESS,
                value: web3.utils.toHex(payAmount),
                gasLimit: 400000,
                gasPrice: gasPrice,
                data: contract.methods.buyDIM(payAmount).encodeABI()
            }
            const signedTx = await account.signTransaction(tx)

            const result = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            console.log(result)
        } catch (err) {
            console.log(err)
        }
    }
}

// @mouseenter="showTooltip = true" @mouseleave="showTooltip = false"
</script>

<template>
  <ModalComponent :open="open">
      <div class="w-full md:w-[504px] md:h-[810px] bg-white py-12 px-10 rounded-md border-black border-2">
          <div class="flex justify-between items-center">
              <img src="@/assets/logo2.jpeg" class="w-1/12 text-center mx-auto md:mx-0">
              <button class="px-3 py-1 border-black border-2 rounded-md shadow-md shadow-[#000000] text-2xl font-semibold" @click="$emit('closeModal')">X</button>
          </div>

          <div class="flex justify-between mt-14 mb-16 items-center">
              <h4 class="text-3xl font-normal text-[#a5d63f]">Deposit</h4>
              <ClockIcon />
          </div>

          <div class="md:flex justify-between items-center w-full md:gap-3 mb-16 border-2 md:border-0 rounded-lg mt-14 border-black mx-auto">
              <div class="relative w-full">
                  <div class="rounded-xl border-2 border-black absolute inset-0 bg-white w-[190px] h-[100px]"></div>
                  <div class="relative rounded-xl border-2 border-black bg-white px-4 py-2 z-10 right-2 bottom-2 w-[190px] h-[100px]">
                      <div class="flex items-center float-right mt-2">
                          <BulbIcon class="w-2.5 h-2.5" id="bulb-icon"/>
                          <h5 class="text-black font-normal text-sm text-right ml-1">DIM</h5>
                      </div>

                      <div>
                          <Popper placement="top" :arrow="true" hover :show="showTooltip">
                              <template #content>
                                  <div class="relative">
                                      <div class="w-[160px] h-[58.6px] bg-white border rounded-md border-black">{{ $t('please enter an integer') }}</div>
                                  </div>

                              </template>
                          </Popper>
                          <div class="relative mt-3" >
                              <input type="text" class="border-2 border-black rounded-md px-3 py-2 w-full mt-[11px]"  :value="quantity" @input="quantity = $event.target.value">
                              <span class="absolute px-1.5 py-0.5 text-gray-700 font-semibold rounded-full right-2 bottom-2 text-sm border-2 border-black">D</span>
                          </div>
                      </div>

                  </div>
              </div>
              <div class="hidden md:inline-block">
                  <ArrowImg />
              </div>
              <div class="relative w-full mt-5 md:mt-0">
                  <div class="rounded-xl border-2 border-black absolute inset-0 bg-white w-[190px] h-[100px] "></div>
                  <div class="relative rounded-xl border-2 border-black bg-white px-4 py-2 z-10 right-1.5 bottom-1.5 text-right w-[190px] h-[100px]">
                      <h5 class="text-black font-normal text-sm mb-7">Meer</h5>
                      <p class="font-semibold text-base">{{ payAmount }}</p>
                  </div>
              </div>
          </div>

          <button class="w-full py-5 border-[3px] rounded-xl border-black text-xl font-semibold h-[60px] mb-20 shadow-[5px_5px_0px_1px_rgb(0,0,0,1)]" @click="buyDIM">Buy Now</button>

          <hr class="bg-gray-300 h-1 mb-5">

          <h5 class="mt-10 mb-5 text-xl font-medium text-[#a5d63f] text-left">{{ $t('about dim token') }}</h5>
          <p class="font-medium text-base leading-7 tracking-wider text-left">{{ $t('every 1 meer') }}.</p>
          <p class="font-medium text-base leading-7 tracking-wider text-justify">{{ $t('dim token is a pass to the') }}</p>
      </div>
  </ModalComponent>

</template>

<style scoped>
:deep(.popper #arrow::before) {
    background: #FFFFFF;
    border-bottom: 2px solid #000000;
    /*z-index: 1;*/
}

:deep(.popper:hover),
:deep(.popper:hover > #arrow::before) {
    background: #FFFFFF;
    border: 2px solid #000000;
    z-index: 1;
}
</style>