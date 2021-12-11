<template>
  <el-table :data="tableData" style="width: 90%">
    <el-table-column prop="id" label="Id" width="100"/>
    <el-table-column prop="image" label="Ảnh" width="300">
      <template v-slot="scope">
        <el-image :src="scope.row.image" style="width: 100px" fit="contain"/>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="Tên chỗ nghỉ" width="400"/>
    <el-table-column prop="place_type" label="Loại chỗ nghỉ" width="340"/>
    <el-table-column prop="address" label="Địa chỉ"/>
  </el-table>
</template>

<script>
import axios from 'axios';

export default {
  name: "PlaceList",
  data() {
    return {
      tableData: [
        {
          "id": 1,
          "name": "Arlene Feil",
          "details": "Consequatur et et repudiandae facere repellat quaerat cumque accusantium incidunt voluptas et est tempora laudantium dolorum suscipit quidem rerum hic voluptates officia expedita quis nesciunt natus laborum sint commodi qui minima accusamus ut quaerat eos enim rerum quo corporis omnis omnis eligendi molestiae qui est quisquam ex iure ut consequatur tenetur ut labore quia repellendus voluptas modi asperiores earum numquam exercitationem impedit voluptas sint cum consequatur hic exercitationem sequi sunt adipisci non sunt aspernatur quasi enim corrupti maiores tempora vitae magnam consequuntur minus aut neque commodi quis autem eum deleniti sapiente non et magni ipsam dolores sed id adipisci blanditiis porro distinctio id mollitia dolorum nulla ab rerum corporis veniam libero dolor voluptatum ad et odit et et officiis iste aut dolor quo qui autem quia quia aliquam fuga non odio ea architecto beatae quia est similique sint impedit ratione aut sed blanditiis temporibus officiis maxime inventore ex doloribus veniam dolor error quidem ratione officiis dolorem et laboriosam sunt minus atque fugiat commodi ea aut voluptates eaque et voluptatem dolorem minima assumenda libero esse itaque animi odit aut explicabo praesentium quo aut culpa earum expedita occaecati suscipit perferendis tempore et illo nulla consequatur qui itaque fuga distinctio distinctio velit aut dolore quas ipsum sed ipsa ut voluptatem qui nam enim reprehenderit temporibus recusandae possimus voluptatem est sit voluptatem omnis sed est illo quae nostrum itaque non perferendis voluptatem consectetur eos cum soluta nemo eius aspernatur molestiae nulla aliquid necessitatibus doloremque qui ullam placeat et recusandae ipsum ullam nihil deserunt dolore recusandae molestiae modi non id qui aperiam et perferendis iure esse et natus adipisci sed eos ipsam tenetur enim unde et laudantium iusto neque et deserunt sint sunt quia numquam ut voluptas nam eaque et officia voluptatum enim autem mollitia velit rerum rerum ad reiciendis esse eaque debitis velit provident similique quasi qui voluptatem nobis dolores voluptatibus culpa porro exercitationem et nobis alias sit aliquid nihil ducimus sit ut maxime maxime alias magni aut labore repellat aliquam eum asperiores et quisquam dolorem quae nihil omnis velit earum omnis delectus voluptates reiciendis vero occaecati quos rem cupiditate quis atque qui illum architecto eius necessitatibus eveniet necessitatibus molestiae ipsum qui autem voluptas explicabo et eum repudiandae pariatur totam cumque dolores minus quia nisi enim non officia quo est ut accusamus explicabo error est error possimus omnis sit quia accusantium dicta nesciunt deleniti autem ipsa aliquam aut dolorum eos et excepturi illum dignissimos excepturi quis fugit molestiae inventore praesentium et nihil nisi et ut omnis dolorem voluptas illo voluptas consequatur quo et perspiciatis dolor cumque laborum velit nisi at harum molestiae quibusdam est molestias atque et fuga tempore laborum optio aperiam quibusdam facere sed est amet excepturi et sapiente eveniet repellat est ut dicta veritatis ab fugiat iusto voluptatem et vel consequatur sapiente sint similique ut totam perspiciatis nostrum quia dicta nam rerum in voluptate vel quas quidem aut est voluptas soluta harum inventore laboriosam non mollitia ut quibusdam et ad incidunt accusamus non quis veniam beatae doloremque blanditiis voluptate quia repudiandae et.",
          "host": {
            "id": 1,
            "name": "Admin",
            "email": "admin@gmail.com",
            "phone": "098111222",
            "address": "Sao Tome and Principe",
            "gender": null,
            "birthday": null,
            "avatar": "https://cdn.luxstay.com/users/256105/avatar_13fe15c4-d36f-44d7-a471-93186a0a71e1."
          },
          "image": "https://cdn.luxstay.com/rooms/13737/large/room_13737_31_1566960034.jpg",
          "address": "63651 Considine Lake",
          "place_type": "homestay",
          "schedule_price_attributes": {
            "id": 1,
            "normal_day_price": 13.36,
            "weekend_price": 17.81,
            "cleaning_price": 4.01,
            "place_id": 1
          },
          "policy_attributes": {
            "id": 1,
            "currency": "usd",
            "max_num_of_people": 2,
            "place_id": 1,
            "cancel_policy": "normal"
          },
          "overviews_attributes": [
            {
              "id": 1,
              "image": "https://cdn.luxstay.com/users/32999/c1gK94DTkZ4l3NpJR2TwskZR.jpg",
              "place_id": 1
            },
            {
              "id": 2,
              "image": "https://cdn.luxstay.com/rooms/32866/large/Untitled_HDR2%2050.jpg",
              "place_id": 1
            },
            {
              "id": 3,
              "image": "https://cdn.luxstay.com/rooms/33385/large/LIM%20GREEN%20(16).jpg",
              "place_id": 1
            },
            {
              "id": 4,
              "image": "https://cdn.luxstay.com/rooms/25495/large/room_25495_52_1558713239.jpg",
              "place_id": 1
            },
            {
              "id": 5,
              "image": "https://cdn.luxstay.com/users/230391/WMPuXP_zH_qJ8vfz8nrpQSW7.jpg",
              "place_id": 1
            },
            {
              "id": 6,
              "image": "https://cdn.luxstay.com/rooms/13737/large/room_13737_31_1566960034.jpg",
              "place_id": 1
            },
            {
              "id": 7,
              "image": "https://cdn.luxstay.com/rooms/23569/large/339a03a1810e7950201f.jpg",
              "place_id": 1
            },
            {
              "id": 8,
              "image": "https://cdn.luxstay.com/users/32999/c1gK94DTkZ4l3NpJR2TwskZR.jpg",
              "place_id": 1
            }
          ],
          "rule_attributes": {
            "id": 1,
            "special_rules": "Veniam accusantium dolore corporis at voluptatem cupiditate nihil dolorem expedita suscipit est impedit in inventore facere earum ipsa amet aut quis modi enim tempora velit voluptas dicta architecto et mollitia deserunt non commodi delectus error et rerum nostrum sed ut excepturi voluptatibus libero aut neque adipisci maxime voluptate vel quo.",
            "place_id": 1,
            "smoking": "allowed",
            "pet": "allowed",
            "cooking": "unallowed",
            "party": "charge"
          },
          "room_attributes": {
            "id": 1,
            "square": 25,
            "num_of_bedroom": 1,
            "num_of_bed": 1,
            "num_of_bathroom": 1,
            "num_of_kitchen": 1,
            "place_id": 1
          },
          "ratings": [],
          "place_facilities_attributes": [
            "Wifi",
            "TV",
            "Ban công",
            "Điều hòa",
            "Máy giặt",
            "Lò vi sóng",
            "Tủ lạnh"
          ]
        }
      ],
    }
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
