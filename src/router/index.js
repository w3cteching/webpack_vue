import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//导入组件
import Home from '../pages/home.vue'
import About from '../pages/about.vue'

//配置路由
const routes = [
    {path:'/',redirect: '/home'},
    {path:'/home',component:Home,name:'home'},
    {path:'/about',component:About,name:'about'},

]


//实例化路由
const router = new VueRouter({
    routes
})


//导出路由

export default router;