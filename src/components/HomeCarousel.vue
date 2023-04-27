<script setup>
import { ref, onMounted, nextTick } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import SlideImgOne from "@assets/slide-img-1.png";
import SlideImgTwo from "@assets/slide-img-2.png";
import SlideImgThree from "@assets/slide-img-3.png";
import SlideImgFour from "@assets/slide-img-4.png";

const myCarousel = ref(null);
const slide0 = ref(0);
const slide1 = ref(1);
const slide2 = ref(2);
const slide3 = ref(3);

onMounted(() => {
    // currentSlide.value = myCarousel.data.currentSlide
})

function gotoSlide(index) {
    myCarousel.value.slideTo(index);
}

function carr(data) {
  // data.currentSlideIndex
}

const slides = [
    {id: 1, title: 'Art', content: 'DimAi helps artists to create more creative and unique works, ensuring the non-reproducibility and uniqueness of their works', bg: 'bg-[#f5edab]', img: SlideImgOne, border: 'border-[#000000]', titleColor: 'text-[#f9c23c]'},
    {id: 2, title: 'Games', content: 'In the field of games, DimAI helps game developers design more unique and personalized game props, improves the \n' +
          'playability and the fun of the game, and make these props have actual economic value in the games.', bg: 'bg-[#000000]', img: SlideImgTwo, border: 'border-[#000000]', titleColor: 'text-[#000000]'},
    {id: 3, title: 'PFP', content: 'DimAI generates personalized avatars based on user preferences, which can be used as social media avatars or NFT,increasing their economic value.', bg: 'bg-[#000000]', img: SlideImgThree, border: 'border-[#000000]', titleColor: 'text-[#000000]'},
    {id: 4, title: 'Membership', content: 'DimAI helps Web3 project teams create exclusive membership benefits cards that allow members to enjoy special services or event discounts and other benefits.', bg: 'bg-[#000000]', img: SlideImgFour, border: 'border-[#a5d63f]', titleColor: 'text-[#000000]'},
]
</script>
<template>
    <carousel :items-to-show="1" :autoplay="2000" :wrapAround="true" :pauseAutoplayOnHover="true" ref="myCarousel" @slide-end="carr">
       <Slide v-for="slide in slides" :key="slide.id">
           <div class="w-full my-20 h-[902px]">
               <div class="border-y-[6px] h-full" :class="slide.bg+' '+slide.border">
                   <div class="grid grid-cols-1 mx-auto w-[1440px] mt-24 items-center">
                       <div class="relative mt-5">
                           <div class="rounded-xl border-[6px] border-black absolute inset-0 bg-white w-[1440px] h-[628px]"></div>
                           <div class="relative rounded-xl border-[6px] border-black bg-white z-10 right-4 bottom-4 w-[1440px] h-[628px]">
                               <div class="inline-block">
                                   <div class="grid grid-cols-5 gap-4 px-5 py-[42px]">
                                       <div class="col-span-2 items-start flex flex-col  justify-end">
                                           <h4 class="text-5xl font-semibold" :class="slide.titleColor">{{ slide.title}}</h4>
                                           <p class="text-2xl font-semibold mt-16 leading-[56px] tracking-wide text-left">{{ slide.content}}</p>
                                       </div>
                                       <div class="col-span-3 rounded-xl h-full">
                                           <img :src="slide.img" alt="" class="w-full">
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="flex justify-center mt-28">
                          <span class="border-[3px] border-black rounded-md w-24 h-3" @click="gotoSlide(0)" :class="{'bg-black': currentSlide === 0, 'bg-white': !(currentSlide === 0) }">
                          </span>
                           <span class="ml-5 border-[3px] border-black rounded-md bg-white w-24 h-3" @click="gotoSlide(1)" :class="{'bg-black': currentSlide === 1, 'bg-white': !(currentSlide === 1) }">
                          &nbsp
                      </span>
                           <span class="ml-5 border-[3px] border-black rounded-md bg-white w-24 h-3" @click="gotoSlide(2)" :class="{'bg-black': currentSlide === 2, 'bg-white': !(currentSlide === 2) }">
                          &nbsp
                      </span>
                           <span class="ml-5 border-[3px] border-black rounded-md bg-white w-24 h-3" @click="gotoSlide(3)" :class="{'bg-black': currentSlide === 3, 'bg-white': !(currentSlide === 3) }">
                          &nbsp
                      </span>
                       </div>
                   </div>
               </div>
           </div>
       </Slide>
    </carousel>

</template>