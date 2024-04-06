<template>
  <div id="upload" class="w-full px-6 py-6">
    <a-form
      class="flex flex-wrap border p-4"
      :model="formState"
      name="upload-file"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <div class="flex flex-col w-1/4 px-3">
        <!-- Upload -->
        <div class="flex justify-between">
          <!-- Represent -->
          <div class="flex flex-col">
            <span class="font-medium inline-block my-1">Represent </span>
            <a-upload list-type="picture-card">
              <div>
                <plus-outlined />
                <div class="mt-2">Upload</div>
              </div>
            </a-upload>
          </div>

          <!-- Model -->
          <div class="flex flex-col">
            <span class="font-medium inline-block my-1"> Model </span>
            <a-upload list-type="picture-card">
              <div>
                <plus-outlined />
                <div class="mt-2">Upload</div>
              </div>
            </a-upload>
          </div>
        </div>

        <!-- Name -->
        <a-form-item name="name" class="mt-6 mb-10">
          <a-input
            v-model:value="formState.name"
            placeholder="Name model"
            class="name-input font-semibold text-3xl"
          />
        </a-form-item>

        <a-button
          type="primary"
          html-type="submit"
          size="large"
          class="w-full font-semibold text-lg"
        >
          Upload
        </a-button>

        <router-link :to="{ name: 'home' }" class="mt-3">
          <a-button
            type="primary"
            danger
            ghost
            html-type="button"
            size="large"
            class="w-full font-semibold text-lg"
          >
            Cancel
          </a-button>
        </router-link>
      </div>

      <div class="w-5/12 px-5">
        <!-- Background color -->
        <a-form-item name="bg-color">
          <label
            for="upload-file_bg-color"
            class="font-medium inline-block my-1 mr-2"
          >
            Background color
          </label>
          <a-tag :color="formState.setting.backgroundColor">
            {{ formState.setting.backgroundColor }}
          </a-tag>
          <a-input
            v-model:value="formState.setting.backgroundColor"
            placeholder="Background color"
          />
        </a-form-item>

        <!-- Categories -->
        <div class="mb-3">
          <label
            for="upload-file_categories"
            class="font-medium inline-block my-1"
          >
            Categories
          </label>
          <a-select
            v-model:value="formState.categories"
            mode="multiple"
            class="w-full"
            placeholder="Categories"
            :options="
              categories.map((category) => ({
                value: category,
                label: category,
              }))
            "
            @change="handleChange"
          ></a-select>
        </div>

        <!-- Description -->
        <a-form-item name="description">
          <label
            for="upload-file_description"
            class="font-medium inline-block my-1"
          >
            Description
          </label>
          <a-textarea
            v-model:value="formState.description"
            placeholder="Enter your description..."
            :rows="5"
            class="text-base"
          />
        </a-form-item>
      </div>

      <!-- Camera - Bloom - Animation -->
      <div class="w-1/3 px-3">
        <!-- Camera position -->
        <div>
          <span class="font-medium inline-block my-1">Camera position</span>
          <div class="flex">
            <!-- X -->
            <a-form-item name="camera-position-x" class="w-1/3">
              <div class="flex items-center">
                <label
                  for="upload-file_camera-position-x"
                  class="inline-block mb-1 mr-2"
                >
                  <span class="flex items-center justify-center text-lg">
                    x
                  </span>
                </label>
                <a-input-number
                  v-model:value="formState.setting.camera.cameraPosition[0]"
                  :min="0"
                  :max="5000"
                  :step="0.01"
                  string-mode
                />
              </div>
            </a-form-item>

            <!-- Y -->
            <a-form-item name="camera-position-y" class="w-1/3">
              <div class="flex items-center">
                <label
                  for="upload-file_camera-position-y"
                  class="inline-block mb-1 mr-2"
                >
                  <span class="flex items-center justify-center text-lg">
                    y
                  </span>
                </label>
                <a-input-number
                  v-model:value="formState.setting.camera.cameraPosition[1]"
                  :min="0"
                  :max="5000"
                  :step="0.01"
                  string-mode
                />
              </div>
            </a-form-item>

            <!-- Z -->
            <a-form-item name="camera-position-z" class="w-1/3">
              <div class="flex items-center">
                <label
                  for="upload-file_camera-position-z"
                  class="inline-block mb-1 mr-2"
                >
                  <span class="flex items-center justify-center text-lg">
                    z
                  </span>
                </label>
                <a-input-number
                  v-model:value="formState.setting.camera.cameraPosition[2]"
                  :min="0"
                  :max="5000"
                  :step="0.01"
                  string-mode
                />
              </div>
            </a-form-item>
          </div>
        </div>

        <!-- Camera look at -->
        <div>
          <span class="font-medium inline-block my-1">Camera look at</span>
          <div class="flex">
            <!-- X -->
            <a-form-item name="camera-look-at-x" class="w-1/3">
              <div class="flex items-center">
                <label
                  for="upload-file_camera-look-at-x"
                  class="inline-block mb-1 mr-2"
                >
                  <span class="flex items-center justify-center text-lg">
                    x
                  </span>
                </label>
                <a-input-number
                  v-model:value="formState.setting.camera.lookAt[0]"
                  :min="0"
                  :max="5000"
                  :step="0.01"
                  string-mode
                />
              </div>
            </a-form-item>

            <!-- Y -->
            <a-form-item name="camera-look-at-y" class="w-1/3">
              <div class="flex items-center">
                <label
                  for="upload-file_camera-look-at-y"
                  class="inline-block mb-1 mr-2"
                >
                  <span class="flex items-center justify-center text-lg">
                    y
                  </span>
                </label>
                <a-input-number
                  v-model:value="formState.setting.camera.lookAt[1]"
                  :min="0"
                  :max="5000"
                  :step="0.01"
                  string-mode
                />
              </div>
            </a-form-item>

            <!-- Z -->
            <a-form-item name="camera-look-at-z" class="w-1/3">
              <div class="flex items-center">
                <label
                  for="upload-file_camera-look-at-z"
                  class="inline-block mb-1 mr-2"
                >
                  <span class="flex items-center justify-center text-lg">
                    z
                  </span>
                </label>
                <a-input-number
                  v-model:value="formState.setting.camera.lookAt[2]"
                  :min="0"
                  :max="5000"
                  :step="0.01"
                  string-mode
                />
              </div>
            </a-form-item>
          </div>
        </div>

        <!-- Bloom - Animation -->
        <div class="flex">
          <!-- Animation -->
          <div class="w-1/2">
            <a-form-item name="animation">
              <div class="flex items-center">
                <label
                  for="upload-file_animation"
                  class="font-medium inline-block mr-2"
                >
                  Animation
                </label>
                <a-input-number
                  v-model:value="formState.setting.animation"
                  :min="0"
                  :max="1000"
                  :step="1"
                  string-mode
                />
              </div>
            </a-form-item>
          </div>

          <!-- Bloom -->
          <div class="w-1/2">
            <a-form-item name="bloom">
              <label
                for="upload-file_bloom"
                class="font-medium inline-block my-1 mr-2"
              >
                Bloom
              </label>
              <a-switch v-model:checked="formState.setting.bloom.isBloom" />
            </a-form-item>

            <!-- Bloom parameters -->
            <div v-if="formState.setting.bloom.isBloom" class="flex flex-col">
              <!-- Strength -->
              <a-form-item name="strength" class="w-full">
                <div class="flex items-center">
                  <label
                    for="upload-file_strength"
                    class="inline-block mr-1 w-1/3"
                  >
                    <span> Strength </span>
                  </label>
                  <a-input-number
                    v-model:value="formState.setting.bloom.parameter[0]"
                    :min="0"
                    :max="10"
                    :step="0.01"
                    string-mode
                  />
                </div>
              </a-form-item>

              <!-- Radius -->
              <a-form-item name="radius" class="w-full">
                <div class="flex items-center">
                  <label
                    for="upload-file_radius"
                    class="inline-block mr-1 w-1/3"
                  >
                    <span> Radius </span>
                  </label>
                  <a-input-number
                    v-model:value="formState.setting.bloom.parameter[1]"
                    :min="0"
                    :max="10"
                    :step="0.01"
                    string-mode
                  />
                </div>
              </a-form-item>

              <!-- Threshold -->
              <a-form-item name="threshold" class="w-full">
                <div class="flex items-center">
                  <label
                    for="upload-file_threshold"
                    class="inline-block mr-1 w-1/3"
                  >
                    <span> Threshold </span>
                  </label>
                  <a-input-number
                    v-model:value="formState.setting.bloom.parameter[2]"
                    :min="0"
                    :max="10"
                    :step="0.01"
                    string-mode
                  />
                </div>
              </a-form-item>
            </div>
          </div>
        </div>
      </div>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { PlusOutlined } from '@ant-design/icons-vue';

import { categories } from '@/utils/constants';

const formState = reactive({
  // id: 'model5',
  name: '',
  description: '',
  categories: [],
  represent: '',
  setting: {
    url: '',
    backgroundColor: '',
    camera: {
      cameraPosition: [0, 0, 0],
      lookAt: [0, 0, 0],
    },
    bloom: {
      isBloom: false,
      parameter: [0, 0, 0], // Sáng tổng thể(lớn), Độ chói(nhỏ), độ blur(nhỏ)
    },
    animation: 0,
  },
});

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>

<style scoped>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}

#upload {
  .ant-input-affix-wrapper,
  input.ant-input {
    font-size: 14px;
    padding: 4px 11px;
  }
}

.name-input {
  border: none;
  border-bottom: 1px solid;
  border-radius: 0 !important;
}
</style>
