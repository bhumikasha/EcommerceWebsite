import React, { Component } from 'react';
import './signin.styles.scss';
import FormInput from '../formInput/formInput';
import CustomButton from '../custombutton/custombutton';
import {auth, signInWithGoogle} from '../../firebase/firebase';

class Signin extends Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
        }catch(error){
            console.log(error);
        }
        this.setState({email:'', password:''})
    }

    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email"  name='email' type="email" value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput label="password" name='password' type="password" value={this.state.password} handleChange={this.handleChange} required/>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>{' '}Sign In with Google{' '}</CustomButton>
                </form>
            </div>
        )
    }
}

export default Signin;