<template>
  <v-footer>
    <div>
      <img src="../assets/footerLogo.png" alt="" />
      <p class="ms-5">
        @ 2023 InSynerger Technology Co., Ltd. All Rights Reserved
      </p>
    </div>
  </v-footer>
</template>
<script setup></script>
<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
p {
  font-size: 12px;
  font-weight: 700;
}
footer {
  position: absolute;
  bottom: 0;
  z-index: 0;
  width: calc(100% - 55px)
  /* width: calc(100% - 255px); */
}
</style>
