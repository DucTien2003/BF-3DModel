<template>
  <div>
    <a-menu
      :openKeys="state.openKeys"
      :selectedKeys="state.selectedKeys"
      mode="inline"
      theme="dark"
    >
      <a-menu-item key="1">
        <template #icon>
          <PieChartOutlined />
        </template>
        <router-link :to="{ name: 'home' }">Tổng quan</router-link>
      </a-menu-item>

      <a-sub-menu key="2">
        <template #title>
          <span>
            <PieChartOutlined />
            <span>Product</span>
          </span>
        </template>
        <a-menu-item key="2.1">
          <router-link :to="{ name: 'home' }">Brand</router-link>
        </a-menu-item>
        <a-menu-item key="2.2">
          <router-link :to="{ name: 'home' }">Category</router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="3">
        <template #title>
          <span>
            <PieChartOutlined />
            <span>Team</span>
          </span>
        </template>
        <a-menu-item key="3.1">Team 1</a-menu-item>
        <a-menu-item key="3.2">Team 2</a-menu-item>
      </a-sub-menu>

      <a-menu-item key="4">
        <template #icon>
          <SettingOutlined />
        </template>
        <router-link :to="{ name: 'home' }"> Setting </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import { PieChartOutlined, SettingOutlined } from '@ant-design/icons-vue';

const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
});

watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  },
);
</script>
