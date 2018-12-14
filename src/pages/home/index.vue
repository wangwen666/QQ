<template>
  <div>
    <router-view></router-view>
    <tabbar style="position: fixed">
      <tabbar-item selected badge="2" link="/message">
        <i class="iconfont icon-pinglunshu-" slot="icon"></i>
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item show-dot link="/contact">
        <i class="iconfont icon-wode-" slot="icon"></i>
        <span slot="label">联系人</span>
      </tabbar-item>
      <tabbar-item link="/view">
        <i class="iconfont icon-pinglun-" slot="icon"></i>
        <span slot="label">看点</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/status">
        <i class="iconfont icon-wenzishezhi-" slot="icon"></i>
        <span slot="label">动态</span>
      </tabbar-item>
    </tabbar>

  </div>

</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'
    export default {
      name: "home",
      components: {
        Tabbar,
        TabbarItem
      }
    }
</script>

<style scoped>

</style>
