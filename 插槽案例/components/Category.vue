<template>
  <div class="category">
    <h1>{{ title }}</h1>
    <slot :games="games"></slot>
    <!-- <ul>
      <li v-for="(obj, index) in list" :key="index">{{ obj }}</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return { games: ["红色警戒", "穿越火线", "劲舞团"] };
  },
  props: ["title"],
};
</script>

<style>
.category {
  height: 200px;
  width: 200px;
  background-color: skyblue;
  float: left;
  margin-right: 20px;
}
h1 {
  background-color: pink;
  text-align: center;
}
img {
  width: 100%;
  height: 100%;
}
</style>