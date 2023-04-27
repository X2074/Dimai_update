<script setup>

import HomeCarousel from "@components/HomeCarousel.vue";
</script>

<template>
  <div class="mt-20">
      <div class="my-container">
          <h4 class="text-2xl md:text-4xl font-bold my-10">{{ $t('functional features') }}</h4>

          <div class="mt-44 mb-[44rem]">
              <div class="flex relative">
                  <div class="relative">
                      <div class="rounded-xl border-[4px] border-black absolute inset-0 bg-[#d98d5b]  w-[525px] h-[502px]"></div>
                      <div class="relative rounded-xl border-[4px] border-black bg-white z-10 right-3 bottom-3 w-[525px] h-[502px]">
                          <div class="flex">
                              <div class="w-4/12">
                                  &nbsp;
                              </div>
                              <img src="@/assets/home-img-1.png" alt="" class="rounded w-8/12 border-2 border-black shadow-[#000000] shadow-md"/>
                          </div>
                          <div class="py-2 px-9 mt-5">
                              <h5 class="text-xl font-bold">{{ $t('Multi-functional AI engine:') }}</h5>
                              <p class="text-lg leading-[36px] font-normal my-8 text-justify">{{ $t('home-box-1') }}</p>
                          </div>

                      </div>
                  </div>
                  <div class="relative top-[460px] -left-[180px]">
                      <div class="rounded-xl border-[4px] border-black absolute inset-0 bg-[#f6c772]  w-[525px] h-[502px]"></div>
                      <div class="relative rounded-xl border-[4px] border-black bg-white z-10 right-3 bottom-3 w-[525px] h-[502px]">
                          <div class="flex">
                              <div class="w-4/12">
                                  &nbsp;
                              </div>
                              <img src="@/assets/home-img-2.png" alt="" class="rounded w-8/12 shadow-[#000000] shadow-md"/>
                          </div>
                          <div class="py-2 px-8">
                              <h5 class="text-3xl font-semibold">{{ $t('Convenient NFT minting:') }}</h5>
                              <p class="text-2xl leading-loose font-medium my-8 text-justify">{{ $t('home-box-2') }}</p>
                          </div>

                      </div>
                  </div>
                  <div class="relative -top-12 -left-[470px] z-20">
                      <div class="rounded-xl border-[4px] border-black absolute inset-0 bg-[#ff68a9]  w-[525px] h-[502px]"></div>
                      <div class="relative rounded-xl border-[4px] border-black bg-white z-10 left-3 top-3 w-[525px] h-[502px]">
                          <div class="flex">
                              <div class="w-4/12">
                                  &nbsp;
                              </div>
                              <img src="@/assets/home-img-3.png" alt="" class="rounded w-8/12 border-0 border-black shadow-[#000000] shadow-md"/>
                          </div>
                          <div class="py-2 px-9 mt-5">
                              <h5 class="text-xl font-bold">{{ $t('Efficient and secure blockchain technology:') }}</h5>
                              <p class="text-lg leading-[36px] font-normal my-8 text-justify">{{ $t('home-box-3') }}</p>
                          </div>
                      </div>
                  </div>
                  <div class="relative top-[330px] -left-[630px]">
                      <div class="rounded-xl border-[4px] border-black absolute inset-0 bg-[#5a7267]  w-[525px] h-[502px]"></div>
                      <div class="relative rounded-xl border-[4px] border-black bg-white z-10 left-3 top-3 w-[525px] h-[502px]">
                          <div class="flex">
                              <div class="w-4/12">
                                  &nbsp;
                              </div>
                              <img src="@/assets/home-img-4.png" alt="" class="rounded w-8/12 border-0 border-black shadow-[#000000] shadow-md"/>
                          </div>
                          <div class="py-2 px-9 mt-5">
                              <h5 class="text-xl font-bold">{{ $t('User-friendly operation interface:') }}</h5>
                              <p class="text-lg leading-[36px] font-normal my-8 text-justify">{{ $t('home-box-4') }}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <h5 class="text-2l md:text-4xl font-semibold mb-12 text-[#a5d63f]">DimAI: <span class="text-3xl font-medium text-black">{{ $t('Your AI Creation Assistant') }}</span></h5>
          <p class="text-xl leading-loose font-medium text-justify mb-12">{{ $t('on the dimai platform') }}</p>

          <h6 class="text-xl font-semibold mb-12">AI drawing: Specialized model, release your imagination</h6>

          <div class="grid grid-cols-3 gap-0 my-32">
              <div class="border-b-4 border-black flex justify-center items-center h-[410px]">
                  <img src="@assets/Model-α.png" class="w-[65%]">
              </div>
              <div class="border-x-4 border-b-4 border-black flex justify-center items-center h-[410px]">
                  <img src="@assets/model-img-1.png" class="w-[65%]">
              </div>
              <div class="text-center border-b-4 border-black flex justify-center items-center h-[410px]">
                  <img src="@assets/Model-β.png" class="w-[65%]">
              </div>
              <div class="flex justify-center items-center h-[410px]">
                  <img src="@assets/model-img-2.png" class="w-[300px] h-[300px]">
              </div>
              <div class="border-x-4 border-black flex justify-center items-center h-[410px]">
                  <img src="@assets/Model-c.png" class="w-[65%]">
              </div>
              <div class="flex justify-center items-center h-[410px]">
                  <img src="@assets/model-img-3.png" class="w-[300px] h-[300px]">
              </div>
          </div>


          <h5 class="text-2l md:text-4xl font-semibold mb-12 text-[#a5d63f]">Dimai: <span class="text-3xl font-medium text-black">{{ $t('Your NFT Minting Platform') }}</span></h5>

          <p class="text-xl leading-loose font-medium text-justify mb-12">{{ $t('as a portal into the metaverse') }}</p>
      </div>

      <HomeCarousel />

      <div class="my-container">
          <p class="text-xl leading-loose font-medium text-justify mb-16">{{ $t('whether you are an artist') }}</p>
      </div>



  </div>
</template>

<style scoped>

.about-boxes {
  display: flex;
  justify-content: space-between;
}
.black-box {
  background-color: #000000;
  border-radius: 10px;
  color: #ffffff;
  padding: 20px;
  width: 24%;
}
.ml-15{
  margin-left: 15px;
}
.black-box > h5{
  margin-top: 0;
  font-size: 14px;
  margin-bottom: 50px;
  font-weight: 400;
}
.black-box > p{
  line-height: normal;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
}
</style>