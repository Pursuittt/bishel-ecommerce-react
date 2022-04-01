import React from 'react';
import { connect } from 'react-redux';
import { TOGGLE_DROPDOWN } from '../../redux/actions/shoppingBagActions';

import { ReactComponent as ShoppingIcon } from '../header/shopping-bag.svg'
import './shopping-bag.styles.scss'

const ShoppingBag = ({ TOGGLE_DROPDOWN }) => (
    <div className="shopping-bag" onClick={TOGGLE_DROPDOWN}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => {
    return {
        TOGGLE_DROPDOWN: () => dispatch(TOGGLE_DROPDOWN())
    }
};

export default connect(null, mapDispatchToProps)(ShoppingBag);