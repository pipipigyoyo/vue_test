<template>
  <div>
    <button @click="isshow = !isshow">显示/隐藏</button>
    <transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__animated animate__bounce"
      leave-active-class="animate__backOutLeft"
    >
      <h1 v-show="isshow">你好哇!</h1>
    </transition>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "App",
  data() {
    return { isshow: true };
  },
};
</script>

<style scoped>
h1 {
  background-color: pink;
}
/* .v-enter,
.v-leave-to {
  transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active {
  transition: 1s linear;
}
.v-leave,
.v-enter-to {
  transform: translateX(0);
} */
/* @keyframes yoyo {
  from {
  }
  to {
    transform: translateX(-100%);
  }
} */
</style>