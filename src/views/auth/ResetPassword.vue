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
            <span>Reset password</span>
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
              name="password"
              :rules="[passwordRule('Mật khẩu', 'blur')]"
            >
              <label for="basic_password" class="font-medium inline-block my-1">
                New password <span class="text-red-500">*</span>
              </label>
              <a-input-password
                v-model:value="formState.password"
                placeholder="Enter your new password..."
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

            <a-form-item>
              <a-button type="primary" html-type="submit" class="w-full mt-5">
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
              <ArrowLeftOutlined class="mr-1 flex items-center" />
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
import { message } from 'ant-design-vue';

import useValidator from '@/composables/useValidator';

const { passwordRule, confirmPassword } = useValidator();

const formState = reactive({
  password: '',
  confirmPassword: '',
});

const router = useRouter();

const onFinish = (values: string) => {
  message.success('Reset password successfully.', 3);
  console.log('Success:', values);
  router.push({ name: 'login' });
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
