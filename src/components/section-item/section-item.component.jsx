import React from 'react';

import './section-item.styles.scss'

const SectionItem = ({name, price, imageUrl}) => (
    <div className="section-item">

        <div className="image"
        style={{backgroundImage: `url(${imageUrl})`}}/>

        <div className="section-footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </div>
    </div>
)

export default SectionItem;