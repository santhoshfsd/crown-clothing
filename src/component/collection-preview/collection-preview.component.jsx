import React from 'react';
import { withRouter } from 'react-router-dom';
import './collection-preview.styles.scss'
import CollectionItem from "./../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, history }) => (
    <div className="collection-preview">
        <h1 className="title"> {title.toUpperCase()}</h1>
        <div className="preview ">
            {
                items
                    .filter((item, index) => index < 4)
                    .map(({ id, ...otheritem }) => (
                        <CollectionItem key={id} {...otheritem} />
                    ))
            }
        </div>
    </div>
)

export default withRouter(CollectionPreview)
