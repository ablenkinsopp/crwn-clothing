import { useForm } from 'react-hook-form'

import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

const SignIn = () => {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async ({ email, password }) => {
        try {
            await auth.signInWithEmailAndPassword(email, password)
            reset({
                email: '',
                password: ''
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput 
                    name='email' 
                    label='Email' 
                    type='email' 
                    ref={register({ required: true })}
                    required 
                />
                <FormInput 
                    name='password' 
                    label='Password' 
                    type='password' 
                    ref={register({ required: true })}
                    required 
                />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' isGoogleSignIn onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                </div>
                
            </form>
        </div>
    )
}

export default SignIn