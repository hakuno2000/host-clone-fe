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
      <p style="text-align:left; font-size: larger; font-weight: bold">Thông tin chỗ nghỉ</p>
      <p style="text-align:left">Chia sẻ với khách hàng một vài thông tin ngắn gọn và nổi bật về chỗ nghỉ này của bạn.</p>
      <el-divider></el-divider>
      <el-form ref="form" :model="form" label-position="top">
        <el-form-item label="TỔNG QUAN">
          <el-input v-model="form.details" type="textarea" :autosize="{ minRows: 4, maxRows: 8 }"></el-input>
        </el-form-item>
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
        details: ""
      },
    }
  },
  methods: {
    onSubmit(form) {
      this.$emit('updateInformation', form)
      this.$router.push('/pic')
    },
    onBack() {
      this.$router.back()
    }
  },
}
</script>
