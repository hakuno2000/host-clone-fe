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
      <p style="text-align:left; font-size: larger; font-weight: bold">Thiết lập nội quy chỗ nghỉ</p>
      <el-divider></el-divider>
      <el-row>
        <p style="text-align:left; font-weight: bold">Hút thuốc</p>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-radio v-model="form.rules[0]" label="allowed">Cho phép</el-radio>
        </el-col>
        <el-col :span="12">
          <el-radio v-model="form.rules[0]" label="unallowed">Không cho phép</el-radio>
        </el-col>
      </el-row>
      <el-row>
        <p style="text-align:left; font-weight: bold">Nuôi động vật</p>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-radio v-model="form.rules[1]" label="allowed">Cho phép</el-radio>
        </el-col>
        <el-col :span="12">
          <el-radio v-model="form.rules[1]" label="unallowed">Không cho phép</el-radio>
        </el-col>
      </el-row>
      <el-row>
        <p style="text-align:left; font-weight: bold">Tổ chức tiệc</p>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-radio v-model="form.rules[2]" label="allowed">Cho phép</el-radio>
        </el-col>
        <el-col :span="12">
          <el-radio v-model="form.rules[2]" label="unallowed">Không cho phép</el-radio>
        </el-col>
      </el-row>
      <el-row>
        <p style="text-align:left; font-weight: bold">Nấu ăn</p>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-radio v-model="form.rules[3]" label="allowed">Cho phép</el-radio>
        </el-col>
        <el-col :span="12">
          <el-radio v-model="form.rules[3]" label="unallowed">Không cho phép</el-radio>
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
        rules: Array(4).fill("allowed"),
        rule_names: ["smoking", "pet", "party", "cooking"],
        rule_attributes: {},
      }
    }
  },

  methods: {
    onSubmit(form) {
      this.form.rule_attributes = {
        "special_rules": "no special rules",
        "smoking": this.form.rules[0],
        "pet": this.form.rules[1],
        "party": this.form.rules[2],
        "cooking": this.form.rules[3]
      }
      this.$emit('updateRule', form)
      this.$router.push('/form/6')
    },
    onBack() {
      this.$router.back()
    }
  }
}
</script>
