<script>
import LaunchButtonSVG from "@components/icons/LaunchButtonSVG.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {LaunchButtonSVG}
})

</script>
<template>
  <div class="hero">
      <div class="hero-title">
          <h5 class="title">The creation of metaverse begins with DimAI</h5>
          <p class="small-text">A one-stop NFT creation platform powered by AIGC</p>
          <LaunchButtonSVG />
      </div>
      <div class="hero-img">
<!--          <img src="@/assets/ribbons.png" alt="">-->
      </div>
  </div>
</template>
<style scoped>
.hero {
    display: flex;
    width: 1440px;
    height: 677px;
    margin: 0 auto;
}
.hero-title {
    /*width: 40%;*/
}
.title{
    top: 178px;
    font-size: 50px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 78px;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    vertical-align: top;
    width: 655px;
    height: 161px;
    margin-top: 178px;
}
.small-text {
    width: 494px;
    height: 35px;
    opacity: 1;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 35px;
    color: rgba(0, 0, 0, 0.53);
    text-align: left;
    vertical-align: top;
    margin-bottom: 114px;
    margin-top: 88px;
}
.hero-img {
    /*width: 60%;*/
    position: absolute;
    background-image: url("@/assets/ribbons.png");
    left: 695px;
    top: 28px;
    width: 828px;
    height: 621px;
}
</style>