<template>
  <div class="container-content header">
    <!-- Header -->
    <div class="flex items-center w-full">
      <!-- Header logo -->
      <div class="flex items-center justify-center">
        <!-- Collapse -->
        <div
          v-if="isMobile"
          class="flex items-center !cursor-pointer px-2"
          @click="triggerCollapse"
        >
          <MenuOutlined />
        </div>

        <!-- Logo -->
        <div class="logo primary-linear-text">BF-3Dmodel</div>
      </div>

      <!-- Navigation -->
      <div class="navigation-bar flex items-center mx-14">
        <div
          v-for="(navigationItem, index) in navigation"
          class="navigation-item"
          :class="isChoose === navigationItem.title ? 'navigation-choose' : ''"
          :key="index"
          @click="changePage(navigationItem.title)"
        >
          {{ navigationItem.title }}
        </div>
      </div>

      <!-- Actions -->
      <div class="flex items-center justify-center flex-1">
        <!-- Search -->
        <div class="search-bar flex-1">
          <a-input
            v-model:value.lazy="searchValue"
            placeholder="Search 3D Models"
            class="flex-1"
          />
          <div
            class="search-btn flex items-center justify-center cursor-pointer"
          >
            <img
              class="inline-block w-6 primary-filter-1"
              src="../../../assets/icons/search.svg"
              alt="Cart"
            />
          </div>
        </div>

        <!-- Cart -->
        <div class="action-icon">
          <a-dropdown :trigger="['click']" arrow placement="bottomRight">
            <a-badge :count="1" :overflow-count="10">
              <div class="cursor-pointer">
                <img
                  class="inline-block w-6 primary-filter-1"
                  src="../../../assets/icons/cart.svg"
                  alt="Cart"
                />
              </div>
            </a-badge>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <template #icon>
                    <UserOutlined />
                  </template>
                  Hồ sơ
                </a-menu-item>

                <a-menu-item @click="">
                  <template #icon>
                    <UserOutlined />
                  </template>
                  Đăng xuất
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>

        <!-- Notifications -->
        <div class="action-icon">
          <a-dropdown :trigger="['click']" arrow placement="bottomRight">
            <a-badge :count="1" :overflow-count="10">
              <div class="cursor-pointer">
                <img
                  class="inline-block w-6 primary-filter-1"
                  src="../../../assets/icons/bell.svg"
                  alt="Bell"
                />
              </div>
            </a-badge>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <template #icon>
                    <UserOutlined />
                  </template>

                  Hồ sơ
                </a-menu-item>

                <a-menu-item @click="">
                  <template #icon>
                    <UserOutlined />
                  </template>

                  Đăng xuất
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>

        <!-- User -->
        <div>
          <a-dropdown arrow placement="bottomRight">
            <div class="flex items-center cursor-pointer">
              <a-avatar size="large">
                <template #icon>
                  <UserOutlined />
                </template>
              </a-avatar>
            </div>

            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <template #icon>
                    <UserOutlined />
                  </template>
                  Hồ sơ
                </a-menu-item>

                <a-menu-item>
                  <template #icon>
                    <UserOutlined />
                  </template>
                  Đăng xuất
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { computed } from 'vue';
import { watch, ref, reactive } from 'vue';
import { MenuOutlined, UserOutlined } from '@ant-design/icons-vue';

import { SliderStore } from '@/stores';

defineProps<{
  isMobile: boolean;
}>();

const searchValue = ref<string>('');
const isChoose = ref('News feed');

const navigation = reactive([
  {
    title: 'News feed',
    to: { name: 'news feed' },
  },
  {
    title: 'Suggestions',
    to: { name: 'suggestions' },
  },
  {
    title: 'Top',
    to: { name: 'top' },
  },
  {
    title: 'Collections',
    to: { name: 'collections' },
  },
]);

const store = SliderStore();
const triggerCollapse = () => {
  store.triggerCollapse();
};
// const selectedKeys = ref<string[]>(['1']);
// const collapsed = ref<boolean>(false);

watch(searchValue, () => {
  console.log(searchValue.value);
});

const changePage = (title: string) => {
  isChoose.value = title;
};
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/variables';

.header {
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(34, 34, 34, 0.1);
}

.logo {
  min-width: 130px;
  font-size: 21px;
  font-weight: 900;
  user-select: none;
  cursor: pointer;
}

.navigation-item {
  position: relative;
  font-size: 17px;
  font-weight: 600;
  border-top: 4px solid transparent;
  cursor: pointer;

  &::after {
    content: '';
    display: none;
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 100%;
    background-color: var(--primary-color-2);
    animation: showUnderline 0.2s linear;
  }

  &:hover {
    color: var(--primary-color-2);

    &::after {
      display: inline-block;
    }
  }

  & + .navigation-item {
    margin-left: 15px;
  }
}

@keyframes showUnderline {
  from {
    opacity: 0;
    bottom: 0;
  }
  to {
    opacity: 1;
    bottom: -2px;
  }
}

.navigation-choose {
  &.navigation-item {
    color: var(--primary-color-1);

    &::after {
      display: inline-block;
      background-color: var(--primary-color-1);
    }
  }
}

.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-right: 20px;

  .ant-input {
    width: 200px;
    height: 100%;
    padding: 0px 15px;
    font-size: 16px;
    border-top-left-radius: 999px;
    border-bottom-left-radius: 999px;
  }

  .search-btn {
    height: 100%;
    padding: 0 13px;
    border-width: 1px;
    border-color: #d9d9d9;
    border-top-right-radius: 999px;
    border-bottom-right-radius: 999px;

    &:hover {
      border-color: #4096ff;
      box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
      border-inline-end-width: 1px;
      outline: 0;
    }
  }
}

.action-icon {
  width: 40px;
  height: 40px;
  padding: 8px;
  margin-right: 10px;
  background-color: #f5f5f5;
  border-radius: 999px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
}
</style>
