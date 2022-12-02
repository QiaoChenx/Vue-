import Vue from "vue";
import VueRouter from 'vue-router';
import routes from '@/router/routes'
import store from "@/store";

Vue.use(VueRouter);

let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}

let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, replace);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}

const route = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})

route.beforeEach(async function (to, from, next) {
    let token = store.state.login.token;
    let name = store.state.login.userInfo.name;
    if (token) {
        if (to.path != '/login') {
            if (name) {
                next();
            } else {
                try {
                    await store.dispatch('login/getUserInfo');
                    next();
                } catch (error) {
                    await store.dispatch('login/logout');
                    next('/login');
                }
            }
        } else {
            next(false);
        }
    } else {
        let path = to.path;
        if (path.includes('order') || path.includes('center') || path.includes('pay') || path.includes('trade') || path.includes('cart')) {
            next('/login?redirect=' + path);
        } else {
            next();
        }
    }


})

export default route;