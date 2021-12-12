<template>
  <TopBar></TopBar>
  <el-main style="display: flex; justify-content: center; flex-direction: column; align-items: center">
    <router-view></router-view>
  </el-main>
  <p></p>
  <el-footer style="font-size: small">
    <p>Bài tập cho môn 2122I_INT3139, viết bởi Vinh.</p>
    <p>© 2021. Sản phẩm tuân theo MIT License.</p>
  </el-footer>
</template>

<script>
import TopBar from "@/components/TopBar";

export default {
  name: 'App',
  components: {
    TopBar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+Display&display=swap');
#app {
  font-family: Noto Sans Display, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
