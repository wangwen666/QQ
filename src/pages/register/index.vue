<template>

  <div id="container">
    <img width="100" height="100" style="margin: 90px auto 0 auto; display: block" :src="Img">
    <h1 style="text-align: center">PPP</h1>

    <group ref="_group">
      <x-input :is-type="selfValid" required name='username'  type="text" placeholder="账号" ></x-input>
      <x-input :is-type="selfValid" name="password" required  type="password" placeholder="密码"></x-input>
      <x-input :is-type="selfValid" name="password" required  type="password" placeholder="确认密码"></x-input>
    </group>

    <x-button style="margin: 20px 0" type='primary' @click.native="login">注册</x-button>

    <a class="pull-left" href="#/findPassword">忘记密码?</a>
    <a class="pull-right" href="#/login">返回登录</a>

    <div v-transfer-dom>
      <alert></alert>
    </div>


  </div>

</template>

<script>
  import Vue from 'vue'
  import { Group, XInput, XButton, Alert, TransferDomDirective as TransferDom } from 'vux';
  import {AlertPlugin} from 'vux';
  import Axios from 'axios';
  import API from './../../configs/api.js';
  import STATUS from './../../configs/status.js';

  Vue.use(AlertPlugin);

  export default {
    name: "index",
    directives: {
      TransferDom
    },
    components: {
      Group,
      XButton,
      XInput,
      Alert
    },
    data: function (){
      return {
        Img: require('./../../../static/QQ.png'),
        selfValid: function (value) {
          console.log(value);
          return {
            valid: value.length > 0,
            msg: '输入错误'
          }

        },

      }
    },
    mounted () {
      // console.log(this.$refs._group.$children);
    },
    methods: {
      login: function(){

        if(!this._validate()){
          return;
        }

        const params = this._getFormParams();

        // this.$router.push(
        //   { path: "/message" }
        // );

        Axios.post(API.USER.REGISTER, params)
          .then( (res) => {
            res = res.data;
            console.log(res);
            if(res.code === STATUS.CODE.S200) {
              this.$router.push(
                { path: '/message' }
              );
            } else {
              this.$vux.alert.show({
                title: '提示',
                content: res.msg || '用户名或密码错误'
              });
            }
          })
          .catch(() => {

          })
      },


      _validate: function () {

        const arr = this.$refs._group.$children;

        // console.log(this.$refs._group1.valid);

        for(let i in arr){
          if(!arr[i].currentValue){
            return false
          }
        }
        return true
      },

      _getFormParams: function(){

        const arr = this.$refs._group.$children;
        let obj ={};
        arr.map((child) => {
          obj[child.name] = child.currentValue;
        })
        return obj;

      }

    }

  }
</script>

<style scoped>
  a {
    text-decoration:none;
  }

</style>
