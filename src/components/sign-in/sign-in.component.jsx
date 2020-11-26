import { useState } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

const SignIn = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = e => {
        e.preventDefault();
        setState({
            email: '',
            password: ''
        })
    }

    const handleChange = e => {
        const { value, name } = e.target
        setState({
            ...state,
            [name]: value
        })
    }

    return (
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <p>Sign in with your email and password</p>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    handleChange={handleChange} 
                    name='email' 
                    label='Email' 
                    type='email' 
                    value={state.email} 
                    required 
                />
                <FormInput 
                    handleChange={handleChange} 
                    name='password' 
                    label='Password' 
                    type='password' 
                    value={state.password} 
                    required 
                />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                </div>
                
            </form>
        </div>
    )
}

export default SignIn