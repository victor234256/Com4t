import { Form, Link } from "react-router-dom";
import { FormInput } from "../components";
import SubmitBtn from "../components/SubmitBtn";

const Login = () => {
	return (
		<section className="h-screen grid place-items-center">
			<Form
				method="POST"
				className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap space-y-5"
			>
				<h4 className="text-center text-3xl font-bold ">
					Login
				</h4>
				<FormInput
					type="email"
					label="email"
					name="identifier"
					defaultValue="test@test.com"
				/>
				<FormInput
					type="password"
					name="password"
					label="password"
					defaultValue="secret"
				/>
				<div className="mt-4">
					<SubmitBtn text="login" />
				</div>
				<button
					type="button"
					className="btn btn-secondary btn-block"
				>
					guest user
				</button>
				<p>
					Not a member?
					<Link
						to="/register"
						className="ml-2 link link-hover link-primary capitalize text-center"
					>
						register
					</Link>
				</p>
			</Form>
		</section>
	);
};
export default Login;
