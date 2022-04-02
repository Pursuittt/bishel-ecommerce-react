import { DISPLAY_DROPDOWN, HIDE_DROPDOWN } from '../actions/shoppingBagActions';

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
        default:
            return state;
    }
}

export default bagDropdownReducer;