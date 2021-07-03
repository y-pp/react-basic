/*
 * @Description: 
 * @Date: 2021-07-03 15:05:32
 * @Author: 楊皮皮
 */
export const constantRoutes = [
    // {
    //   path: '/',
    // //   component: Layout,
    //   hidden: true,
    //   children: [
    //     {
    //       path: '/redirect/:path(.*)',
    //     //   component: () => import('@/views/redirect/index')
    //     }
    //   ]
    // },
    {
      path: '/login',
    //   component: () => import('@/views/login/index'),
      hidden: true
    },
    {
      path: '/home',
    //   component: () => import('@/views/login/auth-redirect'),
      hidden: true
    },
    // {
    //   path: '/',
    // //   component: Layout,
    //   redirect: '/welcome',
    //   children: [
    //     {
    //       path: 'welcome',
    //     //   component: () => import('@/views/welcome/index'),
    //       name: 'welcome',
    //     //   meta: { title: '首页(开发版)', icon: 'el-icon-s-home', affix: false, breadcrumb: false }
    //     }
    //   ],
    //   hidden: false
    // }
  ]