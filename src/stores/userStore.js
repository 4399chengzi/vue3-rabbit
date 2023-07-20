import { loginAPI } from '@/apis/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCartStore } from './cartStore'

export const useUserStore = defineStore('user', () => {
    const cartStore = useCartStore()
    const userInfo = ref({})

    const getuserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result
    }

    const clearUserInfo = () => {
        userInfo.value = {}
        cartStore.clearCart()
    }

    return {
        userInfo,
        getuserInfo,
        clearUserInfo
    }
}, {
    persist: true,
})