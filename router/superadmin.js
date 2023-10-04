export default{
    path:'/superadmin',
    name: 'superadmin',
    component:() => import('../views/superadmin/superadmin.vue'),
    children:[
     
      {
        path:'/users',
        name: 'users',
        component:() => import('../views/superadmin/users.vue'),
      },
    //   {
    //     path:'/single_product/:id',
    //     name: 'single_product',
    //     mate:{
    //       child:'product_lists',
    //     },
    //     component:()=>import('../views/superAdmin/SingleProduct.vue'),
    //   }
     
    ]
  }

  