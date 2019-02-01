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


      <div v-transfer-dom class="leftFloat">
        <popup v-model="isShowUser" position="left">
          <div style="width:280px;">
            <div class="person-title">

              <i class="iconfont icon-erweima qrCode"></i>

              <div class="contents">
                <img :src="Img" alt="头像"  >
                <span>昵称</span>
                <p></p>

                <span class="edit">编辑个性签名 <i class="iconfont icon-shuru"></i> </span>

              </div>


            </div>

            <div class="person-list">

              <p @click="createQun">
                <i class="iconfont icon-huangguan"></i>了解会员特权
              </p>
              <p @click="addFriend">
                <i class="iconfont icon-qianbao"></i>QQ钱包
              </p>
              <p @click="scan">
                <i class="iconfont icon-zhuti_tiaosepan"></i>个性装扮
              </p>
              <p @click="faceToFace">
                <i class="iconfont icon-shoucang1"></i>我的收藏
              </p>
              <p @click="payMoney">
                <i class="iconfont icon-xiangce-xianxing"></i>我的相册
              </p>
              <p @click="payMoney">
                <i class="iconfont icon-wenjian1"></i>我的文件
              </p>
              <p @click="payMoney">
                <i class="iconfont icon-liuliang"></i>免流量特权
              </p>

            </div>

            <div class="person-footer">


              <p @click="payMoney">
                <i class="iconfont icon-shezhi"></i>
                <span>设置</span>
              </p>

              <p @click="payMoney">
                <i class="iconfont icon-yejianmoshi"></i>
                <span>夜间</span>
              </p>

              <p @click="payMoney">
                <i class="iconfont icon-liuliang"></i>
                <span>杭州</span>
              </p>


            </div>

          </div>
        </popup>
      </div>

      <div v-transfer-dom>
        <!--创建群聊-->
        <popup v-model="showCreateQun" height="100%">
          <div @click="showCreateQun = false" class="popup1">
            111
          </div>
        </popup>

        <!--扫一扫-->
        <!--<popup v-model="showCreateQun" height="100%">-->
          <!--<div @click="showCreateQun = false" class="popup1">-->
            <!--111-->
          <!--</div>-->
        <!--</popup>-->

      </div>

      <div v-for="c in cc" style="height: 100px">
        c.name
      </div>




    </div>
</template>
<script>

  import Vue from 'vue';
  import { TransferDom, Search, Group, Cell, XButton, Popup, Popover } from 'vux';
  import API from './../../configs/api.js';


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
          {name:1}
        ]

      }
    },
    methods: {
      showUser(){

        this.isShowUser = true

        this.$axios.get(API.USER.GET_INFO)
          .then((res) => {

            console.log(res);


          })
          .catch(() => {

          })



      },
      createQun() {
        console.log(123123);
        this.showCreateQun = true;
      },
      addFriend() {

      },
      scan() {

        let exArray = []; //存储设备源ID


        // if (window.MediaStreamTrack) {
        //   MediaStreamTrack.getSources(function (sources) {
        //     var videoSources = sources.filter(function (source) {
        //       return source.kind === 'video';
        //     });
        //     console.log('got video sources', videoSources);
        //   });
        // }
        //
        //
        // if (navigator.mediaDevices) {
        //   navigator.mediaDevices.enumerateDevices()
        //     .then(function (sources) {
        //       var videoSources = sources.filter(function (source) {
        //         return source.kind === 'video';
        //       });
        //       console.log('got video sources', videoSources);
        //     })
        // }


        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
          }).then(function (stream) {
            console.log(stream);
            MediaStreamTrack=typeof stream.stop==='function'?stream:stream.getTracks()[1];
            video.src=(window.URL).createObjectURL(stream);
            video.play();
          }).catch(function(err){
            console.log(err);
          });
        }else if(navigator.getMedia){
          // navigator.getMedia({
          //   video: true
          // }).then(function (stream) {
          //   console.log(stream);
          //   MediaStreamTrack=stream.getTracks()[1];
          //   video.src=(window.webkitURL).createObjectURL(stream);
          //   video.play();
          // }).catch(function(err){
          //   console.log(err);
          // });
        }

        // MediaStreamTrack.getSources(function (sourceInfos) {
        //   for (let i = 0; i !== sourceInfos.length; ++i) {
        //     let sourceInfo = sourceInfos[i];
        //     //这里会遍历audio,video，所以要加以区分
        //     if (sourceInfo.kind === 'video') {
        //       exArray.push(sourceInfo.id);
        //     }
        //   }
        // });

        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

        if (navigator.getUserMedia) {
          navigator.getUserMedia({
              'video': {
                'optional': [{
                  'sourceId': exArray[0] //0为前置摄像头，1为后置
                }]
              },
              'audio': true
            },
            (stream) => {
              //alert('Succeed to get media!');
              if (video.mozSrcObject !== undefined) {
                //Firefox中，video.mozSrcObject最初为null，而不是未定义的，我们可以靠这个来检测Firefox的支持
                video.mozSrcObject = stream;
              }},
            () => {}); //success是获取成功的回调函数
        }
        else {
          alert('Native device media streaming (getUserMedia) not supported in this browser.');
        }

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

  .leftFloat {
    .person-title {
      height: 200px;
      .qrCode {
        position: absolute;
        right: 20px;
        top: 10px;
        font-size: 50px;
      }
      .contents {
        padding-top: 100px;
        padding-left: 25px;
        font-size: 30px;
        img {
          height: 50px;
          vertical-align: middle;
          border-radius: 50%;
          border: 1px solid #fff;
          background-color: white;
          margin-left: 8px;
        }

        .edit {
          font-size: 20px;
        }

      }
    }
    .person-list {
      display: flex;
      width: 100%;
      height: 300px;
      flex-wrap: wrap;
      margin-top: 50px;
      p {
        width: 100%;
        display: flex; // 主要是这两行代码
        align-items:center; // 主要是这两行代码
        i{
          padding: 0 5px;
          font-size: 25px;
        }

      }
    }

    .person-footer {
      display: flex;
      margin-top: 50px;
      p {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        i{
          width: 100%;
        }
        span{
          width: 100%;
        }

      }

    }
  }


</style>
