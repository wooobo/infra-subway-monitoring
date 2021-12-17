const pathRoutes = [
  {
    path: '/path',
    component: () => import(/* webpackChunkName: "PathPage" */ '@/views/path/PathPage')
  }
]
export default pathRoutes
