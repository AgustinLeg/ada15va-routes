import { useForm } from '../../hooks/useForm';

export const LoginForm = () => {
	const { values, handleChange } = useForm({
		username: '',
		password: '',
	});

	return (
		<form>
			<label htmlFor="username">Username</label>
			<input
				type="text"
				id="username"
				name="username"
				value={values.username}
				onChange={(e) => handleChange(e)}
			/>
			<label htmlFor="password">Password</label>
			<input
				type="password"
				id="password"
				name="password"
				value={values.password}
				onChange={handleChange}
			/>
			<button type="submit">Login</button>
		</form>
	);
};
