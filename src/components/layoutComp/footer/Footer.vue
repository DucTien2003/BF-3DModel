<template>
  <div id="footer" class="container-content footer bg-emerald-100">
    <div class="pt-6 pb-10 px-5 flex">
      <!-- Logo -->
      <section class="w-1/3 pr-10">
        <router-link :to="{ name: 'home' }" class="logo">
          <span class="primary-linear-text"> BF-3Dmodel </span>
        </router-link>
        <h4 class="mt-5">
          Manage your 3D assets. Distribute 3D & AR experiences. Collaborate
          with others. Showcase your work. Buy & sell 3D models.
        </h4>
      </section>

      <!-- Navigation -->
      <section class="flex justify-center w-1/3 px-5">
        <div class="inline-flex flex-col">
          <h2 class="mb-4 font-semibold primary-color-1">Navigation</h2>
          <ul class="inline-flex flex-col">
            <li v-for="(navigationItem, index) in navigation" :key="index">
              <router-link
                :to="{ name: navigationItem.to }"
                class="navigationItem cursor-pointer primary-hover-2 mb-1"
              >
                <h3>{{ navigationItem.title }}</h3>
              </router-link>
            </li>
          </ul>
        </div>
      </section>

      <!-- Contact -->
      <section class="w-1/3 pl-10">
        <h2 class="mb-4 font-semibold primary-color-1">Contact</h2>
        <div class="flex flex-col">
          <div class="flex items-center mb-2">
            <img
              src="../../../assets/icons/location.svg"
              alt="icon"
              class="w-5 mr-1"
            />
            <h4>Thuy Loi University, Tay Son, Dong Da, Ha Noi</h4>
          </div>
          <div class="flex items-center mb-2">
            <img
              src="../../../assets/icons/phone.svg"
              alt="icon"
              class="w-5 mr-1"
            />
            <h4>0362426494</h4>
          </div>
          <div class="flex items-center mb-2">
            <img
              src="../../../assets/icons/footer-mail.svg"
              alt="icon"
              class="w-5 mr-1"
            />
            <h4>ductien4102003@gmail.com</h4>
          </div>
          <div class="flex items-center mb-2">
            <img
              src="../../../assets/icons/facebook.svg"
              alt="icon"
              class="w-5 mr-1"
            />
            <h4>
              <a href="https://web.facebook.com/profile.php?id=100055239219530">
                Đức Tiến
              </a>
            </h4>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { navigation } from '@/utils/constants';
</script>

<style scoped lang="scss">
.navigationItem:hover {
  text-decoration: underline;
}
</style>
