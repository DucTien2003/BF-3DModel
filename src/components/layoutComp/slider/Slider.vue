<template>
  <div>
    <div v-if="checkStore.getIsMobile">
      <a-drawer
        :width="256"
        placement="left"
        :closable="false"
        :open="isCollapsed"
        @close="toggleSlider"
        class="slider-drawer theme-dark-drawer"
      >
        <div class="flex items-center ml-6 my-4">
          <span class="primary-linear-text text-xl font-black">BF-3DModel</span>
        </div>
        <Menu></Menu>
      </a-drawer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Menu from './Menu.vue';
import { useSliderStore, useCheckStore } from '@/stores';

const sliderStore = useSliderStore();
const checkStore = useCheckStore();
const isCollapsed = computed(() => sliderStore.getIsCollapsed);
const toggleSlider = () => {
  sliderStore.setIsCollapse(!isCollapsed.value);
};
// const selectedKeys = ref<string[]>(['1']);
// const collapsed = ref<boolean>(false);
</script>

<style scoped lang="scss"></style>
