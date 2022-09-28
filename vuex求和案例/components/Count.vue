<template>
  <div>
    <h1>当前数值为：{{ sum }}</h1>
    <h4>放大十倍为{{ bigSum }}</h4>
    <h4>我的姓名是{{ myname }}</h4>
    <h4>我的学校是{{ school }}</h4>
    <h4>当前人数为{{ personNum }}</h4>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(n)">+</button>
    <button @click="subtract(n)">-</button>
    <button @click="addodd(n)">当为奇数时才能加</button>
    <button @click="addwait(n)">等一等加</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "Category",
  data() {
    return { n: 1 };
  },
  methods: {
    /* add() {
      this.$store.commit("JIA", this.n);
    },
    subtract() {
      this.$store.commit("JIAN", this.n);
    }, */
    ...mapMutations("countAbout", { add: "JIA", subtract: "JIAN" }),
    /*addodd() {
       this.$store.dispatch("jiaodd", this.n);
    },
    addwait() {
      this.$store.dispatch("jiawait", this.n);
    }, */
    ...mapActions("countAbout", { addodd: "jiaodd", addwait: "jiawait" }),
  },
  computed: {
    /*     sum() {
      return this.$store.state.sum;
    },
    myname() {
      return this.$store.state.myname;
    },
    school() {
      return this.$store.state.school;
    },
    bigSum() {
      return this.$store.getters.bigSum;
    },*/
    personNum() {
      return this.$store.state.personsAbout.personList.length;
    },
    ...mapState("countAbout", ["sum", "myname", "school"]),
    ...mapGetters("countAbout", ["bigSum"]),
  },
  mounted() {
    console.log(this.$store);
  },
};
</script>

<style>
</style>