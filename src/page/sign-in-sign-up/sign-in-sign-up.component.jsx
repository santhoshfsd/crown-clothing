import React from 'react'
import { withRouter } from 'react-router-dom'
import './sign-in-sign-up.styles.scss'

import SignIn from './../../component/sign-in/sign-in.component';

const SignInAndSignUp = (props) => {
    return <div className="sign-in-sign-up">
        <SignIn />
    </div>
}

export default withRouter(SignInAndSignUp) 