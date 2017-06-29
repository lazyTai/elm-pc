<template>
  <div id="app">
    <MapBaidu></MapBaidu>
    <MapBaidu2></MapBaidu2>
  </div>
</template>
<style>
  html, body {
    padding: 0;
    margin: 0;
  }
</style>
<script>
  import MapBaidu from './components/baiduMap/map.vue'
  import MapBaidu2 from './components/baiduMap/2控件/map.vue'
  export default {
    name: 'app',
    components: {MapBaidu, MapBaidu2}
  }
</script>


