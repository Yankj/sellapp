<template>
  <div id="app">
    <router-view></router-view>
    <v-header></v-header>
    <div class="tab tab-item">商品</div>
    <div class="tab tab-item">评论</div>
    <div class="tab tab-item">商家</div>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  export default {
    name: 'app',
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .tab
      display flex
</style>
