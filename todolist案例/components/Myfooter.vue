<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="isall" />
    </label>
    <span>
      <span>已完成{{ totaltodu }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="cleartodo">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos"],
  computed: {
    totaltodu() {
      return this.todos.reduce((p, todo) => {
        return p + (todo.done ? 1 : 0);
      }, 0);
    },
    total() {
      return this.todos.length;
    },
    isall: {
      get() {
        return this.totaltodu === this.total && this.total > 0;
      },
      set(value) {
        return this.$emit("alltodo", value);
      },
    },
  },
  methods: {
    cleartodo() {
      this.$emit("todoclear");
    },
  },
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>