<template>
  <div id="app">
    <MyHeader></MyHeader>
    <Search></Search>
    <!--<MapBaidu></MapBaidu>-->
    <!--<MapBaidu2></MapBaidu2>-->
  </div>
</template>
<style>
  html, body {
    padding: 0;
    margin: 0;
    background: #f3f3f3;
  }
</style>
<script>
  import MapBaidu from './components/baiduMap/map.vue'
  import MapBaidu2 from './components/baiduMap/2控件/map.vue'
  import MyHeader from './components/header.vue';
  import Search from './components/Search.vue';
  export default {
    name: 'app',
    components: {MapBaidu, MapBaidu2, MyHeader, Search}
  }
</script>


