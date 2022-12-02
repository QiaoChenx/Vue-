import { reqCartList, reqChangeCheck, reqDeleteCart } from "@/api";

const state = {
    cartList: []
};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    }
};
const actions = {
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit('GETCARTLIST', result.data);
        }
    },
    async deleteCart({ commit }, skuId) {
        let result = await reqDeleteCart(skuId);
        if (result.code == 200) {
            return 'OK';
        } else {
            return Promise.reject(new Error('failed'));
        }
    },
    async changeCheck({ commit }, { skuId, check }) {
        let result = await reqChangeCheck(skuId, check);
        if (result.code == 200) {
            return 'OK';
        } else {
            return Promise.reject(new Error('failed'));
        }
    },
    deleteAll({ dispatch, getters }) {
        let promiseAll = [];
        getters.cartInfoList.forEach(item => {
            let promise = item.isChecked == '1' ? dispatch('deleteCart', item.skuId) : '';
            promiseAll.push(promise);
        });
        return Promise.all(promiseAll);
    },
    changeAllCheck({ dispatch, getters }, checked) {
        let promiseAll = [];
        getters.cartInfoList.forEach(item => {
            let promise = dispatch('changeCheck', { skuId: item.skuId, check: checked });
            promiseAll.push(promise);
        })
        return Promise.all(promiseAll);
    }
};
const getters = {
    cartList() {
        return state.cartList[0] || {};
    },
    cartInfoList(state, getter) {
        return getter.cartList.cartInfoList || [];
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}