import React from 'react';

import FormInput from '../form-input-component/form-input.component';
import CustomButton from '../custom-button-component/custom-button.component';

import { auth, createUser } from '../../firebase/firebase';

import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password != confirmPassword) {
            alert('Password don\'t match')
            return
        }

        try {
            const user = {
                displayName: displayName,
                email: email
            }
            createUser(user);
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })

        } catch (err) {
            console.log("Authentication failed.", err)
        }
    }
    

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type="text"
                    name="displayName"
                    label='Username'
                    value={ displayName }
                    onChange={ this.handleChange }
                    required
                    >
                    </FormInput>

                    <FormInput
                    type="email"
                    name="email"
                    label='Email'
                    value={ email }
                    onChange={ this.handleChange }
                    required
                    >
                    </FormInput>

                    <FormInput
                    type="password"
                    name="password"
                    label='Password'
                    value={ password }
                    onChange={ this.handleChange }
                    required
                    >
                    </FormInput>

                    <FormInput
                    type="password"
                    name="confirmPassword"
                    label='Confirm Password'
                    value={ confirmPassword }
                    onChange={ this.handleChange }
                    required
                    />

                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;