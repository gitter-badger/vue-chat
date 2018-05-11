import Vue from 'vue'
import Router from 'vue-router'

import index from '../view/index';
import login from '../view/login';
import test from '../view/test/test';
import echart from '../view/myfree/echart';
import chathub from '../view/lab/chathub';
import video from '../view/video/video';
import {Toast} from 'vant';

import store from '../store';


Vue.use(Router);


const router = new Router({
  routes: [
    //设置自动跳转，地址为空时自动跳转home页面
    {
      path: '',
      redirect: '/login'
    },
    //
    {
      path: "/index",
      name: 'index',
      component: index,
      children: [
        {path: 'echart', component: echart, name: 'echart1'},
        {path: 'video', component: video, name: 'video'},
      ]
    },
    {
      path: '/chathub',
      component: chathub,
      name: 'chathub'
    },
    //欢迎页
    {
      path: '/login',
      component: login,
      name: 'login'
    },
    //测试页面
    {
      path: '/test',
      component: test
    }
  ]
});

/**
 * 导航守卫
 */
router.beforeEach((to, from, next) => {
  const nextRouter = ['index', 'chathub'];
  next();

});
router.afterEach((to, from) => {
  // Toast('切换页面了'+ Math.random().toFixed(2));
  Toast(store.getters.showMyInfo.username);

});
export default router;
