<template>
  <div>

    <group>
      <cell :class="{cellActive: isActive}" :title="Group.gname" @click.native="showGroupPerson(Group.gid)">
        <span>4/{{Group.length}}</span>
      </cell>

      <template v-if="showContent">
        <cell-box class="sub-item" v-for="(item, index) in groupDetail" :key="index"
                  @click.native="showPersonMsg(item.uid)">
          <img :src="item.src"/>
          <div>
            <p>{{item.name}}</p>
            <p>{{item.description}}</p>
          </div>
        </cell-box>
      </template>
    </group>

    <div v-transfer-dom>
      <popup v-model="contactDetailShow" position="right" width="100%">
        <div class="person-detail">

          <div class="person-detail-pic">

            <img :src="Img" alt="头像">

          </div>

          <div class="person-detail-top">
            <span @click="contactDetailShow = false">返回</span>
          </div>

          <div class="person-detail-content">
            <div class="title">
              <h3>备注</h3>
              <span>签名</span>
            </div>

            <div class="list">
              <p>
                <i class="iconfont icon-qq"></i>华南(293939238)
              </p>

              <p>
                <i class="iconfont icon-character"></i>男 28岁
              </p>

              <p>
                <i class="iconfont icon-goumai"></i>浙工大 计算机/互联网/通信
              </p>
              <p>
                <i class="iconfont icon-zhishi"></i>浙江工业大学
              </p>

              <p style="color: #908c8c">
                <i class="iconfont icon-zhishi" style="visibility: hidden"></i>详细资料
              </p>


              <p>
                <i class="iconfont icon-huangguan"></i>浙江工业大学
              </p>
              <p>
                <i class="iconfont icon-huangguan"></i>浙江工业大学
              </p>
              <p>
                <i class="iconfont icon-kongjian"></i>他的空间
              </p>


            </div>


          </div>
          <div class="person-detail-footer">

            <x-button mini @click.native="takePhone">QQ电话
            </x-button>

            <x-button mini style="color:white; background-color: cornflowerblue" @click.native="sendMessage">发消息
            </x-button>

          </div>


        </div>
      </popup>

      <popup v-model="contactWindowShow" position="right" width="100%">
        <div class="position-horizontal-demo">

          <div>
            <span @click="contactWindowShow = false"> 返回 </span>
            <p>title</p>
            <p>span</p>
          </div>


          <div v-for="(dia, index) in dialogueArray" class="dialogue" :key="index">

            <div v-if="dia.direction === 0" style="float: left; clear: both">
              <img class="avatar" :src="Img" alt="头像">
              <div class="dialogue-left"
                   style="display: inline-block; max-width: 100px; background-color: #04be02; word-wrap:break-word">
                {{dia.mes}}
              </div>
              <div style="width: 10px; height: 10px"></div>
            </div>


            <div v-if="dia.direction === 1" style="float: right; display: block; clear: both">
              <img class="avatar" :src="Img" alt="头像" style="float: right">
              <div class="dialogue-right"
                   style="display: inline-block; max-width: 200px; background-color: #04be02; word-wrap:break-word">
                {{dia.mes}}
              </div>
              <div style="width: 10px; height: 10px"></div>

            </div>

          </div>

          <group style="position: fixed; bottom: 0; width: 100%">
            <x-input @on-enter="send"></x-input>
          </group>

        </div>

      </popup>


    </div>

  </div>


</template>

<script>
  import {TransferDom, Cell, Group, CellBox, Popup, XButton, XInput} from 'vux'
  import API from './../configs/api.js';
  import STATUS from './../configs/status.js';
  import WebSocket from './../lib/websocket.js';

  export default {
    name: "pull-down",
    directives: {
      TransferDom
    },
    components: {
      Cell,
      Group,
      CellBox,
      Popup,
      XButton,
      XInput
    },
    props: {
      Group: {
        type: Object
      },
      Url: {
        type: String
      }
    },
    data() {
      return {
        detailShow: false,
        isActive: false,
        showContent: false,
        contactDetailShow: false,
        contactWindowShow: false,
        Img: require('./../../static/QQ.png'),
        backgroundImg: require('./../../static/background.jpg'),
        groupDetail: [
          {title: 1, description: 11},
          {title: 2, description: 12},
          {title: 3, description: 1212},
          {title: 4, description: 123}
        ],
        dialogueArray: []
      };
    },
    methods: {
      showDetail() {
        this.detailShow = true;
      },

      hiddenDetail() {
        this.detailShow = false;
      },

      showGroupPerson(id) {

        this.isActive = !this.isActive;
        this.showContent = !this.showContent;

        if (this.isActive) {

          this.$axios.post(API.CONTACT.GROUP_DETAIL, {id})
            .then((res) => {

            })
            .catch((res) => {

            })

        }

      },
      showPersonMsg() {
        this.contactDetailShow = true;
      },
      sendMessage(id) {

        const arr = [{
          direction: 0,
          mes: 123
        }, {
          direction: 1,
          mes: 'askdcsljadfsdlfjlsdjflasjdljasdsjacfldsj;l'
        }, {
          direction: 0,
          mes: 123
        }, {
          direction: 0,
          mes: 'slkdsa'
        }, {
          direction: 1,
          mes: 123
        }, {
          direction: 1,
          mes: 123
        }, {
          direction: 0,
          mes: 'slclsd'
        }, {
          direction: 1,
          mes: 'sdkkasd'
        }];

        localStorage.setItem('user', JSON.stringify(arr));

        // const usr = localStorage.getItem('user');

        this.dialogueArray = JSON.parse(localStorage.getItem('user'));

        this.contactDetailShow = false;
        this.contactWindowShow = true;
      },
      send(value, $event) {
        const ws = WebSocket('ws://127.0.0.1:8001/ws');
        ws.onopen = function () {
          // 使用 send() 方法发送数据
          ws.send('{\"code\":\"100001\",\"fr\":' + '\"' + value + '\"' + '}');
          // ws.send({
          //   code: "100001",
          //   fr: value
          // });
          console.log('发送数据');
        };
      }
    },
    created() {
    }
  }
</script>

<style lang="less">

  .vux-label:before {
    content: " ";
    display: inline-block;
    height: 6px;
    width: 6px;
    border-width: 2px 2px 0 0;
    border-color: #C8C8CD;
    border-style: solid;
    -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    position: relative;
    top: 50%;
    margin-top: -4px;
    right: 10px;
  }

  .cellActive .vux-label:after {
    transform: matrix(.71, .71, -.71, .71, 0, 0) rotate(90deg);
  }

  .dialogue {
    background-color: red;
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

  .person-detail {
    height: 100%;
    .person-detail-pic {
      position: absolute;
      top: 30%;
      transform: translate(-50%, -60%);
      left: 50%;
      width: 100px;
      img {
        width: 100%;
        vertical-align: middle;
        border-radius: 50%;
        border: 1px solid #fff;
        background-color: white;
      }
    }
    .person-detail-top {
      height: 30%;
      background-color: #04be02;
      background-image: url("./../../static/background.jpg");
      span {
        color: white;
        font-size: 22px;
        display: block;
        padding: 12px;
      }

      span:before {
        content: " ";
        display: inline-block;
        height: 12px;
        width: 12px;
        border-width: 0 0 3px 3px;
        border-color: #ffffff;
        border-style: solid;
        -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: relative;

      }
    }
    .person-detail-content {
      height: 70%;
      .title {
        margin-top: 60px;
        text-align: center;
      }
      .list {
        padding: 10px 0 0 10px;
        p {
          width: 100%;
          height: 33px;
          display: flex; // 主要是这两行代码
          align-items: center; // 主要是这两行代码
          i {
            padding: 0 15px 0 10px;
            font-size: 25px;
          }

        }
      }
    }

    .person-detail-footer {
      bottom: 0;
      width: 100%;
      height: 70px;
      position: fixed;
      border: 1px solid #cac8c8;
      background-color: #f7ecec;
      display: flex;
      align-items: center;
      button {
        height: 40px;
        margin-top: 0;
        width: 120px;
      }

    }
  }

</style>



