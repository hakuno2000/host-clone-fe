<template>
  <el-col style="width: 50%">
    <div>
      <el-steps :active="2" finish-status="success" align-center>
        <el-step title="Thông tin chỗ nghỉ"></el-step>
        <el-step title="Hình ảnh chỗ nghỉ"></el-step>
        <el-step title="Giá và quy định nhận chỗ"></el-step>
      </el-steps>
    </div>
    <br>
    <el-card class="box-card" shadow="hover">
      <p style="text-align:left; font-size: larger; font-weight: bold">Thiết lập giá và chính sách</p>
      <p style="text-align:left">Doanh thu của chủ nhà phụ thuộc trực tiếp vào việc thiết lập giá cùng các quy định về số khách, số đêm và chính sách hủy phòng.</p>
    </el-card>
    <br>
    <el-card class="box-card" shadow="hover" align="left">
      <p style="text-align:left; font-size: larger; font-weight: bold">Chính sách huỷ phòng</p>
      <el-divider></el-divider>
      <el-radio v-model="form.policy_type" label="0"><p style="font-size: large">Trung bình</p></el-radio>
      <p style="font-size: smaller; font-weight: lighter">Miễn phí huỷ phòng cho khách trong vòng 48h sau khi đặt phòng thành công và trước 5 ngày so với thời gian check-in.</p>
      <br>
      <el-radio v-model="form.policy_type" label="1"><p style="font-size: large">Linh hoạt</p></el-radio>
      <p style="font-size: smaller; font-weight: lighter">Miễn phí huỷ phòng cho khách trong vòng 48h sau khi đặt phòng thành công và trước 1 ngày so với thời gian check-in.</p>
      <br>
      <el-radio v-model="form.policy_type" label="2"><p style="font-size: large">Nghiêm ngặt</p></el-radio>
      <p style="font-size: smaller; font-weight: lighter">Khách hàng được hoàn lại 50% số tiền đã trả khi huỷ phòng trong vòng 48h sau khi đặt phòng thành công và trước 14 ngày so với thời gian check-in. Trong trường hợp đó, chủ nhà nhận về 50% giá trị đặt phòng (trừ phí cho 3S)</p>
    </el-card>
    <br>
    <el-card class="box-card" shadow="hover">
      <p style="text-align:left; font-size: larger; font-weight: bold">Số người</p>
      <el-divider></el-divider>
      <p align="left">Số lượng người tối đa:</p>
      <el-input-number v-model="form.max_num_of_people" placeholder="1" style="width: 100%"></el-input-number>
    </el-card>
    <br>
    <el-card class="box-card" shadow="hover">
      <p style="text-align:left; font-size: larger; font-weight: bold">Chính sách giá</p>
      <el-divider></el-divider>
      <p align="left">Giá ngày thường:</p>
      <el-input-number v-model="form.normal_day_price" placeholder="200000" style="width: 100%"></el-input-number>
      <p align="left">Giá ngày cuối tuần:</p>
      <el-input-number v-model="form.weekend_price" placeholder="200000" style="width: 100%"></el-input-number>
      <p align="left">Phí dọn dẹp: </p>
      <el-input-number v-model="form.cleaning_price" placeholder="50000" style="width: 100%"></el-input-number>
    </el-card>
    <br>
    <el-card class="box-card" shadow="hover">
      <div align="center">
        <el-button @click="onBack">Quay lại</el-button>
        <el-button type="primary" @click="onSubmit(form)">Hoàn tất</el-button>
      </div>
    </el-card>
  </el-col>
</template>

<script>
export default {
  name: "PlacePrice",
  data() {
    return {
      form: {
        policy_type: 0,
        cancel_policy: "",
        policy_type_name: ["normal", "flexible", "strict"],
        max_num_of_people: 1,
        normal_day_price: 200000,
        weekend_price: 200000,
        cleaning_price: 50000,
      },
    }
  },
  methods: {
    onSubmit(form) {
      this.form.cancel_policy = this.form.policy_type_name[this.form.policy_type];
      this.$emit('updatePrice', form)
      this.$router.push('/place')
    },
    onBack() {
      this.$router.back()
    }
  },
}
</script>

<style scoped>

</style>
