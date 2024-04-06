<template>
  <div class="author-wrapper">
    <div class="author-content flex items-center justify-center min-h-screen">
      <ModelAuthor></ModelAuthor>

      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import ModelAuthor from '@/components/modelAuthor/ModelAuthor.vue';
</script>

<style scoped lang="scss">
.author-wrapper {
  padding: 0 20px;
  background: url('../assets/images/author_images/bg-1.jpg') no-repeat;
  background-size: cover;
}

.author-content {
  padding: 0 20px;
}
</style>
