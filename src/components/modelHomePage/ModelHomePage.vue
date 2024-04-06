<template>
  <!-- Screen -->
  <div id="introduce-screen" class="w-1/2"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { models as modelsAPI } from '@/api';
import { addRenderer, renderModel, disposeScene } from './model';

onMounted(() => {
  addRenderer('#introduce-screen');
  const model = modelsAPI[4];

  renderModel(model.setting.url, model.setting.animation, model.setting.camera);
});

onUnmounted(() => {
  disposeScene();
});
</script>

<style setup lang="scss"></style>
