import React from 'react'
import { connect } from 'react-redux';

import MenuItem from './../menu-item/menuItem.component'
import './directory.styles.scss'
import { sectionsSelector } from './../../redux/directory/directory.selector.js'
import { createStructuredSelector } from 'reselect'
const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            {
                sections.map(({ id, ...sectionProps }) => {
                    return <MenuItem key={id} {...sectionProps} />
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: sectionsSelector
})

export default connect(mapStateToProps)(Directory)
