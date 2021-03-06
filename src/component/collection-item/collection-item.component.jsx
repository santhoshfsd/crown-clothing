import React from 'react'
import { withRouter } from 'react-router-dom'
import './collection-item.styles.scss'
import CustomButton from './../../component/custom-button/custom-button.component'

const CollectionItem = ({ id, name, price, imageUrl }) => {
    return (
        <div className="collection-item">
            <div style={{ backgroundImage: `url(${imageUrl})` }} className="image">

            </div>

            <div className="collection-footer">
                <span className="name"> {name}</span>
                <span className="price"> {price}</span>
            </div>

            <CustomButton inverted >Add to Cart</CustomButton>
        </div >
    )
}

export default withRouter(CollectionItem)