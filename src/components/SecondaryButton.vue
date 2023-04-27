<template>
    <button class="secondary-btn">
        <slot />
    </button>
</template>

<script setup>
</script>

<style scoped>
    .secondary-btn {
        background-color: #FFF;
        color: #000;
        text-transform: capitalize;
        padding: 3px 13px;
        border-radius: 5px;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
        font-weight: 600;
      cursor: pointer;
    }
</style>