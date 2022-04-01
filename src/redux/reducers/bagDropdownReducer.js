import { DISPLAY_DROPDOWN, HIDE_DROPDOWN } from '../actions/shoppingBagActions';

const initialState = { 
    display: false
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
        default:
            return state;
    }
}

export default bagDropdownReducer;