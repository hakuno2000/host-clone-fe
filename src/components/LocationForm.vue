<template>
  <el-col :span="12">
    <el-card class="box-card">
      <p style="text-align:left; font-size: larger; font-weight: bold">Vị trí chỗ nghỉ</p>
    </el-card>
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-position="top">
        <el-form-item label="QUỐC GIA" align="left">
          <el-select v-model="form.nation" placeholder="Chọn quốc gia" style="width: 100%">
            <el-option label="Vietnam" value="Vietnam"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="MÚI GIỜ" align="left">
          <el-select v-model="form.timezone" placeholder="Chọn múi giờ" style="width: 100%">
            <el-option label="Asia/Ho_Chi_Minh" value="7"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="TỈNH/THÀNH PHỐ" align="left">
          <el-select v-model="form.province" placeholder="Vui lòng lựa chọn" style="width: 100%">
            <el-option label="Thành phố Hà Nội" value="hanoi"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="QUẬN/HUYỆN" align="left">
          <el-select v-model="form.district" placeholder="Vui lòng lựa chọn" style="width: 100%">
            <el-option label="Quận Thanh Xuân" value="thanhxuan"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="PHƯỜNG/XÃ" align="left">
          <el-select v-model="form.town" placeholder="Vui lòng lựa chọn" style="width: 100%">
            <el-option label="Phường Nhân Chính" value="nhanchinh"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="ĐỊA CHỈ CHI TIẾT" align="left">
          <el-input v-model="form.address" placeholder=""></el-input>
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
        nation: '',
        timezone: '',
        province: '',
        district: '',
        town: '',
        address: '',
      },
    }
  },
  methods: {
    onSubmit() {
      this.$router.push('/form/3')
    },
  },
}
</script>
