import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/components/login'], resolve)

    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/login'], resolve)

    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/components/index'], resolve)
    },
    {
      path: '/brief',
      name: 'brief',
      component: resolve => require(['@/components/brief'], resolve)
    },
    {
      path: '/personalInformation',
      name: 'personalInformation',
      component: resolve => require(['@/components/account/personalInformation'], resolve)
    }, {
      path: '/changePassword',
      name: 'changePassword',
      component: resolve => require(['@/components/account/changePassword'], resolve)
    },
    {
      path: '/projectWarehouse',
      name: 'projectWarehouse',
      component: resolve => require(['@/components/userInfo/projectWarehouse'], resolve)
    },
    {
      path: '/modifyAvatar',
      name: 'modifyAvatar',
      component: resolve => require(['@/components/userInfo/modifyAvatar'], resolve)
    }, {
      path: '/richText',
      name: 'richText',
      component: resolve => require(['@/components/index'], resolve)
    }, {
      path: '/exportForm',
      name: 'exportForm',
      component: resolve => require(['@/components/table/exportForm'], resolve)
    },{
      path: '/uploadForm',
      name: 'uploadForm',
      component: resolve => require(['@/components/table/uploadForm'], resolve)
    },{
      path: '/count',
      name: 'count',
      component: resolve => require(['@/components/echarts/count'], resolve)
    },{
      path: '/Gallery',
      name: 'Gallery',
      component: resolve => require(['@/components/echarts/Gallery'], resolve)
    },{
      path: '/treeShape',
      name: 'treeShape',
      component: resolve => require(['@/components/module/treeShape'], resolve)
    },{
      path: '/anchor',
      name: 'anchor',
      component: resolve => require(['@/components/module/anchor'], resolve)
    }, {
      path: '/timeComponent',
      name: 'timeComponent',
      component: resolve => require(['@/components/module/timeComponent'], resolve)
    }, {
      path: '/code',
      name: 'code',
      component: resolve => require(['@/components/module/code'], resolve)
    },
  ]
});

routes.beforeEach((to, form, next) => {
  console.log("进入路由守卫");
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  next();
});


export default routes
