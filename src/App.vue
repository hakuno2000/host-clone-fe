<template>
  <TopBar></TopBar>
  <el-main style="display: flex; justify-content: center; flex-direction: column; align-items: center">
    <router-view
        @updateBasic="updateBasic"
        @updateLocation="updateLocation"
        @updateRoom="updateRoom"
        @updateUtility="updateUtility"
        @updateRule="updateRule"
        @updateInformation="updateInformation"
        @updatePrice="updatePrice"
    />
  </el-main>
  <p></p>
  <el-footer style="font-size: small">
    <p>Bài tập cho môn 2122I_INT3139, viết bởi Vinh.</p>
    <p>© 2021. Sản phẩm tuân theo MIT License.</p>
  </el-footer>
</template>

<script>
import TopBar from "@/components/TopBar";
import axios from "axios";

export default {
  name: 'App',
  emits: ['updateBasic', 'updateLocation', 'updateRoom', 'updateUtility', 'updateRule', 'updateInformation', 'updatePrice'],
  components: {
    TopBar,
  },

  data() {
    return {
      full_info: {
        "name": "",
        "details": "",
        "image": "https://cdn.luxstay.com/rooms/13737/large/room_13737_31_1566960034.jpg",
        "address": "",
        "place_type": "",
        "schedule_price_attributes": {
          "normal_day_price": 13.36,
          "weekend_price": 17.81,
          "cleaning_price": 4.01,
        },
        "policy_attributes": {
          "currency": "vnd",
          "max_num_of_people": 1,
          "cancel_policy": "normal"
        },
        "overviews_attributes": [
          {
            "image": "https://cdn.luxstay.com/users/32999/c1gK94DTkZ4l3NpJR2TwskZR.jpg",
          },
          {
            "image": "https://cdn.luxstay.com/rooms/32866/large/Untitled_HDR2%2050.jpg",
          },
          {
            "image": "https://cdn.luxstay.com/rooms/33385/large/LIM%20GREEN%20(16).jpg",
          },
          {
            "image": "https://cdn.luxstay.com/rooms/25495/large/room_25495_52_1558713239.jpg",
          },
          {
            "image": "https://cdn.luxstay.com/users/230391/WMPuXP_zH_qJ8vfz8nrpQSW7.jpg",
          },
          {
            "image": "https://cdn.luxstay.com/rooms/13737/large/room_13737_31_1566960034.jpg",
          },
          {
            "image": "https://cdn.luxstay.com/rooms/23569/large/339a03a1810e7950201f.jpg",
          },
          {
            "image": "https://cdn.luxstay.com/users/32999/c1gK94DTkZ4l3NpJR2TwskZR.jpg",
          }
        ],
        "rule_attributes": {
          "special_rules": "no special rules",
          "smoking": "allowed",
          "pet": "allowed",
          "cooking": "unallowed",
          "party": "charge"
        },
        "room_attributes": {
          "square": 25,
          "num_of_bedroom": 1,
          "num_of_bed": 1,
          "num_of_bathroom": 1,
          "num_of_kitchen": 1,
        },
        "ratings": [],
        "place_facilities_attributes": []
      }
    }
  },

  methods: {
    updateBasic(form) {
      this.full_info.name = form.name;
      this.full_info.place_type = form.place_type;
    },
    updateLocation(form) {
      this.full_info.city = form.city;
      this.full_info.address = form.address;
    },
    updateRoom(form) {
      this.full_info.room_attributes.square = form.square;
      this.full_info.room_attributes.num_of_bedroom = form.num_of_bedroom;
      this.full_info.room_attributes.num_of_bed = form.num_of_bed;
      this.full_info.room_attributes.num_of_bathroom = form.num_of_bathroom;
      this.full_info.room_attributes.num_of_kitchen = form.num_of_kitchen;
    },
    updateUtility(form) {
      this.full_info.place_facilities_attributes = form.place_facilities_attributes;
    },
    updateRule(form) {
      this.full_info.rule_attributes = form.rule_attributes;
    },
    updateInformation(form) {
      this.full_info.details = form.details;
    },
    updatePrice(form) {
      this.full_info.policy_attributes.cancel_policy = form.cancel_policy;
      this.full_info.policy_attributes.max_num_of_people = form.max_num_of_people;
      this.full_info.schedule_price_attributes.normal_day_price = form.normal_day_price;
      this.full_info.schedule_price_attributes.weekend_price = form.weekend_price;
      this.full_info.schedule_price_attributes.cleaning_price = form.cleaning_price;
      console.log(this.full_info);
      axios.post(`http://localhost:3000/api/v1/place/new`, this.full_info, {
        headers: {
          authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.GKRbbyx8OqCqn2qKXo924USG5t0WU-VnsB1RXWwhMog',
        }
      })
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+Display&display=swap');

#app {
  font-family: Noto Sans Display, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
