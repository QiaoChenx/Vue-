export default [
    {
        name: 'center',
        path: '/center',
        component: () => import('@/pages/Center'),
        meta: { show: true },
        children: [
            {
                name: 'myorder',
                path: 'myorder',
                component: () => import('@/pages/Center/MyOrder'),
            }
        ],
        redirect: '/center/myorder',
    },
    {
        name: 'paysuccess',
        path: '/paysuccess',
        component: () => import('@/pages/PaySuccess'),
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path != '/pay') {
                next(false);
            } else {
                next();
            }
        }
    },
    {
        name: 'pay',
        path: '/pay',
        component: () => import('@/pages/Pay'),
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path!='/trade') {
                next(false);
            } else {
                next();
            }
        }
    },
    {
        name: 'trade',
        path: '/trade',
        component: () => import('@/pages/Trade'),
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path != '/shopcart') {
                next(false);
            } else {
                next();
            }
        }
    },
    {
        name: 'shopcart',
        path: '/shopcart',
        component: () => import('@/pages/ShopCart'),
        meta: { show: true }
    },
    {
        name: 'addcartsuccess',
        path: '/addcartsuccess',
        component: () => import('@/pages/AddCartSuccess'),
        meta: { show: true }
    },
    {
        name: 'detail',
        path: '/detail/:id',
        component: () => import('@/pages/Detail'),
        meta: { show: true }
    },
    {
        path: '/home',
        component: () => import('@/pages/Home'),
        meta: { show: true }
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: () => import('@/pages/Search'),
        meta: { show: true }
    },
    {
        path: '/login',
        component: () => import('@/pages/Login'),
        meta: { show: false }
    },
    {
        path: '/register',
        component: () => import('@/pages/Register'),
        meta: { show: false }
    },
    {
        path: '/',
        redirect: '/home'
    },
]