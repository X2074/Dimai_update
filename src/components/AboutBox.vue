<script setup>
defineProps({
  variant: String,
});



</script>

<template>
  <div class="box">
    <div class="input-box input-box-shadow">

      <div class="text input-icons">

      </div>
    </div>
    <div class="input-box">

    </div>
  </div>

</template>

<style scoped>
.input-box {
  width: 80%;
  position: absolute;
  height: 65px;
  opacity: 1;
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  border: 2px solid rgba(0, 0, 0, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.8);
  padding: 20px;
}
.input-box-shadow{
  z-index: 10;
  top: -6px;
  left: -6px;
  margin-top: 0;

}
.box {
  width: 43%;
  position: relative;
  margin: 100px auto;
}
.bg-green {
  background: rgba(165, 214, 63, 1);
}
.bg-red {
  background: rgba(250, 150, 127, 1);
}
.bg-blue {
  background: rgba(131, 180, 235, 1);
}
</style>