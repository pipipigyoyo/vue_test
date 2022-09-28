<template>
  <div>
    <div>
      <ul>
        <li :style="{opacity}">yoyo</li>
        <li>news001 <input type="text" name="" id=""></li>
        <li>news002 <input type="text" name="" id=""></li>
        <li>news003 <input type="text" name="" id=""></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'New',
  data() {
    return {
      opacity:1
    }
  },
  beforeDestroy(){
    console.log('要被销毁了');
  },
  activated() {
   this.timer= setInterval(()=>{
      this.opacity-=0.01
      if(this.opacity<=0) this.opacity=1
      console.log('计时器开始了');
    },16)
  },
  deactivated(){
    clearInterval(this.timer)
    console.log('计时器停止了');
  }
};
</script>

<style>
</style>