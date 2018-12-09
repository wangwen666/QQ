<template>
    <div>
      <div>
        <img alt="头像">
        <search style="display: inline-block; width: 70%"
          @result-click="resultClick"
          @on-change="getResult"
          :results="results"
          v-model="value"
          position="absolute"
          auto-scroll-to-top
          top="46px"
          @on-focus="onFocus"
          @on-cancel="onCancel"
          @on-submit="onSubmit"
          ref="search"></search>
          <x-icon type="ios-plus" size="30"></x-icon>
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



    </div>
</template>
<script>

  import Vue from 'vue';
  import { Search, Group, Cell, XButton } from 'vux'

  export default {
    name: "index",
    components: {
      Search,
      Group,
      Cell,
      XButton
    },
    data: function (){
      return {
        items: []
      }
    }
  };
</script>

<style>
</style>
