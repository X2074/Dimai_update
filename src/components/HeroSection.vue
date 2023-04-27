<script setup>
import {RouterLink} from "vue-router";
import {useI18n} from 'vue-i18n';
import LaunchButtonSVG from "@components/icons/LaunchButtonSVG.vue";

const {locale} = useI18n({ useScope: 'global' });

</script>
<template>
    <div class="my-container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 items-center md:w-full justify-between mt-40">
            <div class="items-center">
                <h5 class="text-4xl md:text-[3.7rem] font-bold mt-20 leading-relaxed" v-if="locale === 'en'">
                    The creation of metaverse begins with <span class="text-5xl text-[#a5d63f] leading-loose hero-dimai">DimAI</span>
                </h5>
                <div v-else>
                    <h5 class="text-4xl md:text-[3.7rem] font-bold mt-20 leading-relaxed" >
                        元宇宙创作
                    </h5>
                    <h5 class="text-4xl md:text-[3.7rem] font-bold leading-relaxed text-right" >
                         从 <span class="text-5xl text-[#a5d63f] leading-loose hero-dimai">DimAI</span>            开始
                    </h5>
                </div>

                <!--        <h5 class="text-2xl md:text-5xl font-bold mb-10 leading-10" v-else>
                          <span class="text-5xl md:text- text-[#a5d63f] leading-10 tracking-wider">Dimai</span>致力于构建AIGC 提供支持的下一代 <span class="text-5xl text-[#a5d63f]">NFT</span>内容制作引擎
                        </h5>-->
                <p class="text-sm md:text-lg mt-10 mb-16 tracking-wider">{{ $t("a one-stop") }}</p>
                <div class="flex">
                    <RouterLink to="/create" v-if="locale === 'en'">
                        <img src="@/assets/launch-btn.png" alt="">
                    </RouterLink>
                    <RouterLink to="/create" v-else>
                        <img src="@/assets/launch-btn-cn.png" alt="">
                    </RouterLink>
                </div>

                <!--          <button class="pointed-button">Click me</button>-->
                <!--          <svg width="650" height="50">
                              <polygon points="1,20 150,20 180,40 150,60 1, 60"
                                       style="fill:lime;stroke: black;stroke-width: 2"
                              />
                              <text x="30" y="45" fill="white">Launch Dimai</text>
                          </svg>-->
            </div>
            <div class="mt-10 md:mt-0">
                <img src="@/assets/ribbons.png" alt="Ribbons" class="w-full h-full">
            </div>
        </div>
        <div class="mt-10">
            <p class="text-2xl leading-loose font-medium">{{ $t('Dimai is a simple')}}</p>
        </div>
    </div>
</template>

<style scoped>

.launch-btn {
  padding: 10px 15px;
  border-radius: 5px 0 0 5px;
  font-weight: 600;
  /*letter-spacing: 2px;*/
  color: rgba(255, 255, 255, 1);
  border-width: 2px;
  border-style: solid;
  border-color: #000000 transparent #000000 #000000;
  position: relative;
  background-color: #01ff70;
}
/*.launch-btn::after{
  content: "";
  border-width: 20px 20px 20px 20px;
  border-style: solid;
  border-color: #000000 transparent transparent #01ff70;
  top: 0px;
  right: -40px;
  position: absolute;
}*/
/*.launch-btn::before {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  top: -85px;
  left: -18px;
  border-width: 0 45px 35px;
  border-style: solid;
  border-color: transparent transparent #01ff70;
}*/

.pointed-button {
    border: solid 2px #000000;
    color: white;
    background-color: #4CAF50;
    padding: 12px 24px;
    border-radius: 4px 0px 0px 4px;
    position: relative;
}

.pointed-button::before {
    content: "";
    position: absolute;
    right: -30px;
    bottom: -3px;
    border-top: 25px solid transparent;
    border-left: 30px solid #000000;
    border-bottom: 25px solid transparent;
}

.info-text {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 44px;
    color: rgba(36, 36, 36, 1);
    text-align: left;
    vertical-align: top;
}
</style>