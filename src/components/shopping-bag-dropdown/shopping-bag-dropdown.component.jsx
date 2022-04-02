import React from 'react';
import { connect } from 'react-redux';

import ShoppingBagItem from '../shopping-bag-item/shopping-bag-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './shopping-bag-dropdown.styles.scss';

const ShoppingBagDropdown = ({cartItems}) => (
    <div className="shopping-bag-dropdown">
        { console.log(cartItems) }
        <div className="shopping-bag-items">
            {
                cartItems.map(item => (
                    <ShoppingBagItem key={item.id} item={item}/>
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = state => {
    return {
        cartItems: state.dropdown.cartItems
    }
}

export default connect(mapStateToProps)(ShoppingBagDropdown);