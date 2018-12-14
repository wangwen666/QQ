<template>
    <div>
      <div>
        <tab :scroll-threshold="5" :line-width=2 active-color='#fc378c' v-model="index">
          <tab-item class="vux-center" :selected="index === 0" v-for="(item, index) in list"
                    @click="index = item" :key="index">
            {{item}}
          </tab-item>
        </tab>
        <swiper aspect-ratio=1 v-model="index" :show-dots="false">
          <swiper-item >
            <v-pullDown v-for="(item, index) in group" :key="index" v-bind:Group="item"></v-pullDown>
          </swiper-item>
        </swiper>
      </div>

    </div>
</template>
<script>

  import Vue from 'vue';
  import pullDown from '@/components/pullDown';
  import API from './../../configs/api.js';
  import STATUS from './../../configs/status.js';
  import Axios from 'axios';
  import { Tab, TabItem, Swiper, SwiperItem, Cell, Group, CellBox } from 'vux'

  const list = () => ['好友', '群聊', '设备', '通讯录', '设备'];

  export default {
    name: 'Contact',
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      Group,
      Cell,
      CellBox,
      'v-pullDown': pullDown
    },
    data: function () {
      return {
        list: list(),
        group: [],
        index: 0
      }
    },
    mounted() {
      Axios.post( API.CONTACT.GET_GROUP, {userId: 'wangwen111'})
        .then((res) => {
          res = res.data;
          if(res.code === STATUS.CODE.S200) {
            this.group = res.data;
          } else {

          }
        })
    }
  };
</script>

<style>
  .weui-cells {
    margin-top: 0 !important;
  }


</style>
