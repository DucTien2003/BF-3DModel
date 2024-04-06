import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      layout: 'default-layout',
    },
  },
  {
    path: '/news-feed',
    name: 'news-feed',
    component: () =>
      import(/* webpackChunkName: "news-feed" */ '../views/NewsFeed.vue'),
    meta: {
      layout: 'default-layout',
    },
  },
  {
    path: '/suggestions',
    name: 'suggestions',
    component: () =>
      import(/* webpackChunkName: "suggestions" */ '../views/NewsFeed.vue'),
    meta: {
      layout: 'default-layout',
    },
  },
  {
    path: '/top',
    name: 'top',
    component: () =>
      import(/* webpackChunkName: "top" */ '../views/NewsFeed.vue'),
    meta: {
      layout: 'default-layout',
    },
  },
  {
    path: '/collections',
    name: 'collections',
    component: () =>
      import(/* webpackChunkName: "collections" */ '../views/NewsFeed.vue'),
    meta: {
      layout: 'default-layout',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/auth/Login.vue'),
    meta: {
      layout: 'auth-layout',
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/auth/Register.vue'),
    meta: {
      layout: 'auth-layout',
    },
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () =>
      import(
        /* webpackChunkName: "forgot-password" */ '../views/auth/ForgotPassword.vue'
      ),
    meta: {
      layout: 'auth-layout',
    },
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () =>
      import(
        /* webpackChunkName: "reset-password'," */ '../views/auth/ResetPassword.vue'
      ),
    meta: {
      layout: 'auth-layout',
    },
  },
  {
    path: '/upload',
    name: 'upload',
    component: () =>
      import(/* webpackChunkName: "upload'," */ '../views/Upload.vue'),
    meta: {
      layout: 'base-layout',
    },
  },
  //   {
  //     path: '/home',
  //     name: 'home',
  //     component: () =>
  //       import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
  //     meta: {
  //       layout: 'default-layout',
  //     },
  //     children: [
  //       {
  //         path: '/list',
  //         name: 'entry-list',
  //         component: () =>
  //           import(
  //             /* webpackChunkName: "entry-list" */ '../components/entry/EntryList.vue'
  //           ),
  //         meta: {
  //           layout: 'default-layout',
  //         },
  //       },
  //       {
  //         path: '/entry-detail',
  //         name: 'entry-detail',
  //         component: () =>
  //           import(
  //             /* webpackChunkName: "entry-detail" */ '../components/entry/EntryDetail.vue'
  //           ),
  //         meta: {
  //           layout: 'default-layout',
  //         },
  //       },
  //     ],
  //   },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

// router.beforeEach((to, _, next) => {
//   if (to.path === "/") {
//     next("/login");
//   } else {
//     next();
//   }
// });

export default router;
