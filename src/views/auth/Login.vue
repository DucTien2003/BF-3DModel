<template>
  <!-- Main -->
  <div class="w-1/2">
    <div
      class="w-2/3 p-5 bg-white bg-opacity-50 flex flex-col justify-center m-auto rounded-md"
    >
      <!-- header -->
      <div class="flex flex-col items-center justify-center">
        <h2 class="primary-title w-full text-center font-bold">
          <span>Login</span>
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

          <a-form-item
            name="password"
            :rules="[passwordRule('Password', 'blur')]"
          >
            <label for="basic_password" class="font-medium inline-block my-1">
              Password <span class="text-red-500">*</span>
            </label>
            <a-input-password
              v-model:value="formState.password"
              placeholder="Enter your password..."
            />
          </a-form-item>

          <div class="text-end">
            <router-link
              :to="{ name: 'forgot-password' }"
              class="cursor-pointer font-semibold text-sky-500 hover:underline hover:text-sky-500"
            >
              Forgot password?
            </router-link>
          </div>

          <a-form-item class="my-3">
            <a-button
              type="primary"
              html-type="submit"
              class="w-full font-semibold"
            >
              Login
            </a-button>
          </a-form-item>
        </a-form>

        <div class="my-3 text-center text-base font-semibold text-blue-400">
          OR
        </div>

        <div class="flex flex-col items-center justify-between">
          <a-button
            type="ghost"
            class="login-google-btn flex items-center justify-center w-full font-bold"
          >
            <div class="mr-2">
              <GoogleOutlined
                class="flex items-center justify-center text-lg"
              />
            </div>
            <span>Login with Google</span>
          </a-button>
          <!-- <a-button
            type="ghost"
            class="login-facebook-btn flex items-center justify-center w-full mt-4 font-bold"
          >
            <div class="mr-2">
              <FacebookFilled
                class="flex items-center justify-center text-lg"
              />
            </div>
            <span>Login with Facebook</span>
          </a-button> -->
        </div>
      </div>

      <!-- direction -->
      <div class="my-5 text-center text-gray-500 font-medium">
        Create new account?
        <router-link :to="{ name: 'register' }">
          <span class="ml-1 text-sky-500 cursor-pointer hover:underline">
            Register
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';

import { useCheckStore } from '@/stores';
import { GoogleOutlined, FacebookFilled } from '@ant-design/icons-vue';

import useValidator from '@/composables/useValidator';

const checkStore = useCheckStore();
const { required, passwordRule, requiredType } = useValidator();

const formState = reactive({
  email: '',
  password: '',
  remember: true,
});

const router = useRouter();

const onFinish = (values: any) => {
  message.success('Login successfully.', 3);
  console.log('Success:', values);
  checkStore.setIsLogin(true);
  router.push({ name: 'home' });
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>

<style scoped lang="scss">
.login-form {
  background-color: rgba(#fff, 0.5);
}

.login-google-btn {
  &.ant-btn {
    color: rgba(#ff2e2e, 0.7);
    border-color: currentColor;

    &:hover {
      color: #ff2e2e;
      border-color: currentColor;
      background-color: rgba(#ff2e2e, 0.1);
    }
  }
}

.login-facebook-btn {
  &.ant-btn {
    color: rgba(#1b1bf0, 0.7);
    border-color: currentColor;

    &:hover {
      color: #1b1bf0;
      border-color: currentColor;
      background-color: rgba(#1b1bf0, 0.1);
    }
  }
}
</style>
