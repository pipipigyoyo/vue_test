<template>
  <ul>
    <li>消息编号：{{ id }}</li>
    <li>消息名称：{{ title }}</li>
  </ul>
</template>

<script>
export default {
  mounted() {
    console.log(this);
  },
  props:['id','title']
};
</script>

<style>
</style>