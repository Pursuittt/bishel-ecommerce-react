import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { ADD_ITEM } from '../../redux/actions/shoppingBagActions';

import './section-item.styles.scss'

const SectionItem = ({item, ADD_ITEM}) => {
    const { imageUrl, price, name } = item;
    return (
        <div className="section-item">

            <div className="image"
            style={{backgroundImage: `url(${imageUrl})`}}/>

            <div className="section-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton onClick={() => ADD_ITEM(item)} inverted>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        ADD_ITEM: item => dispatch(ADD_ITEM(item))
    }
}

export default connect(null, mapDispatchToProps)(SectionItem);