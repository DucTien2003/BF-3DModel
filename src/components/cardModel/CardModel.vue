<template>
  <div class="wrapper-card-model">
    <div class="card-model primary-color-2">
      <!-- Represent -->
      <img
        :src="model.represent"
        alt="image-model"
        class="represent block w-full cursor-pointer"
        @click="modalStore.toggleShowModal(model)"
      />

      <!-- Info -->
      <div class="card-info flex items-center px-2 py-3">
        <!-- Left -->
        <div class="flex items-center flex-1">
          <!-- Author -->
          <img :src="model.author.avatar" alt="avatar" class="block w-5 mr-2" />
          <!-- Name model -->
          <div
            class="primary-hover-1 cursor-pointer limited-line-1"
            @click="modalStore.toggleShowModal(model)"
          >
            {{ model.name }}
          </div>
        </div>
        <!-- Right -->
        <div class="flex items-center justify-center ml-5 select-none">
          <!-- View -->
          <div class="flex cursor-default">
            <img
              src="../../assets/icons/view.svg"
              alt="view"
              class="flex items-center justify-center w-4 mr-1"
            />
            <div class="text-xs">{{ showQuantity(model.views) }}</div>
          </div>
          <!-- Comment -->
          <div class="flex mx-2">
            <img
              src="../../assets/icons/download.svg"
              alt="comment"
              class="flex items-center justify-center w-3 mr-1"
            />
            <div class="text-xs">{{ showQuantity(model.downloads) }}</div>
          </div>
          <!-- Like -->
          <div class="flex cursor-pointer" @click="toggleLike">
            <img
              v-if="model.isLike"
              src="../../assets/icons/star-fill.svg"
              alt="like"
              class="flex items-center justify-center w-4 mr-1"
            />
            <img
              v-else
              src="../../assets/icons/star.svg"
              alt="like"
              class="flex items-center justify-center w-4 mr-1"
            />
            <div class="text-xs" :class="model.isLike ? 'liked' : ''">
              {{ showQuantity(model.like) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useModalStore } from '@/stores';
import { InfoModel } from '@/types';
import { showQuantity } from '@/utils';

const modalStore = useModalStore();

const { model } = defineProps<{
  model: InfoModel;
}>();

const toggleLike = () => {
  model.isLike = !model.isLike;
  if (model.isLike) {
    model.like++;
  } else {
    model.like--;
  }
};
</script>

<style lang="scss" scoped>
.wrapper-card-model {
  width: calc(100% / 3);
  padding: 0 10px;
  margin-bottom: 20px;
}

.card-model {
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 1px rgba($color: #7f409f, $alpha: 0.1),
    0 7px 18px 0 rgba($color: #7f409f, $alpha: 0.1);

  &:hover {
    box-shadow: 0 1px 1px rgba($color: #00b3fc, $alpha: 0.1),
      0 7px 18px 0 rgba($color: #00b3fc, $alpha: 0.1);
  }
}

.represent {
  aspect-ratio: 2;
}

.liked {
  color: rgb(255, 156, 56);
}
</style>
