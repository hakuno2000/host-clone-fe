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
      <p style="text-align:left; font-size: larger; font-weight: bold">Vị trí chỗ nghỉ</p>
      <el-divider></el-divider>
      <el-form ref="form" :model="form" label-position="top">
        <el-form-item label="TỈNH/THÀNH PHỐ" align="left">
          <el-select v-model="form.city" placeholder="Vui lòng lựa chọn" style="width: 100%">
            <el-option label="Thành phố Hà Nội" value="hanoi"></el-option>
            <el-option label="Thành phố Hồ Chí Minh" value="hcm"></el-option>
            <el-option label="Vũng Tàu" value="vungtau"></el-option>
            <el-option label="Đà Lạt" value="dalat"></el-option>
            <el-option label="Nha Trang" value="nhatrang"></el-option>
            <el-option label="Quảng Ninh" value="quangninh"></el-option>
            <el-option label="Hội An" value="hoian"></el-option>
            <el-option label="Đà Nẵng" value="danang"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="ĐỊA CHỈ CHI TIẾT" align="left">
          <el-input v-model="form.address" placeholder="Vui lòng điền địa chỉ chi tiết"></el-input>
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
        city: '',
        address: '',
      },
    }
  },
  methods: {
    onSubmit(form) {
      this.$emit('updateLocation', form)
      this.$router.push('/form/3')
    },
    onBack() {
      this.$router.back()
    }
  },
}
</script>
