import { DISPLAY_DROPDOWN, HIDE_DROPDOWN, REMOVE_ITEM } from '../actions/shoppingBagActions';

const initialState = { 
    display: false,
    cartItems: []
}

const bagDropdownReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DISPLAY_DROPDOWN':
            return { ...state, display: true };
        case 'HIDE_DROPDOWN':
            return { ...state, display: false };
        case 'TOGGLE_DROPDOWN':
            if (state.display) {
                return bagDropdownReducer(state, HIDE_DROPDOWN())
            }
            else {
                return bagDropdownReducer(state, DISPLAY_DROPDOWN())
            }
        case 'ADD_ITEM':
            for (let i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].id === action.payload.id) {
                    state.cartItems[i].quantity += 1;
                    return { ...state, cartItems: [...state.cartItems]}
                }
            }
            action.payload.quantity = 1;
            return { ...state, cartItems: [...state.cartItems, action.payload]}
        case 'REMOVE_ITEM':
            for (let i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].id === action.payload.id) {
                    return {...state, cartItems: state.cartItems.filter(item => item.id !== action.payload.id)}
                }
            }
            return state;
        case 'INCREASE_QUANTITY':
            return { ...state, cartItems: state.cartItems.map(item => {
                if (item.id === action.payload.id) {
                    item.quantity += 1;
                }
                return item;
            })}
        case 'DECREASE_QUANTITY':
            const cartItem = state.cartItems.find(item => item.id === action.payload.id)
            if (cartItem.quantity > 1) {
                return {...state, cartItems: state.cartItems.map(item => {
                    if (item.id === cartItem.id) {
                        item.quantity -= 1;
                    }
                    return item;
                })}
            }
            else {
                return {...state, cartItems: state.cartItems.filter(item => cartItem.id !== item.id)}
            }
        default:
            return state;
    }
}

export default bagDropdownReducer;