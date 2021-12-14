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
      <p style="text-align:left; font-size: larger; font-weight: bold">Phân loại chỗ nghỉ</p>
      <p style="text-align:left">Trước hết, hãy cho chúng tôi biết, chỗ nghỉ của bạn thuộc loại hình nào.</p>
      <el-divider></el-divider>
      <el-form ref="form" :model="form" label-position="top">
        <el-form-item label="CHỖ NGHỈ CỦA BẠN LÀ:" align="left">
          <el-select v-model="form.place_type" placeholder="Chọn loại chỗ nghỉ" style="width: 100%">
            <el-option label="Homestay" value="homestay"></el-option>
            <el-option label="Villa" value="villa"></el-option>
            <el-option label="Căn hộ" value="apartment"></el-option>
            <el-option label="Penhouse" value="penhouse"></el-option>
            <el-option label="Hotel" value="hostel"></el-option>
            <el-option label="Motel" value="motel"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="TÊN CHỖ NGHỈ">
          <el-input v-model="form.name" placeholder="Tên chỗ nghỉ"></el-input>
        </el-form-item>
<!--        <el-form-item label="LOẠI ĐẶT CHỖ ?" align="left">-->
<!--          <el-select v-model="form.ordertype" placeholder="Lựa chọn" style="width: 100%">-->
<!--            <el-option label="Đặt phòng nhanh" value="type1"></el-option>-->
<!--            <el-option label="Yêu cầu xác nhận" value="type2"></el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="HÌNH THỨC CHO THUÊ" align="left">-->
<!--          <el-select v-model="form.renttype" placeholder="Lựa chọn" style="width: 100%">-->
<!--            <el-option label="Nguyên căn" value="type1"></el-option>-->
<!--            <el-option label="Phòng riêng" value="type2"></el-option>-->
<!--            <el-option label="Phòng tập thể" value="type3"></el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
        <el-divider></el-divider>
        <el-form-item align="center">
          <el-button @click="onBack">Huỷ</el-button>
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
        name: '',
        place_type: '',
      },
    }
  },
  methods: {
    onSubmit(form) {
      this.$emit('updateBasic', form)
      this.$router.push('/form/2')
    },
    onBack() {
      this.$router.push('/')
    }
  },
}
</script>
