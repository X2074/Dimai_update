<template>
    <div class="my-container">
        <header class="md:justify-between items-center md:flex my-4">
            <div class="text-center md:text-left w-full md:w-2/3">
                <img src="@/assets/logo2.jpeg" class="w-1/12 text-center mx-auto md:mx-0 cursor-pointer" @click="gotoHome">
            </div>
            <div class="flex justify-between px-1 md:w-2/4 font-semibold text-xs md:text-base items-center">
                <Lang class="px-1" />
                <RouterLink to="/" class="px-1" >{{ $t('home') }}</RouterLink>
                <RouterLink class="menu-item px-1" to="/create">{{ $t('create') }}</RouterLink>
                <div class="relative px-1">
                    <span class="flex" @mouseenter="show = true" @mouseleave="show = false">
                      <span class="cursor-pointer">{{$t('gallery')}}</span>
                    </span>
                    <div v-show="show" class="absolute left-0 py-2 mt-0 bg-white rounded-md shadow-xl w-44" @mouseenter="show = true" @mouseleave="show = false">
                        <RouterLink to="/gallery/creative-space" @click="show = false" class="block px-4 py-2 text-sm text-black hover:text-gray-400 border-black border-2 rounded my-1 hover:border-gray-600">
                            {{ $t('Creative Space') }}
                        </RouterLink>
                        <RouterLink to="/gallery/theme-painting" @click="show = false" class="block px-4 py-2 text-sm text-black hover:text-gray-400 border-black border-2 rounded my-1 hover:border-gray-600">
                            {{ $t('Theme Painting') }}</RouterLink>
                    </div>
                </div>
                <ConnectButton />
            </div>
        </header>
    </div>

</template>

<script setup>
import { RouterLink } from 'vue-router'
import ConnectButton from '@components/ConnectButton.vue';
import Lang from "@components/Lang.vue";
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const show = ref(false);

const gotoHome = () => {
    router.push('/')
}

</script>

<style scoped>
.router-link-active {
    border-radius: 0.25rem;
    background-color: #000000;
    border-color: #000000;
    color: #ffffff;
    padding: 4px 25px
}
span > .router-link-active {
  border-radius: 0.25rem;
  background-color: #000000;
  border-color: #000000;
    color: #ffffff;
    padding: 4px 25px
}

</style>