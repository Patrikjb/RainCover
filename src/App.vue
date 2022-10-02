<template>
  <div class="my-custom-bg">
      <MobileView/>  
  </div>
</template>

<script setup>
import MainView from './Views/MainView.vue'
import MobileView from './Views/MobileView.vue'

const imgBG = '@/assets/img_123.jpg'


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;700&display=swap');

#app {
  margin: 0;
  padding: 0;
}
</style>
