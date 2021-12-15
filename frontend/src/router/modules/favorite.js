const favoriteRoutes = [
  {
    path: '/favorites',
    component: () => import(/* webpackChunkName: "Favorites" */ '@/views/favorite/Favorites')
  }
]
export default favoriteRoutes
