const authRoutes = [
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "LoginPage" */ '@/views/auth/LoginPage')
  },
  {
    path: '/join',
    component: () => import(/* webpackChunkName: "JoinPage" */ '@/views/auth/JoinPage')
  },
  {
    path: '/mypage',
    component: () => import(/* webpackChunkName: "Mypage" */ '@/views/auth/Mypage')
  },
  {
    path: '/mypage/edit',
    component: () => import(/* webpackChunkName: "MypageEdit" */ '@/views/auth/MypageEdit')
  }
]
export default authRoutes
