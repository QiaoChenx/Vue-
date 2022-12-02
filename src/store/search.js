import { reqSearchInfo } from "@/api";

const state = {
    searchInfo: {}
};
const mutations = {
    GETSEARCHINFO(state, searchInfo) {
        state.searchInfo = searchInfo;
    }
};
const actions = {
    async getSearchInfo({commit}, params) {
        let result = await reqSearchInfo(params);
        if (result.code == 200) {
            commit('GETSEARCHINFO', result.data);
        }
    }
};
const getters = {
    goodsList() {
        return state.searchInfo.goodsList || [];
    },
    trademarkList() {
        return state.searchInfo.trademarkList || [];
    },
    attrsList() {
        return state.searchInfo.attrsList || [];
    },
    total() {
        return state.searchInfo.total || '';
    }
};

export default {
    namespaced:true,
    state, 
    actions,
    mutations,
    getters
}