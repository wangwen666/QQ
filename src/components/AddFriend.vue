<template>
    <div>
      <div class="header">
        <div @click="Back()">返回</div>
        <span>添加</span>
      </div>



      <div class="content">

        <tab :scroll-threshold="5" :line-width=2 active-color='#fc378c' v-model="index">
          <tab-item class="vux-center" :selected="index === 0" v-for="(item, index) in lists" @click.native="changeTab(index)" :key="index">
            {{item}}
          </tab-item>
        </tab>

        <swiper v-model="index" :show-dots="false">

          <swiper-item key='0'>



            <!--<x-input placeholder="请输入qq号" v-model="value"></x-input>-->
            <!--<x-button @click.native="search">搜索</x-button>-->
          </swiper-item>


          <swiper-item key='1'>
          </swiper-item>

          <swiper-item key='2'>
            <div  class="tab-swiper vux-center">56</div>
          </swiper-item>

        </swiper>

      </div>

      <!--<search></search>-->




    </div>
</template>

<script>
  import { TransferDom, Search, XInput, Tab, TabItem, Swiper, SwiperItem, Cell, Group, CellBox, XButton } from 'vux';
  import API from './../configs/api.js';
  import STATUS from './../configs/status.js';

  const lists = () => ['找人', '找群', '找公众号'];

  export default {
    name: "add-friend",
    directives: {
      TransferDom
    },
    components: {
      Search,
      XButton,
      XInput,
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      Group,
      Cell,
      CellBox,
    },
    props: {
      Back: {
        type: Function
      }

    },
    data() {
      return {
        lists: lists(),
      }

    },

    methods: {
      changeTab() {

      },

      search() {

      }


    }
  }
</script>

<style lang="less" scoped>
  .header {
    width: 100%;
    height: 50px;
    div{
      position: absolute;
      color: black;
      font-size: 22px;
      display: block;
      padding: 10px;
    }

    div:before {
      content: " ";
      display: inline-block;
      height: 12px;
      width: 12px;
      border-width: 0 0 3px 3px;
      border-color: black;
      border-style: solid;
      -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      position: relative;
    }
    span {
      margin: 0 auto;
      width: 200px;
      text-align: center;
      display: block;
      font-size: 26px;
      line-height: 50px;
    }

  }

</style>
