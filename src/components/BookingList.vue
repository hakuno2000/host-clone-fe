<template>
  <div style="width: 90%">
    <p style="text-align:left; font-size: larger; font-weight: bold">Danh sách đặt lịch</p>
  </div>
  <el-card style="width: 90%">
    <el-table :data="tableData">
      <el-table-column prop="id" label="Id" width="100"/>
      <el-table-column prop="place_name" label="Tên chỗ nghỉ" width="360"/>
      <el-table-column prop="num_of_people" label="Số người" width="200"/>
      <el-table-column prop="price" label="Giá" width="300"/>
      <el-table-column prop="start_date" label="Ngày đến"/>
      <el-table-column prop="end_date" label="Ngày đi"/>
    </el-table>
  </el-card>
</template>

<script>
import axios from 'axios';
import {formatPrice} from "@/utils/formatFunction";

export default {
  data() {
    return {
      tableData: [],
    }
  },
  created() {
    axios.defaults.timeout = 300000;
    axios.get(`http://localhost:3000/api/v1/booking/host/1`, {
      headers: {
        authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.GKRbbyx8OqCqn2qKXo924USG5t0WU-VnsB1RXWwhMog',
      }
    })
        .then(response => {
          this.tableData = response.data;
          // console.log(response.data);
          this.tableData.forEach(function (element) {
            element.price = formatPrice(element.price);
            element.start_date = element.start_date.split('T')[0];
            element.end_date = element.end_date.split('T')[0];
          });
          console.log(this.tableData);
        })
  }
}
</script>

<style scoped>

</style>
