import React, { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGooglePopup, createUserDocFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebase';

import './SignIn.scss'

const GooglePopupGoogleRedirect = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getRedirectResult(auth);
                if (response) {
                    const userDocRef = await createUserDocFromAuth(response.user);
                }
            } catch (error) {
                console.error('Error fetching redirect result:', error);
            }
        };
        fetchData();
    }, []);


    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    }
    return (
        <div>
            <h1 className='signin_heading'>
                SignIn
            </h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign In with Google Redirect
            </button>
        </div>
    )
}

export default GooglePopupGoogleRedirect