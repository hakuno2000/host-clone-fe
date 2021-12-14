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
    <el-card class="box-card" shadow="hover" align="left">
      <p style="text-align:left; font-size: larger; font-weight: bold">Tiện nghi</p>
      <p style="text-align:left">Rất nhiều khách hàng đã tìm kiếm chỗ nghỉ dựa trên các tiêu chí về tiện nghi.</p>
      <el-divider></el-divider>
      <el-row>
        <el-col :span="12">
          <el-checkbox v-model="form.utilities[1]" label="Wifi"></el-checkbox>
        </el-col>
        <el-col :span="12">
          <el-checkbox v-model="form.utilities[5]" label="Lò vi sóng"></el-checkbox>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-checkbox v-model="form.utilities[2]" label="TV"></el-checkbox>
        </el-col>
        <el-col :span="12">
          <el-checkbox v-model="form.utilities[6]" label="Tủ lạnh"></el-checkbox>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-checkbox v-model="form.utilities[3]" label="Điều hoà"></el-checkbox>
        </el-col>
        <el-col :span="12">
          <el-checkbox v-model="form.utilities[7]" label="Ban công"></el-checkbox>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-checkbox v-model="form.utilities[4]" label="Máy giặt"></el-checkbox>
        </el-col>
        <el-col :span="12">
          <el-checkbox v-model="form.utilities[8]" label="Ghế sofa"></el-checkbox>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <div align="center">
        <el-button @click="onBack">Quay lại</el-button>
        <el-button type="primary" @click="onSubmit(form)">Tiếp</el-button>
      </div>
    </el-card>
  </el-col>
</template>

<script>
export default {
  data() {
    return {
      form: {
        utilities: Array(9).fill(false),
        place_facilities_attributes: [],
      }
    }
  },

  methods: {
    onSubmit(form) {
      this.form.utilities.forEach((element, index) => {
        if (element === true) this.form.place_facilities_attributes.push({
          facility_id: index
        })
      })
      this.$emit('updateUtility', form)
      this.$router.push('/form/5')
    },
    onBack() {
      this.$router.back()
    }
  }
}
</script>
