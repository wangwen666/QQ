<template>
    <div class="container">
      <div class="top-bar">
        <img class="avatar" :src="Img" alt="头像"  @click="showUser" >
        <search class="search"  ref="search"></search>

        <popover placement="bottom" >
          <div slot="content">
            <p @click="createQun">
              <i class="iconfont icon-pinglun-"></i>
              &nbsp;创建群聊
            </p>
            <p @click="addFriend">
              <i class="iconfont icon-tianjiahaoyou-"></i>
              &nbsp;加好友/群
            </p>
            <p @click="scan">
              <i class="iconfont icon-saoyisao"></i>
              &nbsp;扫一扫
            </p>
            <p @click="faceToFace">
              <i class="iconfont icon-shouqi-"></i>
              &nbsp;面对面快传
            </p>
            <p @click="payMoney">
              <i class="iconfont icon-xuanzhongzhuangtai-"></i>
              &nbsp;收付款
            </p>
          </div>
          <a>点击</a>
        </popover>
      </div>

      <div v-for="item in items">

        <img src="item.src">
        <div>

          <div>
            <p></p>
            <p></p>
          </div>

          <div>

          </div>
        </div>

      </div>


      <div v-transfer-dom>
        <popup v-model="isShowUser" position="left">
          <div style="width:200px;">
            <span>111</span>
          </div>
        </popup>
      </div>

      <!--创建群聊-->
      <div v-transfer-dom>
        <popup v-model="showCreateQun" height="100%">
          <div @click="showCreateQun = false" class="popup1">
            111
          </div>
        </popup>
      </div>

      <div v-for="c in cc" style="height: 100px">
        c.name
      </div>




    </div>
</template>
<script>

  import Vue from 'vue';
  import { TransferDom, Search, Group, Cell, XButton, Popup, Popover } from 'vux'

  export default {
    name: "index",
    directives: {
      TransferDom
    },
    components: {
      Search,
      Group,
      Cell,
      XButton,
      Popup,
      Popover
    },
    data: function (){
      return {
        items: [],
        isShowUser: false,
        showCreateQun: false,
        Img: require('./../../../static/QQ.png'),
        cc: [
          {name:1},
          {name:11},
          {name:111},
          {name:1111},
          {name:111},
          {name:111},
          {name:111},
          {name:1},
          {name:11},
          {name:111},
          {name:1},
          {name:111},
          {name:1},
          {name:1},
          {name:11},
          {name:1},
          {name:1},
          {name:1},
        ]

      }
    },
    methods: {
      showUser(){
        this.isShowUser = true
      },
      createQun() {
        console.log(123123);
        this.showCreateQun = true;
      },
      addFriend() {

      },
      scan() {

      },
      faceToFace() {

      },
      payMoney() {

      }
    }
  };
</script>

<style lang="less">
  #app {
    margin-top: 0;
  }
  .container {
    background-color: #cccccc;
  }
  .top-bar{
    width: 100%;
    display: flex;
    align-items:center;
    background-color: #6691f5;
    position: fixed;
    top: 0
  }
  .avatar {
    /*width: 20px;*/
    height: 25px;
    vertical-align: middle;
    border-radius: 50%;
    border: 1px solid #fff;
    background-color: white;
    margin-left: 8px;

  }
  .search {

  }

  .vux-popover {
    width: 160px !important;
    left: 210px !important;
    p{
      height: 30px;
      line-height: 1.4;
      font-size: 16px;
      text-indent:20px;
      .iconfont {
        font-size: 20px;
      }
    }
  }

  .vux-popover-arrow-up {
    border-bottom: 5px solid white !important;
    left: 90% !important;

  }

  .add{
    width: 30px;
    height: 25px;
    vertical-align: middle;
    border-radius: 50%;
    border: 1px solid #fff;
    background-color: white;
  }

  .weui-search-bar{
    background-color: transparent !important;
  }
  .weui-search-bar:before {
    border-top: none !important;
  }
  .weui-search-bar:after {
    border-bottom: none !important;
  }

  .vux-popover {
    background-color: white !important;
    color: black !important;
    width: 300px;
  }


</style>
