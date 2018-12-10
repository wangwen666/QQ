<template>
    <div>
      <div>
        <tab :line-width=2 active-color='#fc378c' v-model="index">
          <tab-item class="vux-center" :selected="index === 0" v-for="(item, index) in list"
                    @click="index = item" :key="index">
            {{item}}
          </tab-item>
        </tab>
        <swiper  height="100px" :show-dots="false">
          <swiper-item v-for="(item, index) in list" :key="index">
            <div class="tab-swiper vux-center">{{item}} Container</div>
          </swiper-item>
        </swiper>
      </div>

    </div>
</template>
<script>

  import Vue from 'vue';
  import { Tab, TabItem, Swiper, SwiperItem } from 'vux'

  const list = () => ['好友', '群聊', '设备', '通讯录', '设备'];
  const list1 = () => [{
    sum: 10,
    inline: 5,
    titie: '特别关心'
  }, {
    sum: 11,
    inline: 5,
    titie: '我的好友'
  }, {
    sum: 11,
    inline: 5,
    titie: '朋友'
  }, {
    sum: 11,
    inline: 5,
    titie: '家人'
  }];



  export default {
    name: 'Contact',
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem
    },
    data: function () {
      return {
        list: list(),
        list1: list1(),
        index: 0
      }
    }
  };
</script>

<style>
</style>
