<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handlechecked(todo.id)"
      />
      <span v-show="!todo.edit">{{ todo.title }}</span>
      <input
        type="text"
        :value="todo.title"
        v-show="todo.edit"
        @blur="handelBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="todod(todo.id)">删除</button>
    <button
      class="btn btn-danger"
      @click="handelEdit(todo)"
      v-show="!todo.edit"
    >
      编辑
    </button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    handlechecked(id) {
      this.$bus.$emit("changecheckedevent", id);
    },
    todod(id) {
      this.$bus.$emit("tododeleteevent", id);
    },
    handelEdit(todo) {
      if (todo.edit in todo) {
        todo.edit = true;
      } else {
        this.$set(todo, "edit", true);
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    handelBlur(todo, e) {
      todo.edit = false;
      this.$bus.$emit("updatatodo", todo.id, e.target.value);
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: pink;
}
li:hover button {
  display: block;
}
</style>