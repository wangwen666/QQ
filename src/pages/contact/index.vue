<template>
    <div>
      <div>
        <tab :scroll-threshold="5" :line-width=2 active-color='#fc378c' v-model="index">
          <tab-item class="vux-center" :selected="index === 0" v-for="(item, index) in topTab"
                    @click.native="changeTab(index)" :key="index">
            {{item}}
          </tab-item>
        </tab>

        <swiper v-model="index" :show-dots="false">

          <swiper-item key='0'>
            <v-pullDown v-for="(item, index) in friend" :key="index" v-bind:Group="item"></v-pullDown>
          </swiper-item>


          <swiper-item key='1'>
            <v-pullDown v-for="(item, index) in group" :key="index" v-bind:Group="item"></v-pullDown>
          </swiper-item>

          <swiper-item key='2'>
            <!--<v-pullDown v-for="(item, index) in group" :key="index" v-bind:Group="item"></v-pullDown>-->
            <div  class="tab-swiper vux-center">56</div>
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
  import { Tab, TabItem, Swiper, SwiperItem, Cell, Group, CellBox } from 'vux'

  const topTab = () => ['好友', '群聊', '设备', '通讯录', '公众号'];
  const quns = () => ['未命名的群聊', '我创建的群聊', '我管理的群聊', '我加入的群聊'];

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
        topTab: topTab(),

        index: 0,
        friend: [],
        group: [],
        device: [],
        mail: [],
        gongzhonghao: [],

      }
    },
    mounted() {

      // localStorage.user = '';

      this.$axios.get(API.CONTACT.GET_GROUP)
        .then((res) => {
          res = res.data;
          if(res.code === STATUS.CODE.S200) {
            this.friend = res.data;
          } else {

          }
        })
        .catch((err) => {
          console.log(err);
        })
    },
    methods: {

      changeTab (index) {

        let sql = '';

        const arr = [this.friend, this.group, this.device, this.mailList, this.gongzhonghao];


        switch (index) {
          case 1:
            sql = API.CONTACT.GET_QUN;
            break;
          case 2:
            sql = API.CONTACT.GET_DEVICE;
            break;
          case 3:
            sql = API.CONTACT.GET_MAIL_LIST;
            break;
          case 4:
            sql = API.CONTACT.GET_PUBLIC;
            break;
          default:
            sql = API.CONTACT.GET_GROUP;
            break;
        }

        this.$axios.get(sql)
          .then((res) => {
            res = res.data;
            if(res.code === STATUS.CODE.S200) {
              arr[index] = res.data;
            } else {

            }
          })
          .catch((err) => {
            console.log(err);
          })

      }

    }
  };
</script>

<style>
  .weui-cells {
    margin-top: 0 !important;
  }


</style>
