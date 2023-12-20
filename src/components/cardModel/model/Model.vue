<template>
  <!-- <a-modal v-model:open="open"> -->

  <div :id="model.id"></div>
  <!-- </a-modal> -->
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

import { addRenderer, renderModel } from './model';

onMounted(() => {
  addRenderer(props.model.id);
});

const props = defineProps<{
  model: any;
  isShowModel: boolean;
}>();

// console.log(props.isShowModel);

// watch(
//   () => props.isShowModel,
//   () => {
//     console.log(props.isShowModel);
//   },
// );

// const openModel = ref<boolean>(false);

renderModel(
  props.model.url,
  props.model.bloom.isBloom,
  props.model.isAnimation,
  props.model.backgroundColor,
  props.model.cameraPosition,
  1000,
  props.model.bloom.parameter,
);
</script>

<style lang="scss" scoped></style>
