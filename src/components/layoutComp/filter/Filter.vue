<template>
  <div class="container-content filter">
    <!-- Category -->
    <a-dropdown :trigger="['click']" placement="bottomLeft">
      <div class="filter-dropdown">
        <div class="text-tiny primary-color-2">CATEGORY</div>
        <div class="flex items-center justify-center">
          <div class="text-base primary-color-1">{{ categoryValue }}</div>
          <img
            class="block items-center w-2 ml-2 mt-1"
            src="../../../assets/icons/down.svg"
            alt="down"
          />
        </div>
      </div>
      <template #overlay>
        <div class="category-container">
          <div
            v-for="(option, key) in category"
            :key="key"
            class="w-1/3"
            :class="categoryValue === option ? 'primary-color-1' : ''"
            @click="changeCategory(option)"
          >
            <div class="dropdown-item">{{ option }}</div>
          </div>
        </div>
      </template>
    </a-dropdown>

    <!-- Sort -->
    <a-dropdown :trigger="['click']" placement="bottomLeft">
      <div class="filter-dropdown">
        <div class="text-tiny primary-color-2">SORT BY</div>
        <div class="flex items-center justify-center">
          <div class="text-base primary-color-1">{{ sortValue }}</div>
          <img
            class="block items-center w-2 ml-2 mt-1"
            src="../../../assets/icons/down.svg"
            alt="down"
          />
        </div>
      </div>
      <template #overlay>
        <div class="sort-container">
          <div
            v-for="(option, key) in sort"
            :key="key"
            class="dropdown-item"
            :class="option === sortValue ? 'primary-color-1' : ''"
            @click="changeSort(option)"
          >
            {{ option }}
          </div>
        </div>
      </template>
    </a-dropdown>

    <!-- Checkbox -->
    <div class="filter-check">
      <div class="text-tiny primary-color-2">FILTER</div>
      <div class="flex items-center justify-center">
        <div
          v-for="(filterCheck, index) in filterChecks"
          class="text-base primary-color-1 cursor-pointer mr-2"
          :key="index"
        >
          <a-checkbox :checked="filterCheck.checked">{{
            filterCheck.title
          }}</a-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const categoryValue = ref('All categories');
const category = reactive([
  'All categories',
  'Animals & Pets',
  'Architecture',
  'Art & Abstract',
  'Cars & Vehicles',
  'Characters & Creatures',
  'Cultural Heritage & History',
  'Electronics & Gadgets',
  'Fashion & Style',
  'Food & Drink',
  'Furniture & Home',
  'Music',
  'Nature & Plants',
  'News & Politics',
  'People',
  'Places & Travel',
  'Science & Technology',
  'Sports & Fitness',
  'Weapons & Military',
]);

const sortValue = ref('Relevance');
const sort = reactive([
  'Relevance',
  'Most recent',
  'Most viewed',
  'Most liked',
]);

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

<style lang="scss" scoped>
@import '../../../assets/styles/variables';

.filter {
  display: flex;
  align-items: center;
  box-shadow: 0 1px 5px rgba($color: #7f409f, $alpha: 0.1);
  z-index: 3;
}

.filter-dropdown {
  padding: 15px;
  cursor: pointer;

  &:hover {
    background-color: #f3f3f3;
  }
}

.category-container {
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  padding: 7px;
  background-color: #fff;
  box-shadow: 0 11px 20px 0 rgba($color: #7f409f, $alpha: 0.1);
  z-index: 10;
}

.dropdown-item {
  padding: 6px 8px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    color: var(--primary-color-2);
    background-color: #f3f3f3;
  }
}

.sort-container {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 11px 20px 0 rgba($color: #7f409f, $alpha: 0.1);
}

.filter-check {
  padding: 10px;
}
</style>
