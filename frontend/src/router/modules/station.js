const stationRoutes = [
  {
    path: '/stations',
    component: () => import(/* webpackChunkName: "StationPage" */ '@/views/station/StationPage')
  }
]
export default stationRoutes
