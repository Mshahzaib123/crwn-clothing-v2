import React from 'react';
import Signup from '../../components/Signup/Signup';
import SignIn from './SignIn';

import './SignIn.scss'

const Authentication = () => {
    return (
        <div className='Authentication_main'>
            <div className='container_fluid'>
                <div className='row_custom'>
                    <div className='col_form_otr'>
                        <SignIn/>
                    </div>
                    <div className='col_form_otr'>
                        <Signup />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication