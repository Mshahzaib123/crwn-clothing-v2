import React, { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase/firebase';
import FormInput from '../FormInput/FormInput';
import ThemeButton, { BUTTON_TYPE } from '../ThemeButton/ThemeButton';

import './Signup.scss'

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const Signup = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormField = () => {
        setFormFields(defaultFormField);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Password does not match');
            return;
        }
        try {
            const userCredential = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            const { user } = userCredential;
            resetFormField();
            if (user && user.uid) {
                await createUserDocFromAuth(user, { displayName });
            } else {
                console.error('Invalid user object:', user);
            }
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.error('User creation encountered an error', error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div className='Signup_otr'>
            <h2 className='signup_heading'>
                I do not have an account?
            </h2>
            <p className='signup_desc'>
                Sign Up with your email and password 
            </p>
            <form className='form_otr' onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    onChange={handleChange}
                    name='displayName'
                    type='text'
                    value={displayName}
                    require
                />
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
                <FormInput
                    label='Confirm Password'
                    onChange={handleChange}
                    name='confirmPassword'
                    type='password'
                    value={confirmPassword}
                    require
                />
                <div className='action_otr'>
                    <ThemeButton
                        buttonType={BUTTON_TYPE.white}
                        type='submit'
                        children='Sign Up'
                    />
                </div>
            </form>
        </div>
    )
}

export default Signup