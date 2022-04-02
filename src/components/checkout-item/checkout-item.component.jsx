import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/selectors/bag.selectors';
import { REMOVE_ITEM, DECREASE_QUANTITY, INCREASE_QUANTITY, ADD_ITEM } from '../../redux/actions/shoppingBagActions';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, REMOVE_ITEM, DECREASE_QUANTITY, INCREASE_QUANTITY}) => {
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={cartItem.imageUrl} alt='item' />
            </div>
            <span className='name'>{cartItem.name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => DECREASE_QUANTITY(cartItem)}>&#10094;</div>
                <span className='value'>{cartItem.quantity}</span>
                <div className='arrow' onClick={() => INCREASE_QUANTITY(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>${cartItem.price}</span>
            <div className='remove-button' onClick={() => REMOVE_ITEM(cartItem)}>&#10005;</div>
        </div>  
    )
}
const mapStateToProps = state => {
    return {
        cartItems: selectCartItems(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        REMOVE_ITEM: item => dispatch(REMOVE_ITEM(item)),
        DECREASE_QUANTITY: item => dispatch(DECREASE_QUANTITY(item)),
        INCREASE_QUANTITY: item => dispatch(INCREASE_QUANTITY(item))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);