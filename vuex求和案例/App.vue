<template>
  <div><Count /> <Persons /></div>
</template>

<script>
import Count from "./components/Count.vue";
import Persons from "./components/Persons.vue";
export default {
  components: { Count, Persons },
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
</style>
