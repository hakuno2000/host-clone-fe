<template>
  <el-col :span="12">
    <el-card class="box-card">
      <p style="text-align:left; font-size: larger; font-weight: bold">Thông tin chỗ nghỉ</p>
      <p style="text-align:left">Chia sẻ với khách hàng một vài thông tin ngắn gọn và nổi bật về chỗ nghỉ này của bạn.</p>
    </el-card>
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-position="top">
        <el-form-item label="TỔNG QUAN">
          <el-input v-model="form.desc" type="textarea" :autosize="{ minRows: 4, maxRows: 8 }"></el-input>
        </el-form-item>
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
        name: '',
        placetype: '',
        ordertype: '',
        renttype: '',
      },
    }
  },
  methods: {
    onSubmit() {
      this.$router.push('/form/7')
    },
  },
}
</script>
