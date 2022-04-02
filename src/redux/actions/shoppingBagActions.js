export const DISPLAY_DROPDOWN = () => (
    { type: 'DISPLAY_DROPDOWN' }
)

export const HIDE_DROPDOWN = () => (
    { type: 'HIDE_DROPDOWN' }
)

export const TOGGLE_DROPDOWN = () => (
    { type: 'TOGGLE_DROPDOWN' }
)

export const ADD_ITEM = item => (
    { type: 'ADD_ITEM', payload: item }
)

export const REMOVE_ITEM = item => (
    { type: 'REMOVE_ITEM', payload: item }
)

export const DECREASE_QUANTITY = item => (
    { type: 'DECREASE_QUANTITY', payload: item }
)

export const INCREASE_QUANTITY = item => (
    { type: 'INCREASE_QUANTITY', payload: item }
)