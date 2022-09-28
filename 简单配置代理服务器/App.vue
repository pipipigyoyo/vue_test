<template>
  <div>
    <button @click="getstudents">获取学生信息</button>
    <button @click="getcars">获取车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    getstudents() {
      axios.get("http://localhost:8080/api/students").then(
        (response) => {
          console.log("成功", response.data);
        },
        (error) => {
          console.log("错误", error.message);
        }
      );
    },
    getcars() {
      axios.get("http://localhost:8080/demo/cars").then(
        (response) => {
          console.log("成功", response.data);
        },
        (error) => {
          console.log("错误", error.message);
        }
      );
    },
  },
};
</script>
