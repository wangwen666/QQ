<template>
  <div class="container">
      <div v-for="(item, index) in viewData" :key="index" style="width: 100%; height: 300px;  position: relative;">
        <a :href="item.href" style="width: 100%; height: 100%; position: relative; display: inline-block; overflow: hidden;  text-decoration: none;text-align: center;">
          <img :src="item.src" style="width: 100%; height: 90%">
          <p style="padding-top: 8px">{{item.title}}</p>
        </a>
        <divider></divider>
      </div>
  </div>

</template>

<script>

  import Vue from 'vue';
  import { Card, Divider, Group, Cell, XButton, Popup, Popover } from 'vux';
  import API from './../../configs/api.js';
  import STATUS from './../../configs/status.js';
  import Axios from 'axios';

  export default {
      name: "index",
      components: {
        Card,
        Divider
      },
      data: function () {
        return {
          viewData: []
        }
      },
      mounted() {
        Axios.get(API.VIEW.GET_VIEW)
          .then((res) => {
            this.viewData = res.data;
            console.log(this.viewData[0].href);
          })
      }

    }
</script>

<style scoped>
  #app {
    margin-top: 0;
  }
  .top-bar{
    width: 100%;
    display: flex;
    align-items:center;
    background-color: #6691f5;
    position: fixed;
    top: 0
  }

</style>
