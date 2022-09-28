<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- <a class="list-group-item" href="./home-news.html">News</a> -->
          <router-link replace
            class="list-group-item"
            active-class="active"
            to="/home/new"
            >News</router-link
          >
        </li>
        <li>
          <!-- <a class="list-group-item active" href="./home-message.html"
            >Message</a
          > -->
          <router-link replace
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
    </div>
    <keep-alive include="New">
    <router-view></router-view>
     </keep-alive>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>