import { defineStore } from "pinia"
import { computed, ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
    const cartList = ref([])

    const addCart = (goods) => {
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
            item.count = item.count + goods.count
        } else {
            cartList.value.push(goods)
        }
    }

    const delCart = (skuId) => {
        const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(idx, 1)
    }

    const singleCheck = (skuId, selected) => {
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }

    // 全选功能
    const allCheck = (selected) => {
        // 把cartList中的每一项的selected都设置为当前的全选框状态
        cartList.value.forEach((item) => item.selected = selected)
    }

    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))

    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))


    const isAll = computed(() => cartList.value.every((item) => item.selected))


    return {
        cartList,
        allCount,
        allPrice,
        isAll,
        selectedCount,
        selectedPrice,
        addCart,
        delCart,
        singleCheck,
        allCheck
    }
}, {
    persist: true,
})
