<template>
  <div class="flex flex-col min-h-screen">
    <!-- Slider -->
    <Slider :isMobile="isMobile"></Slider>
    <!-- Header -->
    <Header :isMobile="isMobile"></Header>
    <!-- Filter -->
    <Filter></Filter>

    <!-- Body -->
    <slot></slot>

    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
// import { useRouter } from 'vue-router';
import Slider from '@/components/layoutComp/slider/Slider.vue';
import Header from '@/components/layoutComp/header/Header.vue';
import Filter from '@/components/layoutComp/filter/Filter.vue';
import Footer from '@/components/layoutComp/footer/Footer.vue';

const isMobile = ref<boolean>(window.innerWidth <= 768);

const handleResize = () => {
  const widthScreen = window.innerWidth || 0;
  isMobile.value = widthScreen <= 768;
};
onMounted(() => {
  window.addEventListener('resize', handleResize);
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped lang="scss"></style>
