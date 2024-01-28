<template>
  <div class="container-content wrapper-content">
    <div class="home">
      <card-model
        v-for="(model, index) in models"
        :key="index"
        :model="model"
      ></card-model>
    </div>
  </div>

  <!-- Modal model detail -->
  <a-modal
    v-model:open="modalStore.isShowModal"
    :closable="false"
    :footer="null"
    :afterClose="disposeScene"
  >
    <ModalModelDetail
      :model="modalStore.getModel"
      :toggleLike="modalStore.toggleLike"
    ></ModalModelDetail>
  </a-modal>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

import { models as modelsAPI } from '@/api';
import CardModel from '@/components/cardModel/CardModel.vue';
import ModalModelDetail from '@/components/cardModel/modalModelDetail/ModalModelDetail.vue';
import { useModalStore } from '@/stores';
import { disposeScene } from '@/utils';

const modalStore = useModalStore();

const models = reactive(modelsAPI);
</script>

<style lang="scss" scoped>
.wrapper-content {
  background-color: #f2f2f2;
  padding-top: 30px;
  padding-bottom: 30px;
}

.home {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
}

.color {
  color: #bee2ff;
}
</style>
