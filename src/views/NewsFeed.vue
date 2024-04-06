<template>
  <div class="container-content wrapper-content py-7">
    <div class="news-feed flex flex-wrap">
      <card-model
        v-for="(model, index) in models"
        :key="index"
        :model="model"
        class="w-1/3 mb-4 px-2"
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

<script setup lang="ts">
import { reactive } from 'vue';

import { useModalStore } from '@/stores';
import { models as modelsAPI } from '@/api';
import CardModel from '@/components/cardModel/CardModel.vue';
import { disposeScene } from '@/components/cardModel/modalModelDetail/model';
import ModalModelDetail from '@/components/cardModel/modalModelDetail/ModalModelDetail.vue';

const modalStore = useModalStore();

const models = reactive(modelsAPI);
</script>

<style scoped lang="scss">
.wrapper-content {
  background-color: #f2f2f2;
}

.news-feed {
  margin: 0 -10px;
}
</style>
