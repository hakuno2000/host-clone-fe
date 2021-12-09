<template>
  <TopBar></TopBar>
  <el-main style="display: flex; justify-content: center">
    <router-view></router-view>
  </el-main>
  <!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TopBar from "@/components/TopBar";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    TopBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
