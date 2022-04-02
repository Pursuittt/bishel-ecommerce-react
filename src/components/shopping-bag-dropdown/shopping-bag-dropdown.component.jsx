import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ShoppingBagItem from '../shopping-bag-item/shopping-bag-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { HIDE_DROPDOWN } from '../../redux/actions/shoppingBagActions';

import './shopping-bag-dropdown.styles.scss';

const ShoppingBagDropdown = ({cartItems, history, HIDE_DROPDOWN}) => (
    <div className="shopping-bag-dropdown">
        <div className="shopping-bag-items">
            {
                cartItems.length <= 0
                ? (<span style={{textAlign: 'center'}}>Cart is empty.</span>)
                : cartItems.map(item => (
                    <ShoppingBagItem key={item.id} item={item}/>
                )) 
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            HIDE_DROPDOWN();
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = state => {
    return {
        cartItems: state.dropdown.cartItems
    }
}
const mapDispatchToProps = dispatch => {
    return {
        HIDE_DROPDOWN: () => dispatch(HIDE_DROPDOWN())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShoppingBagDropdown));