import React from "react";
import './sign-in.styles.scss'

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js'


class SignIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    handleSubmit = async (event) => {
        const { email, password } = this.state
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: "", password: "" });
        } catch (error) {

        }


    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2> I already have an account </h2>
                <span>Sign in with your  email and password </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" label="email" value={this.state.email} required={true} handleChange={this.handleChange} />
                    <FormInput type="password" label="password" name="password" value={this.state.password} handleChange={this.handleChange} />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn >
                            Sign in with Google
                  </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn