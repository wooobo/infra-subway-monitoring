const mainRoutes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "MainPage" */ '@/views/main/MainPage')
  }
]
export default mainRoutes
