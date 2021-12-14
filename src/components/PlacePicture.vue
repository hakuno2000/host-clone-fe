<template>
  <el-col style="width: 50%">
    <div>
      <el-steps :active="1" finish-status="success" align-center>
        <el-step title="Thông tin chỗ nghỉ"></el-step>
        <el-step title="Hình ảnh chỗ nghỉ"></el-step>
        <el-step title="Giá và quy định nhận chỗ"></el-step>
      </el-steps>
    </div>
    <br>
    <el-card class="box-card" shadow="hover">
      <p style="text-align:left; font-size: larger; font-weight: bold">Hình ảnh chỗ nghỉ</p>
      <p style="text-align:left">Một vài tấm ảnh đẹp sẽ giúp khách hàng có nhiều thiện cảm hơn về chỗ nghỉ của bạn.</p>
      <el-divider></el-divider>
      <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="cover"
          list-type="picture"
          align="left"
      >
        <p style="text-align:left">Ảnh bìa:</p>
        <el-button size="medium" type="primary">Click to upload</el-button>
      </el-upload>
      <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
          align="left"
      >
        <p style="text-align:left">Ảnh chỗ nghỉ:</p>
        <el-button size="medium" type="primary">Click to upload</el-button>
      </el-upload>
      <div align="left">
        <div class="el-upload__tip">
          File ảnh định dạng jpg/png kích thước nhỏ hơn 500kb
        </div>
      </div>
      <el-divider></el-divider>
      <div align="center">
        <el-button @click="onBack">Quay lại</el-button>
        <el-button type="primary" @click="onSubmit()">Tiếp</el-button>
      </div>
    </el-card>
  </el-col>
</template>

<script>
export default {
  name: "PlacePicture",
  data() {
    return {
      cover: [
        {
          name: 'cover.jpeg',
          url: 'https://cdn.luxstay.com/rooms/13737/large/room_13737_31_1566960034.jpg',
        },
      ],
      fileList: [
        {
          name: 'pic1.jpeg',
          url: 'https://cdn.luxstay.com/rooms/16657/large/1542352179_screenshot_4png',
        },
        {
          name: 'pic2.jpeg',
          url: 'https://cdn.luxstay.com/rooms/17679/large/room_17679_23_1543814614.jpg',
        },
      ],
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    onSubmit() {
      this.$router.push('/price')
    },
    onBack() {
      this.$router.back()
    }
  },
}
</script>

<style scoped>

</style>
