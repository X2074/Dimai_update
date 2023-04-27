<template>
    <div id="menu" v-if="open" class="w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0 z-50 overflow-y-scroll">
        <div class="w-full h-full text-center py-4 md:py-20 flex justify-center items-center">
            <slot />
        </div>
    </div>
</template>

<script setup>

defineProps(['open'])
</script>