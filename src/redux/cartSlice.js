import { createSlice } from '@reduxjs/toolkit';

 export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const timeId = new Date().getTime()
            state.cartItems.push({
                id: timeId,
                clothId: action.payload.cloth.id,
                item: action.payload.item,
                totalPrice: action.payload.item * action.payload.cloth.price
            })
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            )
        }

    }
 })
 export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    }, 0)
 }

 export const getcartItems = state => state.cart.cartItems;
 export const {  addItemToCart, removeItemFromCart } = slice.actions;
 export default slice.reducer;