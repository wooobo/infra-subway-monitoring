const lineRoutes = [
  {
    path: '/lines',
    component: () => import(/* webpackChunkName: "LinePage" */ '@/views/line/LinePage')
  }
]
export default lineRoutes
