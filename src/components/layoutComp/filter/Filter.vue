<template>
  <div class="container-content primary-box-shadow-2 flex items-center z-10">
    <!-- Category -->
    <section>
      <a-dropdown :trigger="['click']" placement="bottomLeft">
        <div class="filter-dropdown p-3 cursor-pointer">
          <span class="text-tiny primary-color-2">CATEGORY</span>
          <div class="flex items-center justify-center">
            <span class="text-base primary-color-1">{{ categoryValue }}</span>
            <img
              class="block items-center w-2 ml-2 mt-1"
              src="../../../assets/icons/down.svg"
              alt="down"
            />
          </div>
        </div>
        <template #overlay>
          <ul
            class="category-container primary-box-shadow-2-1 primary-dropdown-shadow flex flex-wrap p-2 bg-white z-10"
          >
            <li
              v-for="(category, key) in categories"
              :key="key"
              class="w-1/3"
              @click="changeCategory(category)"
            >
              <a
                class="dropdown-item p-2 rounded-lg cursor-pointer"
                :class="categoryValue === category ? 'primary-color-1' : ''"
              >
                <span>{{ category }}</span>
              </a>
            </li>
          </ul>
        </template>
      </a-dropdown>
    </section>

    <!-- Sort -->
    <section>
      <a-dropdown :trigger="['click']" placement="bottomLeft">
        <div class="filter-dropdown p-3 cursor-pointer">
          <span class="text-tiny primary-color-2">SORT BY</span>
          <div class="flex items-center justify-center">
            <span class="text-base primary-color-1">{{ sortValue }}</span>
            <img
              class="block items-center w-2 ml-2 mt-1"
              src="../../../assets/icons/down.svg"
              alt="down"
            />
          </div>
        </div>
        <template #overlay>
          <ul class="primary-box-shadow-2-1 p-2 flex flex-col bg-white">
            <li
              v-for="(sortItem, key) in sorts"
              :key="key"
              class="dropdown-item"
              :class="sortItem === sortValue ? 'primary-color-1' : ''"
              @click="changeSort(sortItem)"
            >
              <a class="p-2 rounded-lg cursor-pointer">{{ sortItem }}</a>
            </li>
          </ul>
        </template>
      </a-dropdown>
    </section>

    <!-- Checkbox -->
    <section class="filter-check p-3">
      <span class="text-tiny primary-color-2">FILTER</span>
      <ul class="flex items-center justify-center">
        <li
          v-for="(filterCheck, index) in filterChecks"
          class="text-base primary-color-1 cursor-pointer mr-2"
          :key="index"
        >
          <a-checkbox v-model:checked="filterCheck.checked">
            <span>{{ filterCheck.title }}</span>
          </a-checkbox>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { categories, sorts } from '@/utils/constants';

const categoryValue = ref('All categories');
const sortValue = ref('Relevance');

const filterChecks = reactive([
  { title: 'Downloadable', checked: false },
  { title: 'Animated', checked: false },
  { title: 'Staff picks', checked: false },
]);

const changeCategory = (option: string) => {
  categoryValue.value = option;
};

const changeSort = (option: string) => {
  sortValue.value = option;
};
</script>

<style scoped lang="scss">
@import '../../../assets/styles/variables';

.filter-dropdown:hover {
  background-color: #f3f3f3;
}

.category-container {
  width: 600px;
}

.dropdown-item:hover {
  color: var(--primary-color-2);
  background-color: #f3f3f3;
}
</style>
