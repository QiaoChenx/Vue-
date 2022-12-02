import { reqAddOrUpdateShopCart, reqDetailInfo } from '@/api'
import { getUUID } from '@/utils/uuid_token';
const state = {
    detailInfo: {},
    uuid: getUUID()
};
const mutations = {
    GETDETAILINFO(state, detailInfo) {
        state.detailInfo = detailInfo;
    }
};
const actions = {
    async getDetailInfo({ commit }, id) {
        let result = await reqDetailInfo(id);
        if (result.code == 200) {
            commit('GETDETAILINFO', result.data);
        }
    },
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        if (result.code == 200) {
            return 'OK'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
};
const getters = {
    categoryView() {
        return state.detailInfo.categoryView || {};
    },
    skuInfo() {
        return state.detailInfo.skuInfo || {};
    },
    spuSaleAttrList() {
        return state.detailInfo.spuSaleAttrList || [];
    },
    skuImageList(state, getters) {
        return getters.skuInfo.skuImageList || [];
    }
};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}