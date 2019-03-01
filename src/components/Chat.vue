<template>

  <div class="dialogue" :Pid="Pid">

    <div class="header">
      <span @click="backFun"></span>
      <div class="name">
        <p>PersonName</p>
        <p>在线</p>
      </div>
      <div class="">11221</div>
    </div>


    <div v-for="(dia, index) in Msg" class="dialogue" :key="index">

      <div v-if="dia.direction === 0" class="left">
        <img class="avatar" :src="Img" alt="头像">
        <div class="msg">
          {{dia.mes}}
        </div>
        <div style="width: 10px; height: 10px"></div>
      </div>


      <div v-if="dia.direction === 1" class="right">
        <img class="avatar" :src="Img" alt="头像" style="float: right">
        <div class="msg sending" :class="hasSend">
          {{dia.mes}}
        </div>
        <div style="width: 10px; height: 10px"></div>

      </div>

    </div>

    <group class="sendMsg" ref="groups" >
      <x-input @on-enter="send"></x-input>
    </group>

  </div>

</template>

<script>
    import {XInput, Group} from 'vux'
    export default {
      name: "chat",
      components: {
        XInput,
        Group
      },
      props: {
        Msg: {
          type: Array
        },

        PersonName: {
          type: String
        },
        Pid: {
          type: Number
        },
        backFun: {
          type: Function
        },

      },
      data() {
        return {
          Img: require('./../../static/QQ.png'),
          hasSend: 'hasSend'
        }

      },
      methods: {

        send(value, $event) {

          let id;

          if (value == '123') {
            id = 1;
          } else {
            id = 2;
          }

          const url = 'ws://127.0.0.1:8001/' + 1;

          // const ws = WebSocket(url);

          const message = {
            pid: this.props.Pid, // 来自谁
            sid: 2, // 发给谁
            msg: value,
            name: '123123'

          }

          this.ws.send(JSON.stringify(message));


          // this.ws.send('{"code":"100001", "id": ' + id + ',"fr":' + '"' + value + '"' + '}');


          // ws.onopen = function () {
          //
          //   // 使用 send() 方法发送数据 只能发送字符串 或者二进制字节码
          //  ws.send('{"code":"100001", "id": ' + id + ',"fr":' + '"' + value + '"' + '}');
          //
          //   console.log('发送数据');
          //
          // };

          this.$refs.groups.$children.forEach((child) => {
            child.reset()
          });

          this.props.Msg.push({
            direction: 1,
            mes: value
          });

        },

      }
    }
</script>

<style lang="less" scoped>

  .dialogue {
    background-color: white;

    .header {

      display: flex;
      padding: 12px;
      span {
        color: black;
        font-size: 22px;
        display: block;
        width: 20%
      }

      span:before {
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

      .name {
        width: 60%;
        text-align: center;

      }

    }

    .left {
      float: left;
      clear: both;

      .msg {
        display: inline-block;
        max-width: 100px;
        color: black;
        background-color: #e0d0d0;
        padding: 5px;
        word-wrap:break-word
      }

    }

    .right {
      float: right;
      display: block;
      clear: both;
      .msg {
        display: inline-block;
        max-width: 100px;
        color: black;
        background-color: #bee4ff;
        padding: 5px;
        word-wrap:break-word;
      }

    }

    position: relative;
    .sending{
      /*color: #10aeff*/

    }
    .sending:before {
      content:'';
      /*background-image: url('./../../static/loading.gif');*/
      background-size:10px 20px;
      width:10px;
      height:20px;
      position: absolute;
      z-index: 100;
      top: -10px;

    }

    .fail {

    }
    .sendMsg {
      position: fixed;
      bottom: 0;
      width: 100%;
      background-color: #cccccc;
    }
  }

</style>
