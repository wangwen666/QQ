<template>

  <div>
    <h1>PPP</h1>

    <group>
      <x-input type="text" placeholder="用户名" v-model="value"></x-input>
      <x-input type="password" placeholder="密码" v-model="value"></x-input>
      <x-button type="primary" link="/demo">登录</x-button>

      <a href="#/findPassword">忘记密码</a>
      <a href="#/register">注册</a>

    </group>
  </div>

</template>

<script>
  import { XInput, XButton } from 'vux';

  export default {
    name: "index",
    components: {
      XButton,
      XInput
    },

  }
</script>

<style scoped>
  a {
    text-decoration:none;
  }

</style>
