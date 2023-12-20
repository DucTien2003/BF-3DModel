<template>
  <div>
    <div v-if="isMobile">
      <a-drawer
        :width="256"
        placement="left"
        :closable="false"
        :open="isCollapsed"
        @close="toggleSlider"
        class="slider-drawer theme-dark-drawer"
      >
        <div class="flex items-center ml-6 my-4">
          <div class="primary-linear-text text-xl font-black">BF-3DModel</div>
        </div>
        <Menu></Menu>
      </a-drawer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import Menu from './Menu.vue';
import { SliderStore } from '@/stores';

defineProps({
  isMobile: Boolean,
});

const store = SliderStore();
const isCollapsed = computed(() => store.getIsCollapsed);
const toggleSlider = () => {
  store.setIsCollapse(!isCollapsed.value);
};
// const selectedKeys = ref<string[]>(['1']);
// const collapsed = ref<boolean>(false);
</script>

<style lang="scss" scoped></style>
