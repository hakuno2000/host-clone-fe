<template>
  <el-col style="width: 50%">
    <div>
      <el-steps :active="0" finish-status="success" align-center>
        <el-step title="Thông tin chỗ nghỉ"></el-step>
        <el-step title="Hình ảnh chỗ nghỉ"></el-step>
        <el-step title="Giá và quy định nhận chỗ"></el-step>
      </el-steps>
    </div>
    <br>
    <el-card class="box-card" shadow="hover">
      <p style="text-align:left; font-size: larger; font-weight: bold">Chỗ nghỉ của bạn</p>
      <el-divider></el-divider>
      <el-form ref="form" :model="form" label-position="top">
        <p style="text-align:left; font-size: large; font-weight: bold">Không gian</p>
        <el-form-item label="CHỖ NGHỈ CỦA BẠN CÓ DIỆN TÍCH LÀ? M2">
          <el-input-number v-model="form.square" placeholder="15" style="width: 100%"></el-input-number>
        </el-form-item>
        <el-row style="display: flex; justify-content: center" :gutter="20">
          <el-col :span="12">
            <el-form-item label="PHÒNG NGỦ">
              <el-input-number v-model="form.num_of_bedroom" placeholder="1" style="width: 100%"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="GIƯỜNG NGỦ">
              <el-input-number v-model="form.num_of_bed" placeholder="1" style="width: 100%"></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="display: flex; justify-content: center" :gutter="20">
          <el-col :span="12">
            <el-form-item label="PHÒNG TẮM">
              <el-input-number v-model="form.num_of_bathroom" placeholder="1" style="width: 100%"></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="PHÒNG BẾP">
              <el-input-number v-model="form.num_of_kitchen" placeholder="1" style="width: 100%"></el-input-number>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-form-item align="center">
          <el-button @click="onBack">Quay lại</el-button>
          <el-button type="primary" @click="onSubmit(form)">Tiếp</el-button>
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
        square: 15,
        num_of_bedroom: 1,
        num_of_bed: 1,
        num_of_bathroom: 1,
        num_of_kitchen: 1,
      },
    }
  },
  methods: {
    onSubmit(form) {
      this.$emit('updateRoom', form)
      this.$router.push('/form/4')
    },
    onBack() {
      this.$router.back()
    }
  },
}
</script>
