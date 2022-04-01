import React from 'react';


import SHOP_DATA from './shop.data'
import SectionPreview from '../../components/section-preview/section-preview.component';

import './shop.styles.scss';

class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: SHOP_DATA
        };
    }

    render() {
        return (
            <div className="shop-page">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <SectionPreview key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;