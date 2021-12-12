<template>
  <div style="width: 90%">
    <p style="text-align:left; font-size: larger; font-weight: bold">Danh sách chỗ nghỉ</p>
  </div>
  <el-card style="width: 90%">
    <el-table :data="pagedTableData">
      <el-table-column prop="id" label="Id" width="100"/>
      <el-table-column prop="image" label="Ảnh" width="300">
        <template v-slot="scope">
          <el-image :src="scope.row.image" style="width: 100px; height: 66.66px" fit="contain"/>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Tên chỗ nghỉ" width="400"/>
      <el-table-column prop="place_type" label="Loại chỗ nghỉ" width="340"/>
      <el-table-column prop="address" label="Địa chỉ"/>
    </el-table>
    <p></p>
    <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        :total="tableData.length">
    </el-pagination>
  </el-card>
</template>

<script>
import axios from 'axios';

export default {
  name: "PlaceList",
  data() {
    return {
      tableData: [],
      page: 1,
      pageSize: 10
    }
  },

  computed: {
    pagedTableData() {
      if (!this.tableData || this.tableData.length === 0) return [];
      return this.tableData.slice(this.pageSize * this.page - this.pageSize, this.pageSize * this.page)
    }
  },

  methods: {
    handleCurrentChange(val) {
      this.page = val;
    },
  },

  created() {
    axios.defaults.timeout = 300000;
    axios.get(`http://localhost:3000/api/v1/place/host/1`)
        .then(response => {
          this.tableData = response.data.data;
          // console.log(response.data);
          console.log(this.tableData);
        })
  }
}
</script>

<style scoped>

</style>
