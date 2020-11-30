import { createSelector } from 'reselect'

const selectShop = state => state.selectShop

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)