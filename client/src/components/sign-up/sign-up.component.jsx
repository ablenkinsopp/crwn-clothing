import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = () => {
	const { register, handleSubmit } = useForm();
	const dispatch = useDispatch();

	const onSubmit = async ({
		email,
		displayName,
		password,
		confirmPassword,
	}) => {
		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		dispatch(signUpStart({ email, password, displayName }));
	};

	return (
		<div className="sign-up">
			<h2 className="title">
				I do not have an account
			</h2>
			<span>Sign up with email and password</span>
			<form
				className="sign-up-form"
				onSubmit={handleSubmit(onSubmit)}
			>
				<FormInput
					type="text"
					name="displayName"
					label="Display Name"
					ref={register({
						required: true,
					})}
				/>
				<FormInput
					type="email"
					name="email"
					label="Email"
					ref={register({
						required: true,
					})}
				/>
				<FormInput
					type="password"
					name="password"
					label="Password"
					ref={register({
						required: true,
					})}
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					label="Confirm Password"
					ref={register({
						required: true,
					})}
				/>

				<CustomButton type="submit">
					SIGN UP
				</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;
