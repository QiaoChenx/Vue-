import { reqLogin, reqLogout, reqUserInfo } from "@/api";
import { getToken, removeToken } from "@/utils/TOKEN";

const state = {
    token: getToken(),
    userInfo: {}
};
const mutations = {
    REQLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    LOGOUT(state) {
        state.token = '';
        state.userInfo = {};
        removeToken();
    }
};
const actions = {
    async reqLogin({ commit }, data) {
        let result = await reqLogin(data);
        if (result.code == 200) {
            localStorage.setItem('TOKEN', result.data.token);
            commit('REQLOGIN', result.data.token);
            return 'OK';
        } else {
            return Promise.reject(new Error('failed'));
        }
    },
    async getUserInfo({commit}) {
        let result = await reqUserInfo();
        if (result.code == 200) {
            commit('GETUSERINFO', result.data);
            return 'OK'
        } else {
            return Promise.reject(new Error('failed'));
        }  
    },
    async logout({commit}) {
        let result = await reqLogout();
        if (result.code == 200) {
            commit('LOGOUT');   
            return 'OK';
        } else {
            return Promise.reject(new Error('failed'));
        }
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