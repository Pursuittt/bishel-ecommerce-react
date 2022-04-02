import React from 'react';

import './shopping-bag-item.scss';

const ShoppingBagItem = ({item: { imageUrl, price, quantity, name } }) => (
    <div className="shopping-bag-item">
        <img src={imageUrl} alt='item'/>
        <div className="item-details">
            <span className='name'>{name}</span>
            <span className='price'>${price * quantity}, x{quantity}</span>
        </div>
    </div>
)

export default ShoppingBagItem