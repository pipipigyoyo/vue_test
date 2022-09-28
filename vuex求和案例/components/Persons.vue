<template>
  <div>
    <h1>人员列表</h1>
    <h4>Const组件求和为{{ sum }}</h4>
    <input type="text" name="" id="" v-model="personname" />
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.username }}</li>
    </ul>
    <button @click="addList">添加人员</button>
    <button @click="addMsg">添加非主流语录</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { nanoid } from "nanoid";
export default {
  data() {
    return {
      personname: "",
    };
  },
  methods: {
    addList() {
      const newList = { id: nanoid(), username: this.personname };
      this.$store.commit("personsAbout/JIAYONGHU", newList);
      this.personname = "";
    },
    addMsg() {
      this.$store.dispatch("personsAbout/sendRequest");
    },
  },
  computed: {
    ...mapState("countAbout", ["sum"]),
    ...mapState("personsAbout", ["personList"]),
  },
};
</script>

<style>
</style>