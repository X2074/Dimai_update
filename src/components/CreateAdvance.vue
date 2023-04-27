<script setup>
import {ref, nextTick, watch, onMounted, reactive} from "vue";
import ConnectWalletModal from "@components/ConnectWalletModal.vue";
import Button from "@components/Button.vue";
import {useUserStore} from "@/stores/user";
import {useI18n} from "vue-i18n";
import {useRouter} from "vue-router";

const {locale} = useI18n({ useScope: 'global' });
const router = useRouter();

const styles_en = [
  "Explore Infinity",
  "Ancient Style",
  "Anime and Manga",
  "Realistic Style",
  "Ukiyo-e",
  "Low Poly",
  "Futurism",
  "Pixel Art",
  "Conceptual Art",
  "Cyberpunk",
  "Lolita Style",
  "Baroque Style",
  "Surrealism",
  "Watercolor Painting",
  "Vaporwave Art",
  "Oil Painting",
  "Cartoon Art",
];

const styles_cn = [
  "探索无限",
  "古风",
  "动漫和漫画",
  "写实风格",
  "浮世绘",
  "Low poly",
  "未来主义",
  "像素艺术",
  "概念艺术",
  "赛博朋克",
  "洛丽塔风格",
  "巴洛克风格",
  "超现实主义",
  "水彩绘画",
  "蒸气波艺术",
  "油画",
  "卡通艺术",
];

let styles = locale.value === "en" ? styles_en : styles_cn;

const open = ref(false);
const button = ref('');
const listbox = ref(null);
const activeDescendant = ref(null);
const optionCount = ref(null);
const selected = ref(1);
const value = ref(2);
const userStore = useUserStore();
const form = reactive({
  text: "",
  style: value.value,
  size: [],
  num: "2",
});
const formErrors = ref({})

const openConnectWalletModal = ref(false);

onMounted(() => {
  // listbox.value.focus();
  //optionCount.value = listbox.value.children.length();
})

const choose = (option) => {
  value.value = option;
  open.value = false;
}

const onButtonClick = () => {
  if (open.value) return
  selected.value = value.value
  open.value = true
  nextTick(() => {
    // listbox.value.focus()
    // listbox.value.children[this.selected - 1].scrollIntoView({ block: 'nearest' })
  })
}

const onEscape = () => {

}

const onOptionSelect = () => {

}

const onArrowUp = () => {

}

const onArrowDown = () => {

}

watch(selected, () => {
  if (!open.value) return

  if (selected.value === null) {
    activeDescendant.value = ''
    // return
  }

  // activeDescendant.value = listbox.value.children[selected.value - 1].id
});

watch(locale, () =>{
  if (locale.value === 'en'){
    styles = styles_en
  }else {
    styles = styles_cn
  }
});

watch(form, () =>{
  console.log(form)
});

const generate = () => {
  if (userStore.token === ''){
    openConnectWalletModal.value = true;
    return;
  }
  // do generate here
  if (form.text === '') {
    formErrors.value.text = 'Please write down your ideas';
  }
  if (form.size === []) {
    formErrors.value.size = 'Please select a size';
  }

  if (formErrors.value !== {}){
    // there are errors

    return;
  }
}

const gotoPersonalCenter = () => {
  router.push({name: "PersonalCenter"})
}

const gotoThemePainting = () => {
  router.push({name: "ThemePainting"});
}
</script>

<template>

    <div class="w-full md:w-2/5 ">
        <div class="relative">
            <div class="rounded-xl border-[4px] border-black absolute inset-0 bg-[#ff5733] "></div>
            <div class="relative rounded-xl border-[4px] border-black bg-white py-2 z-10 right-2.5 bottom-2.5 ">
                <div class="px-7">
                    <div class='flex flex-col relative w-full rounded-lg overflow-hidden mx-auto'>
                        <textarea class="block rounded-lg border-black border-[3px] p-2 my-5 w-full h-[218px]" rows="6" placeholder="Write down your ideas" v-model.trim="form.text"></textarea>
                        <span class="absolute px-2 py-1 text-xs text-gray-700 font-semibold rounded right-2 bottom-5 text-sm">0/100</span>
                    </div>

                    <h6 class="text-base font-semibold mt-[49px] mb-2">Screen style (optional)</h6>
                    <div class="relative">
            <span class="inline-block w-full rounded-md shadow-md" @click="onButtonClick">
              <button ref="button"  type="button" aria-haspopup="listbox" :aria-expanded="open" aria-labelledby="assigned-to-label" class="cursor-default relative w-full bg-white pl-3 pr-20 py-3 text-left  focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5 border-2 border-black text-gray-900 text-sm rounded-md focus:ring-black focus:border-black">
                <span class="flex items-center space-x-3">
                  {{ styles[value - 1] }}
                </span>
                <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg class="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path>
                  </svg>
                </span>
              </button>
            </span>
                        <div v-if="open" @focusout="onEscape" @click.away="open = false" class="absolute mt-1 w-full rounded-md bg-white shadow-sm shadow-[#000000] border-[3px] border-black px-2 py-2 z-50">
                            <ul @keydown.enter.stop.prevent="onOptionSelect" @keydown.space.stop.prevent="onOptionSelect" @keydown.esc="onEscape" @keydown.up.prevent="onArrowUp" @keydown.down.prevent="onArrowDown" ref="listbox" tabindex="-1" role="listbox" aria-labelledby="assigned-to-label" :aria-activedescendant="activeDescendant" class="max-h-56 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5">

                                <li v-for="(style, index) in styles" :key="index" class="flex py-1.5"  @click="choose(index + 1)" @mouseenter="selected = index + 1" @mouseleave="selected = null" aria-selected="true" :class="{ 'text-white bg-black': selected === index + 1, 'text-black': !(selected === index + 1) }">
                          <span v-if="value === index + 1" class="text-black flex justify-end w-2/12 font-bold" :class="{ 'text-white': selected === index + 1, 'text-black': !(selected === index + 1) }">
                            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                                    <span v-else class="text-white flex justify-end w-2/12 font-bold" :class="{ 'text-white': selected === index + 1, 'text-black': !(selected === index + 1) }">
                            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                                    <span :class="{ 'border-b-4 border-b-green-500': value === index + 1, ' ': (value === index + 1) }" class="font-medium text-base ml-10 rounded-sm px-1 font-semibold">{{ style }}</span>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <h6 class="flex justify-between font-semibold mt-[71px] mb-2">
                        <span class="text-base">{{ $t('quantity') }}</span>
                        <span class="text-sm">1 {{ $t('sheets')}}</span>
                    </h6>

                    <div class="range-slider w-full mt-9" style='--min:1; --max:6; --step:1;' :style="{ '--value': form.num, '--text-value':form.num}">
                        <input type="range" min="1" max="6" step="1" oninput="this.parentNode.style.setProperty('--value',this.value); this.parentNode.style.setProperty('--text-value', JSON.stringify(this.value))" v-model.number="form.num">
                        <output></output>
                        <div class='range-slider__progress'></div>
                    </div>

                    <h6 class="font-semibold mt-5 mb-2 mt-[76px] text-base">{{ $t('size') }}</h6>
                    <div class="flex justify-between gap-3 mb-24">
                        <label for="p1">
                            <input type="checkbox" class="hidden peer/p1" id="p1" value="1024x1024" name="pixel" v-model="form.size"/>
                            <span class="peer-checked/p1:bg-black peer-checked/p1:text-white px-3 py-1 border-2 border-black rounded-md text-xs font-normal cursor-pointer"> 1024x1024 </span>
                        </label>
                        <label for="p2">
                            <input type="checkbox" class="hidden peer/p2" id="p2" value="1024x1536" name="pixel" v-model="form.size"/>
                            <span class="peer-checked/p2:bg-black peer-checked/p2:text-white px-3 py-1 border-2 border-black rounded-md text-xs font-normal cursor-pointer"> 1024x1536 </span>
                        </label>
                        <label for="p3">
                            <input type="checkbox" class="hidden peer/p3" id="p3" value="1536x1024" name="pixel" v-model="form.size"/>
                            <span class="peer-checked/p3:bg-black peer-checked/p3:text-white px-3 py-1 border-2 border-black rounded-md text-xs font-normal cursor-pointer"> 1536x1024 </span>
                        </label>
                    </div>

                </div>
                <div class="border-t-[3px] border-black bottom-0 p-5 grid md:flex justify-between items-center">
                    <h6 class="text-base font-medium">{{ $t('actual payment') }}:</h6>
                    <button class="px-14 py-2 border-2 rounded-lg border-black text-base font-semibold shadow-md shadow-[#000000]" @click="openConnectWalletModal = true" v-if="userStore.token === ''">{{ $t('generate') }}</button>
                    <Button v-else @click="generate">
                        <span class="border-black border-2 rounded-full px-1.5 font-semibold text-lg mr-2">D</span>
                        5 Dim
                        <span class="text-xl ml-3">{{ $t('generate') }}</span>
                    </Button>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full md:w-3/5">
        <div class="w-full">
            <div class="flex text-right justify-end">
                <Button class="mr-5" @click="gotoPersonalCenter">{{ $t('history generation') }}</Button>
                <Button @click="gotoThemePainting">{{ $t('add to today') }}</Button>
            </div>

            <div class="clear-both"></div>
            <div class="border-[3px] border-black border-dashed rounded-lg text-center items-center h-[623px] w-full my-5 flex flex-col justify-center">
                <p class="font-normal text-2xl">{{ $t('waiting for you') }}</p>
                <p class="font-normal text-2xl">{{ $t('go ahead and create') }}</p>
            </div>
        </div>
        <div class="clear-both"></div>
        <h6 class="font-normal text-2xl mt-5 tracking-wide leading-loose">{{ $t('Keywords') }}: I am an example of keywords after the painting is completed</h6>
    </div>

    <Teleport to="#app">
        <ConnectWalletModal :open="openConnectWalletModal" @close-modal="openConnectWalletModal = false"/>
    </Teleport>
</template>

<style scoped>
.range-slider {
    --primary-color: #000000;
    --value-offset-y: var(--ticks-gap);
    --value-active-color: white;
    --value-background: transparent;
    --value-background-hover: var(--primary-color);
    --value-font: 700 12px/1 Arial;
    --fill-color: var(--primary-color);
    --progress-background: #eee;
    --progress-radius: 20px;
    --track-height: calc(var(--thumb-size) / 2);
    --min-max-font: 14px Arial;
    --min-max-opacity: 1;
    --min-max-x-offset: 50%;
    --thumb-size: 11px;
    --thumb-color: rgba(165, 214, 63, 1);
    --thumb-shadow: 0 0 3px rgba(0, 0, 0, 0.4), 0 0 1px rgba(0, 0, 0, 0.5) inset,
    0 0 0 99px var(--thumb-color) inset;
    --thumb-shadow-active: 0 0 0 calc(var(--thumb-size) / 4) inset
    var(--thumb-color),
    0 0 0 99px var(--primary-color) inset, 0 0 3px rgba(0, 0, 0, 0.4);
    --thumb-shadow-hover: var(--thumb-shadow);
    --ticks-thickness: 2px;
    --ticks-height: 15px;
    --ticks-gap: var(
            --ticks-height,
            0
    );
    --ticks-color: black;
    --step: 1;
    --ticks-count: Calc(var(--max) - var(--min)) / var(--step);
    --maxTicksAllowed: 30;
    --too-many-ticks: Min(1, Max(var(--ticks-count) - var(--maxTicksAllowed), 0));
    --x-step: Max(
            var(--step),
            var(--too-many-ticks) * (var(--max) - var(--min))
    );
    --tickInterval: 100/ ((var(--max) - var(--min)) / var(--step)) * var(--tickEvery, 1);
    --tickIntervalPerc: calc(
            (100% - var(--thumb-size)) / ((var(--max) - var(--min)) / var(--x-step)) *
            var(--tickEvery, 1)
    );
    --value-a: Clamp(
            var(--min),
            var(--value, 0),
            var(--max)
    );
    --value-b: var(--value, 0);
    --text-value-a: var(--text-value, "");
    --completed-a: calc(
            (var(--value-a) - var(--min)) / (var(--max) - var(--min)) * 100
    );
    --completed-b: calc(
            (var(--value-b) - var(--min)) / (var(--max) - var(--min)) * 100
    );
    --ca: Min(var(--completed-a), var(--completed-b));
    --cb: Max(var(--completed-a), var(--completed-b));
    --thumbs-too-close: Clamp(
            -1,
            1000 * (Min(1, Max(var(--cb) - var(--ca) - 5, -1)) + 0.001),
            1
    );
    --thumb-close-to-min: Min(1, Max(var(--ca) - 2, 0));
    --thumb-close-to-max: Min(1, Max(98 - var(--cb), 0));
    display: inline-block;
    height: max(var(--track-height), var(--thumb-size));
    background: linear-gradient(to right, var(--ticks-color) var(--ticks-thickness), transparent 1px) repeat-x;
    background-size: var(--tickIntervalPerc) var(--ticks-height);
    background-position-x: calc( var(--thumb-size) / 2 - var(--ticks-thickness) / 2 );
    background-position-y: var(--flip-y, bottom);
    padding-bottom: var(--flip-y, var(--ticks-gap));
    padding-top: calc(var(--flip-y) * var(--ticks-gap));
    position: relative;
    z-index: 1;
}
.range-slider[data-ticks-position=top] {
    --flip-y: 1;
}
.range-slider::before, .range-slider::after {
    --offset: calc(var(--thumb-size) / 2);
    content: counter(x);
    display: var(--show-min-max, block);
    font: var(--min-max-font);
    position: absolute;
    bottom: var(--flip-y, -2.5ch);
    top: calc(-2.5ch * var(--flip-y));
    opacity: clamp(0, var(--at-edge), var(--min-max-opacity));
    transform: translateX(calc(var(--min-max-x-offset) * var(--before, -1) * -1)) scale(var(--at-edge));
    pointer-events: none;
}
.range-slider::before {
    --before: 1;
    --at-edge: var(--thumb-close-to-min);
    counter-reset: x var(--min);
    left: var(--offset);
}
.range-slider::after {
    --at-edge: var(--thumb-close-to-max);
    counter-reset: x var(--max);
    right: var(--offset);
}
.range-slider__values {
    position: relative;
    top: 50%;
    line-height: 0;
    text-align: justify;
    width: 100%;
    pointer-events: none;
    margin: 0 auto;
    z-index: 5;
}
.range-slider__values::after {
    content: "";
    width: 100%;
    display: inline-block;
    height: 0;
    background: red;
}
.range-slider__progress {
    --start-end: calc(var(--thumb-size) / 2);
    --clip-end: calc(100% - (var(--cb)) * 1%);
    --clip-start: calc(var(--ca) * 1%);
    --clip: inset(-20px var(--clip-end) -20px var(--clip-start));
    position: absolute;
    left: var(--start-end);
    right: var(--start-end);
    top: calc( var(--ticks-gap) * var(--flip-y, 0) + var(--thumb-size) / 2 - var(--track-height) / 2 );
    height: calc(var(--track-height));
    background: var(--progress-background, #eee);
    pointer-events: none;
    z-index: -1;
    border-radius: var(--progress-radius);
}
.range-slider__progress::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    -webkit-clip-path: var(--clip);
    clip-path: var(--clip);
    top: 0;
    bottom: 0;
    background: var(--fill-color, black);
    box-shadow: var(--progress-flll-shadow);
    z-index: 1;
    border-radius: inherit;
}
.range-slider__progress::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: var(--progress-shadow);
    pointer-events: none;
    border-radius: inherit;
}
.range-slider > input {
    -webkit-appearance: none;
    width: 100%;
    height: var(--thumb-size);
    margin: 0;
    position: absolute;
    left: 0;
    top: calc( 50% - Max(var(--track-height), var(--thumb-size)) / 2 + calc(var(--ticks-gap) / 2 * var(--flip-y, -1)) );
    cursor: -webkit-grab;
    cursor: grab;
    outline: none;
    background: none;
}
.range-slider > input:not(:only-of-type) {
    pointer-events: none;
}
.range-slider > input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    transform: var(--thumb-transform);
    border-radius: var(--thumb-radius, 50%);
    background: var(--thumb-color);
    box-shadow: var(--thumb-shadow);
    border: none;
    pointer-events: auto;
    -webkit-transition: 0.1s;
    transition: 0.1s;
}
.range-slider > input::-moz-range-thumb {
    -moz-appearance: none;
    appearance: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    transform: var(--thumb-transform);
    border-radius: var(--thumb-radius, 50%);
    background: var(--thumb-color);
    box-shadow: var(--thumb-shadow);
    border: none;
    pointer-events: auto;
    -moz-transition: 0.1s;
    transition: 0.1s;
}
.range-slider > input::-ms-thumb {
    appearance: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    transform: var(--thumb-transform);
    border-radius: var(--thumb-radius, 50%);
    background: var(--thumb-color);
    box-shadow: var(--thumb-shadow);
    border: none;
    pointer-events: auto;
    -ms-transition: 0.1s;
    transition: 0.1s;
}
.range-slider > input:hover {
    --thumb-shadow: var(--thumb-shadow-hover);
}
.range-slider > input:hover + output {
    --value-background: var(--value-background-hover);
    --y-offset: -5px;
    color: var(--value-active-color);
    box-shadow: 0 0 0 3px var(--value-background);
}
.range-slider > input:active {
    --thumb-shadow: var(--thumb-shadow-active);
    cursor: -webkit-grabbing;
    cursor: grabbing;
    z-index: 2;
}
.range-slider > input:active + output {
    transition: 0s;
}
.range-slider > input:nth-of-type(1) {
    --is-left-most: Clamp(0, (var(--value-a) - var(--value-b)) * 99999, 1);
}
.range-slider > input:nth-of-type(1) + output {
    --value: var(--value-a);
    --x-offset: calc(var(--completed-a) * -1%);
}
.range-slider > input:nth-of-type(1) + output:not(:only-of-type) {
    --flip: calc(var(--thumbs-too-close) * -1);
}
.range-slider > input:nth-of-type(1) + output::after {
    content: var(--prefix, "") var(--text-value-a) var(--suffix, "");
}
.range-slider > input:nth-of-type(2) {
    --is-left-most: Clamp(0, (var(--value-b) - var(--value-a)) * 99999, 1);
}
.range-slider > input:nth-of-type(2) + output {
    --value: var(--value-b);
}
.range-slider > input:only-of-type ~ .range-slider__progress {
    --clip-start: 0;
}
.range-slider > input + output {
    --flip: -1;
    --x-offset: calc(var(--completed-b) * -1%);
    --pos: calc(
            ((var(--value) - var(--min)) / (var(--max) - var(--min))) * 100%
    );
    pointer-events: none;
    position: absolute;
    z-index: 5;
    background: var(--value-background);
    border-radius: 10px;
    padding: 2px 4px;
    left: var(--pos);
    transform: translate(var(--x-offset), calc( 150% * var(--flip) - (var(--y-offset, 0px) + var(--value-offset-y)) * var(--flip) ));
    transition: all 0.12s ease-out, left 0s;
}
.range-slider > input + output::after {
    content: var(--prefix, "") var(--text-value-b) var(--suffix, "");
    font: var(--value-font);
}

</style>