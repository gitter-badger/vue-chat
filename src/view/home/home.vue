<template>
  <div>
    <home-header :homeInfo="homeInfo"></home-header>
    <van-tabs class="home-tabs" v-model="active" @click="changeTab" swipeable sticky>
      <van-tab class="keling" v-for="obj in tabsArr" :title="obj.title" :key="obj.id">
      </van-tab>
    </van-tabs>
    <!--SIGN: 把路由放在这里，而不是放在van-tabs方便些(主要是放van-tab里组件样式不好写)-->
    <router-view></router-view>
  </div>
</template>

<script>

  import header from './homeheader'

  export default {
    name: "message",
    components:{
      'home-header': header
    },
    data() {
      return {
        homeInfo: {
          avator: "https://pic-1253206304.cos.ap-shanghai.myqcloud.com/v2-56f6752d75c79ebe836149de4550282a_hd.jpg",
          sex: 1,
          nickname: "不明身份的大魔王",
          money: 100,
          zan: 100
        },
        active: 1,
        tabsArr:[{id: '1', title: "直播",tabName: "live"},{id:'2', title: "推荐", tabName: "recommend"}, {id:'3', title: "排行榜", tabName: "rank"}]
      }
    },
    watch:{
      //检测激活的标签
      active (val, oldVal) {
        let tabName = this.tabsArr[val]['tabName'];
        this.$router.push({name: tabName});

      }
    },
    mounted(){
      let tabName = this.tabsArr[1]['tabName'];
      this.$router.push({name: tabName});

    },
    methods:{
      /*切换页面*/
      changeTab(index, title) {
        let tabName = this.tabsArr[index]['tabName'];
        this.$router.push({name: tabName});
      }
    }

    }
</script>

<style scoped>
  .home-tabs{
    position: fixed;
    z-index: -1;
    width: 100%;
    top: 70px;
    left: 0;
  }

</style>
