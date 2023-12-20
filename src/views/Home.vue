<template>
  <div class="container-content home">
    <card-model></card-model>
  </div>
  <div>
    <a-button type="primary" @click="showModal">Open Modal</a-button>
    <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CardModel from '@/components/cardModel/CardModel.vue';

const open = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};

const handleOk = (e: MouseEvent) => {
  console.log(e.target);
  open.value = false;
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #f2f2f2;
}
</style>
