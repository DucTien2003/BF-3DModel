<template>
  <!-- Screen -->
  <div id="author-screen" class="w-1/2"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch } from 'vue';
import { useRoute } from 'vue-router';
import { models as modelsAPI } from '@/api';
import { addRenderer, renderModel, disposeScene } from './model';

const route = useRoute();
const handleModelAuthor = () => {
  if (route.name === 'login') {
    const model = modelsAPI[4];

    renderModel(
      model.setting.url,
      model.setting.animation,
      model.setting.camera,
    );
  } else if (route.name === 'register') {
    const model = modelsAPI[5];

    renderModel(
      model.setting.url,
      model.setting.animation,
      model.setting.camera,
    );
  } else if (route.name === 'forgot-password') {
    const model = modelsAPI[6];

    renderModel(
      model.setting.url,
      model.setting.animation,
      model.setting.camera,
    );
  } else if (route.name === 'reset-password') {
    const model = modelsAPI[7];

    renderModel(
      model.setting.url,
      model.setting.animation,
      model.setting.camera,
    );
  }
};

onMounted(() => {
  addRenderer('#author-screen');
  handleModelAuthor();
});

onBeforeUnmount(() => {
  disposeScene();
});

watch(
  () => route.name,
  () => {
    handleModelAuthor();
  },
);
</script>

<style setup lang="scss"></style>
