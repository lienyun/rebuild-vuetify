<template>
  <div class="content-wrapper">
    <v-form @submit.prevent>
    <v-card
      class="pa-12 pb-8 mx-auto"
      elevation="8"
      max-width="448"
      width="528"
      rounded="lg"
    >
      <v-text-field
        density="compact"
        placeholder="請輸入帳號"
        variant="outlined"
        v-model="email"
      ></v-text-field>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="請輸入密碼"
        variant="outlined"
        v-model="password"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <div class="d-flex align-center">
        <v-checkbox label="在往後自動登入" type="checkbox" hide-details></v-checkbox>

        <a class="text-decoration-none text-white" href="#" target="_blank">
          忘記密碼</a
        >
      </div>

      <router-link to="/" class="text-decoration-none"
        ><v-btn
          block
          class="mb-8"
          color="blue"
          size="large"
          type="submit"
          @click="login"
        >
          登入
        </v-btn></router-link
      >

      <v-card-text class="text-center">
        <a class="text-blue text-decoration-none" href="#" target="_blank">
          現在註冊<v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </v-form>
  </div>

</template>
<script setup>
import { ref } from "vue";
import { useLoginStore } from "../stores/login";
import { useRouter, useRoute } from 'vue-router'

const store = useLoginStore();

const email = ref("inparkdev");
const password = ref("fbc5ee66781c07421176d9673f1d832d");

const router = useRouter()

const login = async () => {
  await store.getAuth(email.value, password.value);
  store.isLogin ? router.push('/') : router.push('/login')
};

const visible = ref(false);
</script>
<style scoped>
.content-wrapper {
  height: calc(100vh - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(30,30,30);
background: linear-gradient(146deg, rgba(30,30,30,1) 0%, rgba(89,89,89,1) 51%, rgba(30,30,30,1) 79%);
}

</style>
