import { useForm } from 'react-hook-form'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-up.styles.scss'

const INITIAL_STATE = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async ({ email, displayName, password, confirmPassword }) => {
        if (password !== confirmPassword) {
            alert('Passwords don\'t match')
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument( user, { displayName })
            reset(INITIAL_STATE)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    type='text'
                    name='displayName'
                    label='Display Name'
                    ref={register({ required: true })}
                />
                <FormInput
                    type='email'
                    name='email'
                    label='Email'
                    ref={register({ required: true })}
                />
                <FormInput
                    type='password'
                    name='password'
                    label='Password'
                    ref={register({ required: true })}
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    label='Confirm Password'
                    ref={register({ required: true })}
                />

                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}

export default SignUp