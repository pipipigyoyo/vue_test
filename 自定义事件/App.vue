<template>
  <div>
    <School ref="School" />
    <Student />
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  components: { School, Student },
  name: "App",
  methods: {
    getmyschoolname(schoolname) {
      console.log("我的学校是" + schoolname);
    },
  },
  mounted() {
    this.$refs.School.$on("yoyo", this.getmyschoolname);
  },
};
</script>

<style>
</style>