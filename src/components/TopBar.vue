<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
  >
    <el-menu-item index="1">Bảng tin</el-menu-item>
    <el-menu-item index="2">Chỗ nghỉ</el-menu-item>
    <el-menu-item index="3" disabled>Khách đến</el-menu-item>
    <el-menu-item index="4" disabled>Khách đi</el-menu-item>
    <el-menu-item index="5" disabled>Khách lưu trú</el-menu-item>
  </el-menu>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const activeIndex = ref('1')
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      activeIndex,
      handleSelect,
    }
  },
})
</script>
