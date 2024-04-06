<template>
  <!-- Main -->
  <div class="w-1/2">
    <div
      class="w-2/3 p-5 bg-white bg-opacity-50 flex flex-col justify-center m-auto rounded-md"
    >
      <!-- header -->
      <div class="flex flex-col items-center justify-center">
        <h2 class="primary-title w-full text-center font-bold">
          <span>Sign up</span>
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
          <!-- <a-form-item
            name="username"
            :rules="[required('Username', 'blur', 'string', false, true)]"
          >
            <label for="basic_username" class="font-medium inline-block my-1">
              Username <span class="text-red-500">*</span>
            </label>
            <a-input
              v-model:value="formState.username"
              placeholder="Enter your username..."
            />
          </a-form-item> -->

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

          <a-form-item
            name="confirm-password"
            :rules="[
              confirmPassword(
                formState.password,
                formState.confirmPassword,
                'blur',
              ),
            ]"
          >
            <label
              for="basic_confirm-password"
              class="font-medium inline-block my-1"
            >
              Confirm password <span class="text-red-500">*</span>
            </label>
            <a-input-password
              v-model:value="formState.confirmPassword"
              placeholder="Enter your confirm password..."
            />
          </a-form-item>

          <a-form-item class="my-3">
            <a-button
              type="primary"
              html-type="submit"
              class="w-full font-semibold mt-3"
            >
              Sign up
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
      <div class="my-5 text-center text-gray-400 font-medium">
        Already have an account?
        <router-link :to="{ name: 'login' }">
          <span class="ml-1 text-sky-500 cursor-pointer hover:underline">
            Login
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { GoogleOutlined, FacebookFilled } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';

import useValidator from '@/composables/useValidator';

const { required, passwordRule, confirmPassword, requiredType } =
  useValidator();

const formState = reactive({
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  remember: true,
});

const router = useRouter();

const onFinish = (values: any) => {
  message.success('Login successfully.', 3);
  console.log('Success:', values);
  router.push({ name: 'login' });
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
