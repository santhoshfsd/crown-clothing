import './sign-up.styles.scss'
import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfile } from '../../firebase/firebase.utils'

class SignUp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            displayName: "as",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleChange = (event) => {
        const { name, value } = event;
        this.setState({ [name]: value })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, confirmPassword, email, password } = this.state;
        if (password !== confirmPassword) {
            alert("Password don't match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfile(user, displayName)
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        }
        catch (error) {

        }
    }
    render() {
        return <div className="sign-up">
            <h2>I dont have an Account</h2>
            <span>Sign Up with your email and password</span>
            <form className="sign-up-form" onClick={this.handleSubmit}>
                <FormInput type="email" name="email" label="email" value={this.state.email} required={true} handleChange={this.handleChange} />
            </form>
        </div>
    }

}

export default SignUp