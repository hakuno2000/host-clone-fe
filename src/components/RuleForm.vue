<template>
  <el-col :span="12">
    <el-card class="box-card">
      <p style="text-align:left; font-size: larger; font-weight: bold">Thiết lập nội quy chỗ nghỉ</p>
    </el-card>
    <el-card class="box-card" align="left">
      <el-row>
        <p style="text-align:left; font-weight: bold">Hút thuốc</p>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-checkbox v-model="checked1" label="Cho phép"></el-checkbox>
        </el-col>
        <el-col :span="12">
          <el-checkbox v-model="checked2" label="Không cho phép"></el-checkbox>
        </el-col>
      </el-row>
      <el-row>
        <p style="text-align:left; font-weight: bold">Nuôi động vật</p>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-checkbox v-model="checked3" label="Cho phép"></el-checkbox>
        </el-col>
        <el-col :span="12">
          <el-checkbox v-model="checked4" label="Không cho phép"></el-checkbox>
        </el-col>
      </el-row>
      <el-row>
        <p style="text-align:left; font-weight: bold">Tổ chức tiệc</p>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-checkbox v-model="checked5" label="Cho phép"></el-checkbox>
        </el-col>
        <el-col :span="12">
          <el-checkbox v-model="checked6" label="Không cho phép"></el-checkbox>
        </el-col>
      </el-row>
      <el-row>
        <p style="text-align:left; font-weight: bold">Nấu ăn</p>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-checkbox v-model="checked7" label="Cho phép"></el-checkbox>
        </el-col>
        <el-col :span="12">
          <el-checkbox v-model="checked8" label="Không cho phép"></el-checkbox>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <div align="center">
        <el-button>Quay lại</el-button>
        <el-button type="primary" @click="onSubmit">Tiếp</el-button>
      </div>
    </el-card>
  </el-col>
</template>

<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
  setup() {
    const checked1 = ref(false)
    const checked2 = ref(false)
    const checked3 = ref(false)
    const checked4 = ref(false)
    const checked5 = ref(false)
    const checked6 = ref(false)
    const checked7 = ref(false)
    const checked8 = ref(false)
    return {
      checked1,
      checked2,
      checked3,
      checked4,
      checked5,
      checked6,
      checked7,
      checked8,
    }
  },

  methods: {
    onSubmit() {
      this.$router.push('/form/6')
    },
  }
})
</script>
