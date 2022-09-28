<template>
  <div>
    <div>
      <ul>
        <li v-for="p in mgs" :key="p.id">
          <!-- <a href="/message1">message001</a> -->
          <!-- <router-link
            :to="`/home/message/detile?id=${p.id}&title=${p.title}`"
            >{{ p.title }}</router-link
          > -->
          <!-- <router-link :to="`/home/message/detile/${p.id}/${p.title}`">{{
            p.title
          }}</router-link> -->
          <!-- <router-link
            :to="{
              name: 'guangyu',
              query: {
                id: p.id,
                title: p.title,
              },
            }"
            >{{ p.title }}</router-link
          > -->
          <router-link
            :to="{
              name: 'guangyu',
              params: {
                id: p.id,
                title: p.title,
              },
            }"
            >{{ p.title }}</router-link
          >
          <button @click="pushShow(p)">push</button>
          <button @click="replaceShow(p)">replace</button>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mgs: [
        { id: "001", title: "message001" },
        { id: "002", title: "message002" },
        { id: "003", title: "message003" },
      ],
    };
  },
  methods:{
    pushShow(p){
      this.$router.push({name: 'guangyu',
              params: {
                id: p.id,
                title: p.title,
              }})
    },
    replaceShow(p){
      this.$router.replace({name: 'guangyu',
              params: {
                id: p.id,
                title: p.title,
              }})
    }
  },
  beforeDestroy(){
    console.log('要被销毁了');
  }
};
</script>

<style>
</style>