<template>
  <div class="h-full overflow-x-auto p-5">
    <div id="model" class="flex">
      <div class="model-container">
        <!-- Screen -->
        <div id="screen-model"></div>

        <!-- Info model -->
        <div class="mt-3">
          <!-- Name -->
          <div class="text-2xl font-semibold">{{ model.name }}</div>

          <!-- Author -->
          <div class="flex items-center justify-between mt-3 pb-5 border-b">
            <!-- Left -->
            <div class="flex items-center">
              <img
                :src="model.author.avatar"
                alt="avatar"
                class="w-12 rounded"
              />

              <div class="ml-3 flex flex-col">
                <div
                  class="inline font-semibold text-base cursor-pointer primary-hover-2"
                >
                  {{ model.author.name }}
                </div>
                <div>
                  <div
                    class="primary-bg-color-1 inline-block text-white font-medium px-5 py-1 text-xs rounded cursor-pointer primary-hover-2"
                  >
                    FOLLOW
                  </div>
                </div>
              </div>
            </div>

            <!-- Right -->
            <div class="flex primary-color-2 select-none">
              <!-- Downloads -->
              <div class="action-item">
                <img
                  src="../../../assets/icons/download.svg"
                  alt="icon"
                  class="w-5 mr-1"
                />
                <div class="font-semibold">
                  {{ showQuantity(model.downloads) }}
                </div>
              </div>
              <!-- Views -->
              <div class="action-item">
                <img
                  src="../../../assets/icons/view.svg"
                  alt="icon"
                  class="w-5 mr-1"
                />
                <div class="font-semibold">{{ showQuantity(model.views) }}</div>
              </div>
              <!-- Like -->
              <div class="action-item cursor-pointer" @click="toggleLike">
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
                <div class="font-semibold" :class="model.isLike ? 'liked' : ''">
                  {{ showQuantity(model.like) }}
                </div>
              </div>
            </div>
          </div>

          <!-- Release -->
          <div class="flex items-center justify-between my-5 font-semibold">
            <div class="flex items-center">
              <img
                src="../../../assets/icons/time.svg"
                alt="icon"
                class="w-5 mr-1"
              />
              <div>{{ model.release }}</div>
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
              <div>More info model</div>
            </div>
          </div>

          <!-- Categories -->
          <div class="flex pb-5 font-semibold">
            <div class="w-5 mr-1">
              <img
                src="../../../assets/icons/box.svg"
                alt="icon"
                class="w-5 mt-1"
              />
            </div>
            <div class="flex flex-wrap flex-1">
              <div
                v-for="(category, index) in model.categories"
                class="category-item primary-hover-2"
                :key="index"
              >
                {{ category }}
              </div>
            </div>
          </div>

          <!-- Tags -->
          <div class="flex pb-5 font-semibold border-b">
            <div class="w-5 mr-1">
              <img
                src="../../../assets/icons/tag.svg"
                alt="icon"
                class="w-5 mt-1"
              />
            </div>
            <div class="flex flex-wrap flex-1">
              <div
                v-for="(tag, index) in model.tags"
                class="tag-item primary-hover-2"
                :key="index"
              >
                {{ tag }}
              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="flex py-5 border-b">
            <div class="w-5 mr-1">
              <img
                src="../../../assets/icons/description.svg"
                alt="icon"
                class="w-5"
              />
            </div>
            <div class="flex flex-wrap flex-1">
              <div>
                {{ model.description || 'No description' }}
              </div>
            </div>
          </div>

          <!-- Same author -->
          <div class="flex py-5">
            <div class="text-lg primary-color-2 primary-color-2 font-semibold">
              Same author
            </div>
            <!-- <div></div> -->
          </div>
        </div>
      </div>

      <!-- Suggest -->
      <div class="flex flex-col flex-1 ml-5 primary-border-2 p-5">
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

<script lang="ts" setup>
import { onMounted } from 'vue';
import { addRenderer, renderModel, showQuantity } from '@/utils';
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

<style lang="scss" setup>
.model-container {
  width: 70%;
}

.action-item {
  display: flex;
  align-items: center;
  justify-content: center;

  + .action-item {
    margin-left: 12px;
  }
}

.liked {
  color: #ff9e3a;
}

.category-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  margin: 0 8px 8px 0;
  border: 2px solid #c5c5c5;
  border-radius: 4px;
  cursor: pointer;
}

.tag-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin: 0 8px 8px 0;
  border-radius: 4px;
  background-color: #ececec;
  cursor: pointer;
}
</style>
