<template>
  <div class="card-model primary-color-2">
    <!-- Represent -->
    <img
      :src="models[0].represent"
      alt="image-model"
      class="block w-full cursor-pointer"
      @click="showModel"
    />
    <!-- Info -->
    <div class="card-info flex items-center px-2 py-3">
      <!-- Left -->
      <div class="flex items-center flex-1">
        <!-- Author -->
        <img
          :src="models[0].author.avatar"
          alt="avatar"
          class="block w-5 mr-2"
        />
        <!-- Name model -->
        <div
          class="primary-hover-1 cursor-pointer limited-line-1"
          @click="showModel"
        >
          {{ models[0].name }}
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
          <div class="text-xs">{{ models[0].views }}</div>
        </div>
        <!-- Comment -->
        <div class="flex mx-2">
          <img
            src="../../assets/icons/comment.svg"
            alt="comment"
            class="flex items-center justify-center w-3 mr-1"
          />
          <div class="text-xs">{{ models[0].comments }}</div>
        </div>
        <!-- Like -->
        <div class="flex cursor-pointer" @click="triggerLike">
          <img
            v-if="isLike"
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
          <div class="text-xs" :class="isLike ? 'liked' : ''">
            {{ models[0].like }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- model -->
  <Model :model="models[0]" :isShowModel="isShowModel"></Model>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import Model from './model/Model.vue';

const models = reactive([
  {
    id: 'model3',
    name: 'model3',
    views: 910,
    comments: 52,
    like: 120,
    author: {
      name: 'author',
      avatar: '/public/assets/models/model3/avatar-user.jpeg',
    },
    url: 'public/assets/models/model3/model/scene.gltf',
    represent: '/public/assets/models/model3/represent-image.png',
    backgroundColor: '#2b2b2c',
    cameraPosition: [0, 200, 350],
    bloom: {
      isBloom: true,
      parameter: [2, 1.5, 0.1],
    },
    isAnimation: true,
  },
]);

const isLike = ref<boolean>(false);
const triggerLike = () => {
  isLike.value = !isLike.value;
  if (isLike.value) {
    models[0].like++;
  } else {
    models[0].like--;
  }
};

const isShowModel = ref<boolean>(false);
const showModel = () => {
  isShowModel.value = true;
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';

.card-model {
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  box-shadow: 0 1px 1px rgba($color: #7f409f, $alpha: 0.1),
    0 7px 18px 0 rgba($color: #7f409f, $alpha: 0.1);

  &:hover {
    box-shadow: 0 1px 1px rgba($color: #00b3fc, $alpha: 0.1),
      0 7px 18px 0 rgba($color: #00b3fc, $alpha: 0.1);
  }
}

.liked {
  color: #ff9e3a;
}
</style>
