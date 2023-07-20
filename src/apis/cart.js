import request from '@/utils/http'

export const insertCartAPI = ({ skuId, count }) => {
    return request({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

export const findNewCartListAPI = () => {
    return request({
        url: '/member/cart'
    })
}