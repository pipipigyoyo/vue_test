<template>
  <div>
    <h1>我叫{{ myname }}</h1>
    <h4>今年{{ age }}</h4>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyStudent",
  data() {
    return {
      myname: "马牛逼",
      age: 99,
    };
  },
  methods: {
    myschooladdress(mes, address) {
      console.log(mes, address);
    },
  },
  mounted() {
    pubsub.subscribe("myschooladdressevent", this.myschooladdress);
  },
};
</script>
<style>
</style>