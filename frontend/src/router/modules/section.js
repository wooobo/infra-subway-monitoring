const sectionRoutes = [
  {
    path: '/sections',
    component: () => import(/* webpackChunkName: "SectionPage" */ '@/views/section/SectionPage')
  }
]
export default sectionRoutes
