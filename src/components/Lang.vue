<template>
  <div class="relative">
    <div class="flex" @mouseenter="show = true" @mouseleave="show = false">
      <LangIcon />
    </div>
    <div v-show="show" class="absolute left-0 py-2 mt-0 bg-white rounded-md shadow-xl w-44" @mouseenter="show = true" @mouseleave="show = false">
      <span class="block px-4 py-2 text-sm text-black hover:text-gray-400 border-black border-2 rounded my-1 hover:border-gray-600" v-for="locale in locales" :key="`locale-${locale}`" @click="changeLocale(locale)">
        {{ locale }}
      </span>
    </div>
  </div>
</template>
<script setup>
import {useI18n} from "vue-i18n";
import {ref} from "vue";
import LangIcon from "@components/LangIcon.vue";
import {getItem, setItem, removeItem} from "@/utils/storage";

const show = ref(false)
const select = ref(null)
const {availableLocales, locale} = useI18n({ useScope: 'global' });
const locales = availableLocales;

function changeLocale(loc) {
  show.value = false;
  locale.value = loc;
  setItem('language', loc)
}

</script>