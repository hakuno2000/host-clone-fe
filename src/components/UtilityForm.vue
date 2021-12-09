<template>
  <el-col :span="12">
    <el-card class="box-card">
      <p style="text-align:left; font-size: larger; font-weight: bold">Tiện nghi</p>
      <p style="text-align:left">Rất nhiều khách hàng đã tìm kiếm chỗ nghỉ dựa trên các tiêu chí về tiện nghi.</p>
    </el-card>
    <el-card class="box-card" align="left">
      <el-row>
        <el-col :span="12">
          <el-checkbox v-model="checked1" label="Wifi"></el-checkbox>
        </el-col>
        <el-col :span="12">
          <el-checkbox v-model="checked2" label="Lò vi sóng"></el-checkbox>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-checkbox v-model="checked3" label="TV"></el-checkbox>
        </el-col>
        <el-col :span="12">
          <el-checkbox v-model="checked4" label="Tủ lạnh"></el-checkbox>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-checkbox v-model="checked5" label="Điều hoà"></el-checkbox>
        </el-col>
        <el-col :span="12">
          <el-checkbox v-model="checked6" label="Ban công"></el-checkbox>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-checkbox v-model="checked7" label="Máy giặt"></el-checkbox>
        </el-col>
        <el-col :span="12">
          <el-checkbox v-model="checked8" label="Ghế sofa"></el-checkbox>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <div align="center">
        <el-button>Quay lại</el-button>
        <el-button type="primary" @click="onSubmit">Tiếp</el-button>
      </div>
    </el-card>
  </el-col>
</template>

<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
  setup() {
    const checked1 = ref(false)
    const checked2 = ref(false)
    const checked3 = ref(false)
    const checked4 = ref(false)
    const checked5 = ref(false)
    const checked6 = ref(false)
    const checked7 = ref(false)
    const checked8 = ref(false)
    return {
      checked1,
      checked2,
      checked3,
      checked4,
      checked5,
      checked6,
      checked7,
      checked8,
    }
  },

  methods: {
    onSubmit() {
      this.$router.push('/form/5')
    },
  }
})
</script>
