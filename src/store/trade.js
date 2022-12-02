import { reqOrderInfo, reqUserAddress } from "@/api";

const state = {
    userAddress: [],
    orderInfo: {}
};
const mutations = {
    GETUSERADDRESS(state, userAddress) {
        state.userAddress = userAddress;
    },
    GETORDERINFO(state, orderInfo) {
        state.orderInfo = orderInfo;
    }
};
const actions = {
    async getUserAddress({ commit }) {
        let result = await reqUserAddress();
        if (result.code == 200) {
            commit('GETUSERADDRESS', result.data);
        } else {
            return Promise.reject(new Error('failed'));
        }
    },
    async getOrderInfo({ commit }) {
        let result = await reqOrderInfo();
        if (result.code == 200) {
            commit('GETORDERINFO', result.data);
        } else {
            return Promise.reject(new Error('Failed')); 
        }
    }
};
const getters = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}