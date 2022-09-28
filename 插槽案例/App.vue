<template>
  <div class="container">
    <Category title="游戏">
      <template scope="yoyo">
        <ul>
          <li v-for="(obj, index) in yoyo.games" :key="index">{{ obj }}</li>
        </ul>
      </template></Category
    >
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  components: { Category },
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
</style>
