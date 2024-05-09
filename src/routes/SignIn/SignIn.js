import React, { useState } from 'react';
import {
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from '../../utils/firebase/firebase';
import FormInput from '../../components/FormInput/FormInput';
import ThemeButton, { BUTTON_TYPE } from '../../components/ThemeButton/ThemeButton';

import '../../components/Signup/Signup.scss'

const defaultFormField = {
    email: '',
    password: '',
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { email, password } = formFields;

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const resetFormField = () => {
        setFormFields(defaultFormField);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            resetFormField();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                case 'auth/invalid-credential':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div className='SignIn_otr'>
            <h2 className='signin_heading'>
                Already have an account?
            </h2>
            <p className='signin_desc'>
                Sign in with your email and password 
            </p>
            <form className='form_otr' onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    onChange={handleChange}
                    name='email'
                    type='email'
                    value={email}
                    require
                />
                <FormInput
                    label='Password'
                    onChange={handleChange}
                    name='password'
                    type='password'
                    value={password}
                    require
                />
                <div className='action_otr'>
                    <ThemeButton
                        buttonType={BUTTON_TYPE.white}
                        type='submit'
                        children='Sign In'
                    />
                    <ThemeButton
                        type='button'
                        buttonType={BUTTON_TYPE.primary}
                        onClick={signInWithGoogle}
                        children='Sign In with Google'
                    />
                </div>
            </form>
        </div>
    )
}

export default SignIn