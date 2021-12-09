<template>
  <el-col :span="12">
    <el-card class="box-card">
      <p style="text-align:left; font-size: larger; font-weight: bold">Phân loại chỗ nghỉ</p>
      <p style="text-align:left">Trước hết, hãy cho chúng tôi biết, chỗ nghỉ của bạn thuộc loại hình nào.</p>
    </el-card>
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-position="top">
        <el-form-item label="CHỖ NGHỈ CỦA BẠN LÀ:" align="left">
          <el-select v-model="form.placetype" placeholder="Chọn loại chỗ nghỉ" style="width: 100%">
            <el-option label="Homestay" value="Homestay"></el-option>
            <el-option label="Nhà riêng" value="Nhà riêng"></el-option>
            <el-option label="Biệt thự" value="Biệt thự"></el-option>
            <el-option label="Chung cư" value="Chung cư"></el-option>
            <el-option label="Studio" value="Studio"></el-option>
            <el-option label="Căn hộ dịch vụ" value="Căn hộ dịch vụ"></el-option>
            <el-option label="Nhà tập thể/Cư xá" value="Nhà tập thể/Cư xá"></el-option>
            <el-option label="Farmstay" value="Farmstay"></el-option>
            <el-option label="Nhà sàn" value="Nhà sàn"></el-option>
            <el-option label="Khách sạn căn hộ" value="Khách sạn căn hộ"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="TÊN CHỖ NGHỈ">
          <el-input v-model="form.name" placeholder="Tên chỗ nghỉ"></el-input>
        </el-form-item>
        <el-form-item label="LOẠI ĐẶT CHỖ ?" align="left">
          <el-select v-model="form.ordertype" placeholder="Lựa chọn" style="width: 100%">
            <el-option label="Đặt phòng nhanh" value="type1"></el-option>
            <el-option label="Yêu cầu xác nhận" value="type2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="HÌNH THỨC CHO THUÊ" align="left">
          <el-select v-model="form.renttype" placeholder="Lựa chọn" style="width: 100%">
            <el-option label="Nguyên căn" value="type1"></el-option>
            <el-option label="Phòng riêng" value="type2"></el-option>
            <el-option label="Phòng tập thể" value="type3"></el-option>
          </el-select>
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
      this.$router.push('/form/2')
    },
  },
}
</script>
