
import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import CollectionPreview from "./../../component/collection-preview/collection-preview.component";

import { createStructuredSelector } from "reselect"
import { selectCollections } from './../../redux/shop/shop.selector'

const ShopPage = ({ collections }) => {

    return (
        <div className="shop-page">
            {collections.map(({ id, ...previewItems }) => {
                return <CollectionPreview key={id} {...previewItems} />
            })}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(withRouter(ShopPage))