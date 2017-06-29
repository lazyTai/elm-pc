<template>
  <div id="app">
    <MyHeader></MyHeader>
    <div class="body">
      <Search></Search>
      <Type></Type>
      <Shop></Shop>
    </div>
    <!--<MapBaidu></MapBaidu>-->
    <!--<MapBaidu2></MapBaidu2>-->
  </div>
</template>
<style>
  html, body, #app {
    padding: 0;
    margin: 0;
    background: #f3f3f3;
    min-width: 1000px;
  }

  .body {
    padding: 0 60px;
    margin-bottom: 50px;
  }

</style>
<script>
  import MapBaidu from './components/baiduMap/map.vue'
  import MapBaidu2 from './components/baiduMap/2控件/map.vue'
  import MyHeader from './components/header.vue';
  import Search from './components/Search.vue';
  import Type from './components/Type.vue';
  import Shop from './components/Shop.vue';
  export default {
    name: 'app',
    components: {MapBaidu, MapBaidu2, MyHeader, Search, Type, Shop}
  }
</script>


