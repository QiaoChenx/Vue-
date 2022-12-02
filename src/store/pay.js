import { reqPayInfo } from "@/api";

const state ={
    payInfo: {}
};
const actions = {
    async getPayInfo({commit},orderId) {
        let result = await reqPayInfo(orderId);
        if (result.code == 200) {
            commit('GETPAYINFO', result.data);
        } else {
            return Promise.reject(new Error('failed'));
        }
    },
};
const mutations = {
    GETPAYINFO(state, payInfo) {
        state.payInfo = payInfo;
    }
};
const getters = {};
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}