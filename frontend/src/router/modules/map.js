const mapRoutes = [
  {
    path: '/maps',
    component: () => import(/* webpackChunkName: "MapPage" */ '@/views/map/MapPage')
  }
]
export default mapRoutes
