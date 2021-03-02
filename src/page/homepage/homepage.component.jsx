import React from 'react'
import './homepage.styles.scss'
import Directory from './../../component/directory/directory.component'
const HomePage = () => {

    return <div className="homepage">
        <div className="directory-menu">
            <Directory />
        </div>
    </div>
}


export default HomePage