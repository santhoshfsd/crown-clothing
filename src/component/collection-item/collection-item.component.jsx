import React from 'react'
import { withRouter } from 'react-router-dom'
import './collection-item.styles.scss'

const CollectionItem = ({ id, name, price, imageUrl }) => {
    return (
        <div className="collection-item">
            <div style={{ backgroundImage: `url(${imageUrl})` }} className="image">

            </div>
            <div className="collection-footer">
                <span className="name"> {name}</span>
                <span className="price"> {price}</span>
            </div>
        </div >
    )
}

export default withRouter(CollectionItem)   