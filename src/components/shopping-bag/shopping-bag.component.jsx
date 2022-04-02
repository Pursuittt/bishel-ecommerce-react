import React from 'react';
import { connect } from 'react-redux';
import { TOGGLE_DROPDOWN } from '../../redux/actions/shoppingBagActions';
import { selectCartItemsCount } from '../../redux/selectors/bag.selectors';

import { ReactComponent as ShoppingIcon } from '../header/shopping-bag.svg'
import './shopping-bag.styles.scss'

const ShoppingBag = ({ TOGGLE_DROPDOWN, itemCount }) => (
    <div className="shopping-bag" onClick={TOGGLE_DROPDOWN}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapStateToProps = state => {
    return {
        itemCount: selectCartItemsCount(state)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        TOGGLE_DROPDOWN: () => dispatch(TOGGLE_DROPDOWN())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag);