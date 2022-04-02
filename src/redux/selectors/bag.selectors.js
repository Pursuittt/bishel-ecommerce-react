import { createSelector } from 'reselect';

const selectCart = state => state.dropdown;

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => {
    let sum = 0;
    for (let i = 0; i < cartItems.length; i++) {
        sum += cartItems[i].quantity;
    }
    return sum;
})

export const selectCartTotal = createSelector([selectCartItems], (cartItems) => {
    let sum = 0;
    for (let i = 0; i < cartItems.length; i++) {
        sum += cartItems[i].quantity * cartItems[i].price;
    }
    return sum;
})