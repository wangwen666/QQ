<template>

  <div id="container">
    <img width="100" height="100" style="margin: 90px auto 0 auto; display: block" :src="Img">
    <h1 style="text-align: center">PPP</h1>

    <group ref="_group">
      <x-input  ref="_group1" :is-type="selfValid" required name="username"  type="text" placeholder="账号" ></x-input>
      <x-input :is-type="selfValid" name="password" required  type="password" placeholder="密码"></x-input>
    </group>

    <x-button style="margin: 20px 0" type="primary" @click.native="login">登录</x-button>

    <a class="pull-left" href="#/findPassword">忘记密码?</a>
    <a class="pull-right" href="#/register">注册</a>

    <div v-transfer-dom>
      <alert></alert>
    </div>


  </div>

</template>

<script>
  import Vue from 'vue'
  import { Group, XInput, XButton, Alert, TransferDomDirective as TransferDom } from 'vux';
  import {AlertPlugin} from 'vux';
  import API from './../../configs/api.js';
  import STATUS from './../../configs/status.js';
  import WebSocket from './../../lib/websocket.js';


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
         return {
           valid: value.length > 0,
           msg: '输入错误'
         }
       },

       msgs: this.$store.state.message.msg

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

        const that = this;

        this.$axios.post(API.USER.LOGIN, params)
          .then( (res) => {
            res = res.data;
            if (res.code === STATUS.CODE.S200) {

              localStorage.user = res.data.id;
              localStorage.name = res.data.name;

              console.log(localStorage.user);

              this.$router.push(
                { path: '/message' }
              );

              console.log(this.$store.state.message.msg);


              // 登录成功后建立websocket连接
              const url = 'ws://127.0.0.1:8001/' + res.data.id;

              // const ws = WebSocket(url);
              Vue.prototype.ws = WebSocket(url);

              this.ws.onopen = function () {
                console.log('发送数据');
              };

              this.ws.onmessage = function (e) {
                console.log('得到数据');
                console.log(e.data);


                // 拿到传过来的数据
                /*
                *  1、判断是否是新的聊天 id
                *  2、新聊天 创建一个新；否则 找到对应的聊天置顶，同时如何放入信息放入信息
                *
                *
                *  注: 登录成功后从redis里面拉数据 （如何实现）
                * */

                const data = JSON.parse(e.data);

                let had =  false;

                that.msgs.map((item, index) => {
                  if (data.uid === item.uid) {
                    that.msgs.splice(index, 1);
                    that.msgs.unshift(data);
                    item.num++;
                    had = true;
                    console.log(1231);

                    return false;
                  }
                })

                if (!had) {
                  data.num = 1;
                  that.msgs.unshift(data)
                }

                // console.log(this.$store);
                // this.$store.state.count

              }
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
