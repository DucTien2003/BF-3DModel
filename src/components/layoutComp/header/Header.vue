<template>
  <!-- Header -->
  <header
    class="container-content header py-4"
    :class="
      checkStore.getIsHomePage && topHomePage
        ? 'bg-transparent'
        : 'primary-box-shadow-1-3  bg-white'
    "
  >
    <div class="flex items-center w-full">
      <!-- Header logo -->
      <section class="flex items-center justify-center">
        <!-- Collapse -->
        <div
          v-if="checkStore.getIsMobile"
          class="flex items-center !cursor-pointer px-2"
          @click="triggerCollapse"
        >
          <MenuOutlined />
        </div>

        <!-- Logo -->
        <router-link :to="{ name: 'home' }" class="logo">
          <span
            :class="
              checkStore.getIsHomePage && topHomePage
                ? 'home-color'
                : 'primary-linear-text'
            "
          >
            BF-3Dmodel
          </span>
        </router-link>
      </section>

      <!-- Navigation -->
      <section>
        <ul class="navigation-bar flex items-center mx-14">
          <li
            v-for="(navigationItem, index) in navigation"
            class="navigation-item relative font-semibold border-t-4 border-solid border-t-transparent cursor-pointer"
            :class="{
              'navigation-choose primary-color-1':
                route.name === navigationItem.to,
              'home-nav': checkStore.getIsHomePage && topHomePage,
            }"
            :key="index"
          >
            <router-link :to="{ name: navigationItem.to }">
              {{ navigationItem.title }}
            </router-link>
          </li>
        </ul>
      </section>

      <!-- Actions -->
      <section class="flex items-center justify-center flex-1">
        <!-- Search -->
        <div
          class="search-bar flex items-center justify-center flex-1 h-10 mr-5"
          :class="{ 'home-search': checkStore.getIsHomePage && topHomePage }"
        >
          <a-input
            v-model:value.lazy="searchValue"
            placeholder="Search 3D Models"
            class="flex-1"
          />
          <div
            class="search-btn flex items-center justify-center cursor-pointer h-full border rounded-r-full rounded-br-full"
            :class="{
              'home-search-btn': checkStore.getIsHomePage && topHomePage,
            }"
          >
            <img
              class="w-6"
              :class="
                checkStore.getIsHomePage && topHomePage
                  ? 'primary-filter-1'
                  : ''
              "
              src="../../../assets/icons/search.svg"
              alt="Cart"
            />
          </div>
        </div>

        <div v-if="checkStore.getIsLogin" class="flex items-center">
          <!-- Upload -->
          <a-tooltip title="Upload" color="#00B3FC" placement="bottom">
            <router-link
              :to="{ name: 'upload' }"
              class="action-icon w-10 h-10 p-2 mr-3 rounded-full cursor-pointer"
            >
              <div class="cursor-pointer">
                <img
                  class="w-6 primary-filter-1"
                  src="../../../assets/icons/upload.svg"
                  alt="Cart"
                />
              </div>
            </router-link>
          </a-tooltip>

          <!-- Cart -->
          <div
            class="action-icon w-10 h-10 p-2 mr-3 rounded-full cursor-pointer"
          >
            <a-dropdown :trigger="['click']" arrow placement="bottomRight">
              <a-badge :count="1" :overflow-count="10">
                <div class="cursor-pointer">
                  <img
                    class="w-6 primary-filter-1"
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
                    <span>Hồ sơ</span>
                  </a-menu-item>

                  <a-menu-item @click="">
                    <template #icon>
                      <UserOutlined />
                    </template>
                    <span>Đăng xuất</span>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>

          <!-- Notifications -->
          <div
            class="action-icon w-10 h-10 p-2 mr-3 rounded-full cursor-pointer"
          >
            <a-dropdown :trigger="['click']" arrow placement="bottomRight">
              <a-badge :count="1" :overflow-count="10">
                <div class="cursor-pointer">
                  <img
                    class="w-6 primary-filter-1"
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
        </div>

        <!-- User -->
        <div v-if="checkStore.getIsLogin">
          <a-dropdown :trigger="['click']" arrow placement="bottomRight">
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
                  <span>Hồ sơ</span>
                </a-menu-item>

                <a-menu-item @click="handleLogout()">
                  <template #icon>
                    <UserOutlined />
                  </template>
                  <span>Log out</span>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>

        <!-- Login - SignUp -->
        <div v-else>
          <router-link :to="{ name: 'login' }">
            <button
              class="login-btn px-5"
              :class="{ 'home-btn': checkStore.getIsHomePage && topHomePage }"
            >
              <h4
                class="font-semibold"
                :class="
                  checkStore.getIsHomePage && topHomePage
                    ? 'home-color'
                    : 'primary-color-1 primary-hover-2'
                "
              >
                <span>Login</span>
              </h4>
            </button>
          </router-link>
          <router-link :to="{ name: 'register' }">
            <button
              class="sign-up-btn px-5 ml-1"
              :class="{ 'home-btn': checkStore.getIsHomePage && topHomePage }"
            >
              <h4
                class="font-semibold"
                :class="
                  checkStore.getIsHomePage && topHomePage
                    ? 'home-color'
                    : 'primary-color-1 primary-hover-2'
                "
              >
                <span>Sign up</span>
              </h4>
            </button>
          </router-link>
        </div>
      </section>
    </div>
  </header>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { listenerScroll } from '@/utils';
import { navigation } from '@/utils/constants';
import { useSliderStore, useCheckStore } from '@/stores';
import { MenuOutlined, UserOutlined } from '@ant-design/icons-vue';

const searchValue = ref<string>('');
const route = useRoute();

const checkStore = useCheckStore();
const sliderStore = useSliderStore();
const triggerCollapse = () => {
  sliderStore.triggerCollapse();
};
// const selectedKeys = ref<string[]>(['1']);
// const collapsed = ref<boolean>(false);

watch(searchValue, () => {
  console.log(searchValue.value);
});

const handleLogout = () => {
  checkStore.setIsLogin(false);
};

// Scroll
const topHomePage = ref<boolean>(true);
const handleScroll = () => {
  topHomePage.value = window.scrollY === 0;
};
listenerScroll(handleScroll);
</script>

<style scoped lang="scss">
@import '../../../assets/styles/variables';

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  transition: background-color 0.2s ease;
}

.home-color {
  color: var(--home-text-color);
}

.navigation-item {
  font-size: 17px;

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

  &.home-nav {
    color: var(--home-text-color);

    &::after {
      background-color: var(--home-text-color);
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

.navigation-choose.navigation-item::after {
  display: inline-block;
  background-color: var(--primary-color-1);
}

.search-bar {
  .ant-input {
    height: 100%;
    padding: 0px 15px;
    font-size: 16px;
    border-top-left-radius: 999px;
    border-bottom-left-radius: 999px;
  }

  .search-btn {
    padding: 0 13px;
    border-color: #d9d9d9;

    &:hover {
      border-color: #4096ff;
      box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
      border-inline-end-width: 1px;
      outline: 0;
    }

    &.home-search-btn {
      img {
        filter: brightness(100%) invert(100%) sepia(0%) saturate(0%)
          hue-rotate(0deg) brightness(100%) contrast(100%);
      }
    }
  }

  &.home-search {
    .ant-input,
    .search-btn {
      border-color: var(--home-text-color);
    }
  }
}

.action-icon {
  background-color: #f5f5f5;

  &:hover {
    background-color: #e0e0e0;
  }
}

.login-btn {
  padding: 4px 18px;
  border: 2px solid rgba($color: #7f409f, $alpha: 0.5);
  border-radius: 6px;
}

.sign-up-btn {
  padding: 6px 20px;
  background-color: rgba($color: #7f409f, $alpha: 0.15);
  border-radius: 6px;
}

.home-btn {
  &.login-btn {
    border: 2px solid var(--home-text-color);

    &:hover {
      text-decoration: underline var(--home-text-color) solid 2px;
      background-color: rgba($color: white, $alpha: 0.2);
    }
  }

  &.sign-up-btn {
    background-color: rgba($color: white, $alpha: 0.2);

    &:hover {
      text-decoration: underline var(--home-text-color) solid 2px;
      background-color: rgba($color: white, $alpha: 0.4);
    }
  }
}
</style>
