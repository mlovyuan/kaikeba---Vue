<template>
  <div id="app" style="width: 100px; height: 30px; border:1px solid">
    <!-- <Item :isActive="curActive==='動漫'" @active="curActive='動漫'">
      動漫
    </Item> -->

    <TitleMenu>
    </TitleMenu>
  </div>
</template>

<script>
import Item from "./components/TitleMenu"
export default {
  name: 'App',
  // 宣告使用的子組件
  components: {
    TitleMenu
  },
  data(){
    return{
      curActive:""
    }
  },
  methods:{
    test(e){
      console.log(e);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
