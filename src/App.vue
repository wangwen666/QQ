<template>
  <div id="app">
    <router-view/>
    <tabbar>
      <tabbar-item selected link="/message">
        <img slot="icon" >
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item show-dot link="/contact">
        <img slot="icon" >
        <span slot="label">联系人</span>
      </tabbar-item>
      <tabbar-item link="/view">
        <img slot="icon" >
        <span slot="label">看点</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/status">
        <img slot="icon" >
        <span slot="label">动态</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'

  export default {
    name: 'App',
    components: {
      Tabbar,
      TabbarItem
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
