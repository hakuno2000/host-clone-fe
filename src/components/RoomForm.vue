<template>
  <el-col :span="12">
    <el-card class="box-card">
      <p style="text-align:left; font-size: larger; font-weight: bold">Chỗ nghỉ của bạn</p>
    </el-card>
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-position="top">
        <p style="text-align:left; font-size: large; font-weight: bold">Không gian</p>
        <el-form-item label="CHỖ NGHỈ CỦA BẠN CÓ DIỆN TÍCH LÀ? M2">
          <el-input-number v-model="form.area" placeholder="0" style="width: 100%"></el-input-number>
        </el-form-item>
        <el-row style="display: flex; justify-content: center" :gutter="20">
          <el-col :span="12">
            <el-form-item label="PHÒNG NGỦ">
              <el-input-number v-model="form.bedroom" placeholder="0" style="width: 100%"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="GIƯỜNG NGỦ">
              <el-input-number v-model="form.bed" placeholder="0" style="width: 100%"></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="display: flex; justify-content: center" :gutter="20">
          <el-col :span="12">
            <el-form-item label="PHÒNG TẮM">
              <el-input-number v-model="form.bathroom" placeholder="0" style="width: 100%"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="PHÒNG BẾP">
              <el-input-number v-model="form.kitchen" placeholder="0" style="width: 100%"></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-form-item align="center">
          <el-button>Quay lại</el-button>
          <el-button type="primary" @click="onSubmit">Tiếp</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-col>
</template>

<script>
export default {
  data() {
    return {
      form: {
        area: 0,
        bedroom: 0,
        bed: 0,
        bathroom: 0,
        kitchen: 0,
      },
    }
  },
  methods: {
    onSubmit() {
      this.$router.push('/form/4')
    },
  },
}
</script>
