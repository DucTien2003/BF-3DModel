<template>
  <div class="h-full overflow-x-auto p-5">
    <div id="model" class="flex">
      <div class="model-container">
        <!-- Screen -->
        <div id="screen-model"></div>

        <!-- Info model -->
        <div class="mt-3">
          <!-- Name -->
          <h2 class="font-semibold">{{ model.name }}</h2>

          <!-- Author -->
          <section class="flex items-center justify-between mt-3 pb-5 border-b">
            <!-- Left -->
            <div class="flex items-center">
              <img
                :src="model.author.avatar"
                alt="avatar"
                class="w-12 rounded"
              />

              <div class="ml-3 flex flex-col">
                <a
                  class="inline font-semibold text-base cursor-pointer primary-hover-2"
                >
                  {{ model.author.name }}
                </a>
                <div>
                  <button
                    class="primary-bg-color-1 inline-block text-white font-medium px-5 py-1 text-xs rounded cursor-pointer primary-hover-2"
                  >
                    <span>FOLLOW</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Right -->
            <div class="flex primary-color-2 select-none">
              <!-- Downloads -->
              <div class="action-item flex items-center justify-center">
                <img
                  src="../../../assets/icons/download.svg"
                  alt="icon"
                  class="w-5 mr-1"
                />
                <span class="font-semibold">
                  {{ showQuantity(model.downloads) }}
                </span>
              </div>
              <!-- Views -->
              <div class="action-item flex items-center justify-center">
                <img
                  src="../../../assets/icons/view.svg"
                  alt="icon"
                  class="w-5 mr-1"
                />
                <span class="font-semibold">
                  {{ showQuantity(model.views) }}
                </span>
              </div>
              <!-- Like -->
              <div
                class="action-item flex items-center justify-center cursor-pointer"
                @click="toggleLike"
              >
                <img
                  v-if="model.isLike"
                  src="../../../assets/icons/star-fill.svg"
                  alt="like"
                  class="flex items-center justify-center w-6 mr-1"
                />
                <img
                  v-else
                  src="../../../assets/icons/star.svg"
                  alt="like"
                  class="flex items-center justify-center w-5 mr-1"
                />
                <span
                  class="font-semibold"
                  :class="model.isLike ? 'liked' : ''"
                >
                  {{ showQuantity(model.like) }}
                </span>
              </div>
            </div>
          </section>

          <!-- Release -->
          <section class="flex items-center justify-between my-5 font-semibold">
            <div class="flex items-center">
              <img
                src="../../../assets/icons/time.svg"
                alt="icon"
                class="w-5 mr-1"
              />
              <span>{{ model.release }}</span>
            </div>
            <div
              class="flex items-center primary-filter-2 cursor-pointer"
              @click="showInfo"
            >
              <img
                src="../../../assets/icons/info.svg"
                alt="icon"
                class="w-5 mr-1"
              />
              <span>More info model</span>
            </div>
          </section>

          <!-- Categories -->
          <section class="flex font-semibold">
            <div>
              <img
                src="../../../assets/icons/box.svg"
                alt="icon"
                class="w-5 mt-1 mr-1"
              />
            </div>
            <ul class="flex flex-wrap flex-1">
              <li
                v-for="(category, index) in model.categories"
                class="category-item primary-hover-2 flex items-center justify-center mr-2 mb-2 rounded cursor-pointer"
                :key="index"
              >
                <a>{{ category }}</a>
              </li>
            </ul>
          </section>

          <!-- Tags -->
          <!-- <section class="flex pb-5 font-semibold border-b">
            <div class="w-5 mr-1">
              <img
                src="../../../assets/icons/tag.svg"
                alt="icon"
                class="w-5 mt-1"
              />
            </div>
            <ul class="flex flex-wrap flex-1">
              <li
                v-for="(tag, index) in model.tags"
                class="tag-item primary-hover-2 flex items-center justify-center p-1 mr-2 mb-2 rounded cursor-pointer"
                :key="index"
              >
                <a>{{ tag }}</a>
              </li>
            </ul>
          </section> -->

          <!-- Description -->
          <section class="flex py-5 border-b">
            <div>
              <img
                src="../../../assets/icons/description.svg"
                alt="icon"
                class="w-5 mr-1"
              />
            </div>
            <p class="flex-1">
              {{ model.description || 'No description' }}
            </p>
          </section>

          <!-- Same author -->
          <section class="flex py-5">
            <h3 class="primary-color-2 primary-color-2 font-semibold">
              Same author
            </h3>
            <!-- <div></div> -->
          </section>
        </div>
      </div>

      <!-- Suggest -->
      <div class="flex flex-col flex-1 ml-5 p-5 border border-gray-200">
        <div class="primary-color-1 text-4xl font-bold">FREE!</div>
        <!-- Benefits -->
        <div class="flex flex-col my-4">
          <div class="flex items-center">
            <img
              src="../../../assets/icons/lock.svg"
              alt="icon"
              class="w-4 mr-2"
            />
            <div>Secure payment</div>
          </div>
          <div class="flex items-center">
            <img
              src="../../../assets/icons/mail.svg"
              alt="icon"
              class="w-4 mr-2"
            />
            <div>Support from sellers</div>
          </div>
          <div class="flex items-center">
            <img
              src="../../../assets/icons/refresh.svg"
              alt="icon"
              class="w-4 mr-2"
            />
            <div>Access to future versions</div>
          </div>
        </div>
        <!-- Button -->
        <div
          class="text-center py-5 primary-bg-color-1 text-white font-bold text-base rounded cursor-pointer primary-hover-2"
          @click="downloadModel"
        >
          DOWNLOAD
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { showQuantity } from '@/utils';
import { addRenderer, renderModel, disposeScene } from './model';
import { useModalStore } from '@/stores';

const modalStore = useModalStore();

onMounted(() => {
  addRenderer();
  modalStore.setIsMounted(true);

  renderModel(
    model.setting.url,
    model.setting.backgroundColor,
    model.setting.animation,
    model.setting.bloom,
    model.setting.camera,
  );
});

onUnmounted(() => {
  disposeScene();
});

const { model, toggleLike } = defineProps<{
  model: any;
  toggleLike: () => void;
}>();

const showInfo = () => {
  console.log('Not supported yet');
};

const downloadModel = () => {
  console.log(model);
};
</script>

<style scoped lang="scss">
@import '../../../assets/styles/variables';

.model-container {
  width: 70%;
}

.action-item + .action-item {
  margin-left: 12px;
}

.liked {
  color: var(--liked-color);
}

.category-item {
  padding: 2px;
  border: 2px solid #c5c5c5;
}

.tag-item {
  background-color: #ececec;
}
</style>
