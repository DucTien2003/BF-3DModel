<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useCheckStore } from './stores';

const route = useRoute();
const layout = computed(() => `${route.meta.layout || 'default-layout'}`);

const checkStore = useCheckStore();
checkStore.setIsHomePage(route.name === 'home');

watch(
  () => route.name,
  (to: any, from: any) => {
    checkStore.setIsHomePage(route.name === 'home');
  },
);
</script>

<style scoped></style>
