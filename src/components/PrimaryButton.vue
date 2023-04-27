<template>
    <button class="primary-btn">
        <slot />
    </button>
</template>

<script setup>
</script>

<style scoped>
    .primary-btn {
      background-color: #000;
      color: #fff;
      text-transform: capitalize;
      padding: 5px 15px;
      border-radius: 5px;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
      font-weight: 600;
      cursor: pointer;
    }
</style>