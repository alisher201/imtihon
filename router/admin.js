export default {
    path: '/admin',
    name: 'admin',
    component: () =>  import('../views/admin/Admin.vue'),
    children: [
      {
        path: "/products",
        name: 'products',
        component: () => import('../views/admin/product.vue')
        
      },
    ]
  }
  