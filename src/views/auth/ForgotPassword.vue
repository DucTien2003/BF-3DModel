<template>
  <!-- Main -->
  <div class="w-1/2">
    <div
      class="w-2/3 p-5 bg-white bg-opacity-50 flex flex-col justify-center m-auto rounded-md"
    >
      <div class="flex-1">
        <!-- header -->
        <div class="flex flex-col items-center justify-center">
          <h2 class="primary-title w-full text-center font-bold">
            <span>Forgot password</span>
          </h2>

          <div class="my-2">
            <!-- Logo -->
            <router-link :to="{ name: 'home' }" class="logo">
              <span class="primary-linear-text"> BF-3Dmodel </span>
            </router-link>
          </div>
        </div>

        <!-- form -->
        <div>
          <a-form
            :model="formState"
            name="basic"
            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
          >
            <a-form-item
              name="email"
              :rules="[
                required('Email', 'blur', 'string', false, true),
                requiredType('Email', 'email', 'blur'),
              ]"
            >
              <label for="basic_email" class="font-medium inline-block my-1">
                Email <span class="text-red-500">*</span>
              </label>
              <a-input
                v-model:value="formState.email"
                placeholder="Enter your email..."
              />
            </a-form-item>

            <a-form-item class="mt-8 mb-6">
              <a-button
                type="primary"
                html-type="submit"
                class="w-full font-semibold"
              >
                Confirm
              </a-button>
            </a-form-item>
          </a-form>
        </div>

        <!-- direction -->
        <div class="flex flex-col items-center mt-3">
          <router-link :to="{ name: 'login' }">
            <div
              class="flex items-center justify-center hover:underline text-xs"
            >
              <ArrowLeftOutlined class="mr-1 flex justify-center" />
              Back to login
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { ArrowLeftOutlined } from '@ant-design/icons-vue';

import useValidator from '@/composables/useValidator';

const { required, requiredType } = useValidator();

const formState = reactive({
  email: '',
});

const router = useRouter();

const onFinish = (values: string) => {
  router.push({ name: 'reset-password' });
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: string) => {
  console.log('Failed:', errorInfo);
};
</script>

<style scoped lang="scss">
.forgot-password-form {
  background-color: rgba(#fff, 0.5);
}
</style>
