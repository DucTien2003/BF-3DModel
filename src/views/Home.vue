<template>
  <div class="home w-full">
    <div class="w-full">
      <!-- Introduce -->
      <section id="introduce" class="introduce container-content py-20">
        <div
          class="home-section-container pt-8 mx-auto flex items-center justify-center"
        >
          <!-- Text -->
          <div class="flex flex-col w-1/2 text-white">
            <h1 class="home-color text-5xl">
              The leading platform for 3D model on the web
            </h1>
            <h3 class="text-gray-300 my-8 pr-8">
              Manage your 3D assets. Distribute 3D & AR experiences. Collaborate
              with others. Showcase your work. Buy & sell 3D models.
            </h3>
            <div>
              <button
                class="primary-button-1 primary-button-1 py-2 px-4 rounded-md"
              >
                <h3 class="font-semibold home-color">JOIN FOR FREE</h3>
              </button>
            </div>
          </div>
          <!-- Model -->
          <ModelHomePage></ModelHomePage>
        </div>
      </section>

      <!-- Feature -->
      <section id="feature" class="feature pb-10 bg-white">
        <div
          class="home-section-container feature-content primary-box-shadow-1 mx-auto flex items-center px-6"
        >
          <div class="w-1/3 px-6">
            <div class="px-2">
              <img
                src="../assets/images/feature_images/feature1.svg"
                alt="feature"
                class="w-full"
              />
            </div>
            <h3 class="text-center text-xl font-semibold py-4 mt-4">
              Join millions of 3D creators and showcase your work
            </h3>
          </div>

          <div class="w-1/3 px-6">
            <div class="px-2">
              <img
                src="../assets/images/feature_images/feature2.svg"
                alt="feature"
                class="w-full"
              />
            </div>
            <h3 class="text-center text-xl font-semibold py-4 mt-4">
              Buy & sell 3D models on the <br />
              BF-3Dmodel Store
            </h3>
          </div>

          <div class="w-1/3 px-6">
            <div class="px-2">
              <img
                src="../assets/images/feature_images/feature3.svg"
                alt="feature"
                class="w-full"
              />
            </div>
            <h3 class="text-center text-xl font-semibold py-4 mt-4">
              Share & embed 3D models anywhere online
            </h3>
          </div>
        </div>
      </section>

      <!-- Community -->
      <section id="community" class="community bg-emerald-100">
        <div class="m-auto py-20">
          <div class="text-center primary-color-1">
            <h1>Join millions of 3D creators</h1>
            <h3 class="text-gray-600 mt-4">
              Get inspired. Showcase your skills. Learn from millions of
              community members.
            </h3>
          </div>

          <div class="flex flex-wrap px-8 mt-10">
            <card-model
              v-for="(model, index) in models"
              :key="index"
              :model="model"
              class="w-1/6 mb-4 px-2"
            ></card-model>
          </div>
        </div>
      </section>

      <!-- Store -->
      <section id="store" class="store bg-white pb-20">
        <div class="flex flex-col">
          <div class="pt-20 pb-10 text-center w-3/5 m-auto">
            <h1 class="primary-color-1">
              Buy & sell 3D models on the BF-3Dmodel Store
            </h1>
            <h3 class="text-gray-600 mt-4">
              Find everything from low poly assets to animated rigs & digital
              scans for your 3D, virtual reality, and augmented reality
              projects.
            </h3>
          </div>
          <ul class="primary-box-shadow-1 flex flex-wrap p-2 w-3/5 m-auto">
            <li
              v-for="(category, key) in categories.slice(1)"
              :key="key"
              class="w-1/3"
            >
              <a
                class="category-item p-2 rounded-lg cursor-pointer primary-hover-2"
              >
                <span>{{ category }}</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

import { models as modelsAPI } from '@/api';
import { categories } from '@/utils/constants';
import CardModel from '@/components/cardModel/CardModel.vue';
import ModelHomePage from '@/components/modelHomePage/ModelHomePage.vue';

const models = reactive(modelsAPI);
</script>

<style scoped lang="scss">
@import '../assets/styles/variables.scss';

.home-color {
  color: var(--home-text-color);
}

.introduce {
  background: linear-gradient(
    to bottom,
    rgba(0, 179, 252, 0.85),
    rgba(127, 64, 159, 0.85)
  );
}

.home-section-container {
  max-width: 1130px;
  width: calc(100% - 64px);
}

.feature-content {
  transform: translateY(-60px);
}

.news-feed {
  margin: 0 -10px;
}
</style>
