<template>
  <div>
    <h1>我的学校是{{ schoolname }}</h1>
    <h4>位于{{ address }}</h4>
    <button @click="getmyschoolname">获取学校名字</button>
    <button @click="getmyschooladdress">获取学校地址</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MySchool",
  data() {
    return {
      schoolname: "清华",
      address: "广州",
    };
  },
  methods: {
    getmyschoolname() {
      this.$emit("yoyo", this.schoolname);
    },
    getmyschooladdress() {
      pubsub.publish("myschooladdressevent", this.address);
    },
  },
};
</script>

<style>
</style>