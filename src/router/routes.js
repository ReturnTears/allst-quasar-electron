
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/quasar',
    component: () => import('pages/view/docs.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  }
]

export default routes
