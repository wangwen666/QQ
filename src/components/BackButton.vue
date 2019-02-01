<template>

  <div class="back">
    <span @click="onClick">返回</span>

  </div>

</template>

<script>
    export default {
      name: "back-button",
      props: {
        Group: {
          type: Object
        },
        onClick: {
          type: Function
        }
      },
    }
</script>

<style scoped>

</style>
