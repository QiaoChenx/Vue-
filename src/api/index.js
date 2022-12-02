import request from "./request";
import mockRequest from "./mockRequest";

export const reqCategoryList = () => request({
    url: '/product/getBaseCategoryList',
    method: 'get'
})

export const reqBannerList = () => mockRequest.get('/banner');

export const reqFloorList = () => mockRequest.get('/floor');

export const reqSearchInfo = (params) => request({
    url: `/list`,
    data: params,
    method: 'post'
})

export const reqDetailInfo = (skuId) => request({
    url: `/item/${skuId}`,
    method: 'get'
})

export const reqAddOrUpdateShopCart = (skuId, skuNum) => request({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post'
})

export const reqCartList = () => request({
    url: '/cart/cartList',
    method: 'get'
})

export const reqDeleteCart = (skuId) => request({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete'
})

export const reqChangeCheck = (skuId, check) => request({
    url: `/cart/checkCart/${skuId}/${check}`,
    method: 'get'
})

export const reqCode = (phone) => request({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get'
})

export const reqRegister = (data) => request({
    url: '/user/passport/register',
    method: 'post',
    data
})

export const reqLogin = (data) => request({
    url: '/user/passport/login',
    method: 'post',
    data
})

export const reqUserInfo = () => request({
    url: '/user/passport/auth/getUserInfo',
    method: 'get'
})

export const reqLogout = () => request({
    url: '/user/passport/logout',
    method: 'get'
})

export const reqUserAddress = () => request({
    url: '/user/userAddress/auth/findUserAddressList',
    method: 'get'
})

export const reqOrderInfo = () => request({
    url: '/order/auth/trade',
    method: 'get'
})

export const reqSubmitOrder = (tradeNo, data) => request({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method: 'post'
})

export const reqPayInfo = (orderId) => request({
    url: `/payment/weixin/createNative/${orderId}`,
    method: 'get'
})

export const reqPayStatus = (orderId) => request({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: 'get'
})

export const reqOrderList = (page, limit) => request({
    url: `/order/auth/${page}/${limit}`,
    method: 'get'
})