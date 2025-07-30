import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
	const navigate = useNavigation();
	const isSubmitting = navigate.state === "submitting";
	return (
		<button
			type="submit"
			className="btn btn-primary btn-block capitalize"
		>
			{isSubmitting ? (
				<>
					<span className="loading loading-spinner"></span>
					sending...
				</>
			) : (
				text || "submit"
			)}
		</button>
	);
};
export default SubmitBtn;
