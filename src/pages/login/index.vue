<template>

  <div id="container">
    <h1>PPP</h1>

    <group ref="_group">
      <x-input name="user" required type="text" placeholder="用户名" v-model="inputText.name"></x-input>
      <x-input name="password" required type="password" placeholder="密码" v-model="inputText.password"></x-input>

      <x-button type="primary" @click.native="login">登录</x-button>

      <a class="pull-left" href="#/findPassword">忘记密码?</a>
      <a class="pull-right" href="#/register">注册</a>

      <div v-transfer-dom>
        <alert v-model="show"  @on-show="onShow" @on-hide="onHide"></alert>
      </div>

    </group>


  </div>

</template>

<script>
  import Vue from 'vue'
  import { Group , XInput, XButton, Alert, TransferDomDirective as TransferDom } from 'vux';
  import {AlertPlugin,LoadingPlugin,ConfirmPlugin,ToastPlugin} from 'vux';
  import axios from 'axios';
  import API from './../../api.js';

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
       inputText: {
         name: '',
         password:''
       }
     }
    },
    mounted () {
      console.log(this.$refs._group.$children);
    },
    methods: {
      login: function(){

        this.$refs._group.$children.map((child, index) => {
          console.log(child.name);
        })
        console.log(this.inputText['name']);

        if(this._validate()){
          return;
        }

        const params = this._getFormParams();

        axios.post(API.USER.LOGIN, params)
          .then(function(res){

          })
          .catch(() => {
            this.$vux.alert.show({
            title: "提示",
            content: "用户名或密码错误"
          });
          })


      },

      _validate: function(){
        const arr = this.$refs._group.$children;
        for(var i in arr){
          if(!arr[i].value){
            return false;
          }
        }
        return true;
      },

      _getFormParams: function(){
        const arr = this.$refs._group.$children;
        let obj ={};
        arr.map((child) => {
          obj[child.name] = obj[child.value];
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
