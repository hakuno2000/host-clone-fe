<template>
  <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      @select="onClickTopBarItem"
  >
    <el-menu-item index="/">Bảng tin</el-menu-item>
    <el-menu-item index="/place">Chỗ nghỉ</el-menu-item>
    <el-menu-item index="" disabled>Khách đến</el-menu-item>
    <el-menu-item index="" disabled>Khách đi</el-menu-item>
    <el-menu-item index="" disabled>Khách lưu trú</el-menu-item>
    <el-menu-item index="/form/1" style="position:absolute;right:0px">Tạo chỗ nghỉ mới</el-menu-item>
  </el-menu>
</template>

<script>

export default {
  methods: {
    onClickTopBarItem(key) {
      this.$router.push(key)
    },
  }
}
</script>
