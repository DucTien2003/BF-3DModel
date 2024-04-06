<template>
  <div
    class="wrapper flex flex-col min-h-screen relative"
    :class="checkStore.getIsHomePage ? 'home-wrapper' : ''"
  >
    <Slider></Slider>
    <Header></Header>
    <div v-if="!checkStore.getIsHomePage" class="space-header">
      <Filter></Filter>
    </div>

    <slot></slot>

    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { useCheckStore } from '@/stores';
import { listenerResize } from '@/utils';
import Slider from '@/components/layoutComp/slider/Slider.vue';
import Header from '@/components/layoutComp/header/Header.vue';
import Filter from '@/components/layoutComp/filter/Filter.vue';
import Footer from '@/components/layoutComp/footer/Footer.vue';

const checkStore = useCheckStore();

checkStore.setIsMobile(window.innerWidth <= 768);
const handleResize = () => {
  checkStore.setIsMobile(window.innerWidth <= 768);
};
listenerResize(handleResize);
</script>

<style scoped lang="scss">
.space-header {
  padding-top: 72px;
}
</style>
