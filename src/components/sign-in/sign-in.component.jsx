import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';
import {
	googleSignInStart,
	emailSignInStart,
} from '../../redux/user/user.actions';

const SignIn = () => {
	const { register, handleSubmit, reset } = useForm();
	const dispatch = useDispatch();
	const onSubmit = async (values) => {
		dispatch(emailSignInStart(values));
		reset({
			email: '',
			password: '',
		});
	};

	return (
		<div className="sign-in">
			<h2 className="title">
				I already have an account
			</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit(onSubmit)}>
				<FormInput
					name="email"
					label="Email"
					type="email"
					ref={register({
						required: true,
					})}
					required
				/>
				<FormInput
					name="password"
					label="Password"
					type="password"
					ref={register({
						required: true,
					})}
					required
				/>
				<div className="buttons">
					<CustomButton type="submit">
						Sign In
					</CustomButton>
					<CustomButton
						type="button"
						isGoogleSignIn
						onClick={() =>
							dispatch(
								googleSignInStart()
							)
						}
					>
						Sign In With Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
