<template>
  <div class="wrapper-card-model rounded-md">
    <div class="primary-box-shadow-1-2 flex flex-col primary-color-2">
      <!-- Represent -->
      <img
        :src="model.represent"
        alt="image-model"
        class="represent block w-full cursor-pointer"
        @click="!checkStore.isHomePage && modalStore.toggleShowModal(model)"
      />

      <!-- Info -->
      <div class="card-info flex items-center px-2 py-3">
        <!-- Left -->
        <div class="flex items-center mr-auto">
          <!-- Author -->
          <img
            :src="model.author.avatar"
            alt="avatar"
            class="inline-block mr-2 w-5"
          />
          <!-- Name model -->
          <a
            v-if="!checkStore.isHomePage"
            class="primary-hover-1 cursor-pointer limited-line-1"
            @click="modalStore.toggleShowModal(model)"
          >
            {{ model.name }}
          </a>
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
          <div
            class="flex"
            :class="{ 'cursor-pointer': !checkStore.isHomePage }"
            @click="!checkStore.isHomePage && toggleLike()"
          >
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

<script setup lang="ts">
import { useModalStore, useCheckStore } from '@/stores';
import { InfoModel } from '@/types';
import { showQuantity } from '@/utils';

const modalStore = useModalStore();
const checkStore = useCheckStore();

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

<style scoped lang="scss">
@import '../../assets/styles/variables';

.represent {
  aspect-ratio: 2;
}

.liked {
  color: var(--liked-color);
}
</style>
