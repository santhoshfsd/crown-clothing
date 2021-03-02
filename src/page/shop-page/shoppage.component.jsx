
import React from 'react'
import { withRouter } from 'react-router-dom'
import SHOP_DATA from './shop.data'

import CollectionPreview from "./../../component/collection-preview/collection-preview.component";

class ShopPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {collections.map(({ id, ...previewItems }) => {
                    return <CollectionPreview key={id} {...previewItems} />
                })}
            </div>
        )
    }
}

export default withRouter(ShopPage)