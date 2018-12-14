<template>
  <div>
    <group>
      <cell :class="{cellActive: isActive}" :title="Group.groupName" @click.native="showGroupPerson">
        <span>4/{{Group.friendCount}}</span>
      </cell>

      <template v-if="showContent">
        <cell-box class="sub-item" v-for="(item, index) in groupDetail" :key="index" @click.native="showPersonMsg">
          <img :src="item.src"/>
          <div>
            <p>{{item.title}}</p>
            <p>{{item.description}}</p>
          </div>
        </cell-box>
      </template>
    </group>


    <div v-transfer-dom>
      <popup v-model="contactDetailShow" position="right" width="100%">
        <div class="position-horizontal-demo">
          <span @click="contactDetailShow = false">返回</span>

          <x-button mini
                    @click.native="takePhone">QQ电话
          </x-button>
          <x-button mini style="color:white; background-color: cornflowerblue"
                    @click.native="sendMessage">发消息
          </x-button>

        </div>
      </popup>

      <popup v-model="contactWindowShow" position="right" width="100%">
        <div class="position-horizontal-demo">
          <span @click="contactWindowShow = false"> 返回 </span>
          <group>
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
  import Axios from 'axios';
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
        groupDetail: [
          {title: 1, description: 11},
          {title: 2, description: 12},
          {title: 3, description: 1212},
          {title: 4, description: 123}
        ]
      };
    },
    methods: {
      showDetail() {
        this.detailShow = true;
      },

      hiddenDetail() {
        this.detailShow = false;
      },

      showGroupPerson() {
        this.isActive = !this.isActive;
        this.showContent = !this.showContent;
        Axios.post(API.CONTACT.GROUP_DETAIL, this.Group.userGroupId)
          .then((res) => {

          })
      },
      showPersonMsg() {
        this.contactDetailShow = true;
      },
      sendMessage() {
        this.contactDetailShow = false;
        this.contactWindowShow = true;
      },
      send(value, $event) {
        const ws = WebSocket('ws://127.0.0.1:8081/ws');
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

<style>

  .vux-label:after {
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
    right: 40px;
  }

  .cellActive .vux-label:after {
    transform: matrix(.71, .71, -.71, .71, 0, 0) rotate(90deg);
  }

</style>



