<template>

</template>

<script>

  /**
   * 服务器地址
   */
  const SERVER_ROOT = "121.196.211.18:8080/chathub";
  const SERVER_URI = "http://" + SERVER_ROOT;
  const WS_URI = "WS://" + SERVER_ROOT;

  const env = {
    SERVER_URI,
    WS_URI
  };

  /*
   * 全局变量文件
   */
  export default {
    env
  }

</script>

<style scoped>

</style>
