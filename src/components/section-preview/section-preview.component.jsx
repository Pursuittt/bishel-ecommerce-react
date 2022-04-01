import React from 'react';
import SectionItem from '../section-item/section-item.component'

import './section-preview.styles.scss';

const SectionPreview = ({title, items}) => (
    <div className="section-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {
                items
                .filter((item, idx)=> idx < 4)
                .map(({id, ...otherItemProps}) => (
                    <SectionItem key={id} {...otherItemProps}/>
                ))
            }
        </div>
    </div>
)


export default SectionPreview;