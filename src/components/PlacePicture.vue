<template>
  <el-col style="width: 50%">
    <div>
      <el-steps :active="1" finish-status="success" align-center>
        <el-step title="Thông tin chỗ nghỉ"></el-step>
        <el-step title="Hình ảnh chỗ nghỉ"></el-step>
        <el-step title="Giá và quy định nhận chỗ"></el-step>
      </el-steps>
    </div>
    <br />
    <el-card class="box-card" shadow="hover">
      <p style="text-align: left; font-size: larger; font-weight: bold">
        Hình ảnh chỗ nghỉ
      </p>
      <p style="text-align: left">
        Một vài tấm ảnh đẹp sẽ giúp khách hàng có nhiều thiện cảm hơn về chỗ
        nghỉ của bạn.
      </p>
      <!-- Upload Cover Image -->
      <el-divider></el-divider>
      <p style="text-align: left">Ảnh bìa:</p>
      <input type="file" accept="image/*" @change="updateCoverImg" />
      <!-- Upload Facility Image -->
      <el-divider></el-divider>
      <p style="text-align: left">Ảnh chỗ nghỉ:</p>
      <input
        type="file"
        multiple="multiple"
        accept="image/jpeg, image/png, image/jpg"
        @change="updateFacilityImg"
      />
      <!-- <el-upload
        class="upload-demo"
        name="image"
        multiple="false"
        action="https://api.imgur.com/3/upload"
        headers="{
          'Authorization': 'Client-ID 4175aa8362c1b1e',
        }"
        v-model:file-list="this.fileList"
        list-type="picture"
        align="left"
      >
        <p style="text-align: left">Ảnh bìa:</p>
        <el-button size="medium" type="primary">Click to upload</el-button>
      </el-upload> -->
      <!-- <el-upload
        class="upload-demo"
        name="image"
        action="https://api.imgbb.com/1/upload?key=85566a684c63bc4fe4bba7c6b2ae856a"
        v-model:file-list="this.fileList"
        list-type="picture"
        align="left"
      >
        <p style="text-align: left">Ảnh chỗ nghỉ:</p>
        <el-button size="medium" type="primary">Click to upload</el-button>
      </el-upload> -->
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
import axios from "axios";
export default {
  name: "PlacePicture",
  data() {
    return {
      coverImg: "",
      facilityImg: [],
    };
  },

  methods: {
    async uploadImg(e) {
      const hostURL =
        "https://api.imgbb.com/1/upload?key=85566a684c63bc4fe4bba7c6b2ae856a";
      const files = e.target.files;
      const imgURL = [];
      for (let i = 0; i < files.length; i++) {
        let data = new FormData();
        data.append("image", e.target.files[i]);
        let res = await axios.post(hostURL, data);
        imgURL.push(res.data.data.url);
      }
      return imgURL;
    },
    async updateCoverImg(e) {
      let arr = await this.uploadImg(e);
      this.coverImg = arr[0];
    },
    async updateFacilityImg(e) {
      let arr = await this.uploadImg(e);
      for (let i = 0; i < arr.length; i++) {
        this.facilityImg.push({
          image: arr[i],
        });
      }
    },
    onSubmit() {
      this.$emit("updateImage", this.coverImg, this.facilityImg);
      this.$router.push("/price");
    },
    onBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped></style>
