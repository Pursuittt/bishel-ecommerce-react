import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './shopping-bag-dropdown.styles.scss';

const ShoppingBagDropdown = () => (
    <div className="shopping-bag-dropdown">
        <div className="shopping-bag-items">
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
)

export default ShoppingBagDropdown;