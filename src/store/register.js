import { reqCode, reqRegister } from "@/api";

const state = {
    code: ''
};
const actions = {
    async getCode({commit}, phone) {
        let result = await reqCode(phone);
        if (result.code == 200) {
            commit('GETCODE', result.data);
        }
    },
    async reqRegister({commit}, data) {
        let result = await reqRegister(data);
        if (result.code == 200) {
            return 'OK'
        } else {
            return Promise.reject(new Error('failed'));
        }
    },
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
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