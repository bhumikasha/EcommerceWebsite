import React from 'react';
import './signinsignup.styles.scss';
import Signin from '../../components/signin/signin';
import SignUp from '../../components/signup/signup';

const SignInSignUp = () => {
    return(
        <div className='sign-in-and-sign-up'>
            <Signin/>
            <SignUp/>
        </div>
    )
}

export default SignInSignUp;