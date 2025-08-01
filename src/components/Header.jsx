import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../featured/cart/cartSlice";
import { logout } from "../featured/user/userSlice";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.userState);
	// to remove queries when logged out
	const queryClient = useQueryClient();
	const handleLogout = () => {
		queryClient.removeQueries(["order"]);
		dispatch(logout());
		dispatch(clearCart());
		navigate("/");
	};
	return (
		<header className="bg-neutral py-2 text-neutral-content">
			<div className="align-element flex justify-center sm:justify-end">
				{user ? (
					<div className="flex gap-x-2 sm:gap-x-6 items-center">
						<p className="text-xs sm:text-sm ">
							Hello, {user.username}
						</p>
						<button
							className="btn btn-xs btn-outline btn-primary"
							onClick={handleLogout}
						>
							logout
						</button>
					</div>
				) : (
					<div className="flex gap-x-6 justify-center items-center">
						<Link
							to="/login"
							className="link link-hover text-xs sm:text-sm"
						>
							Sign in / Guest
						</Link>
						<Link
							to="/register"
							className="link link-hover text-xs sm:text-sm"
						>
							Create Account
						</Link>
					</div>
				)}
			</div>
		</header>
	);
};
export default Header;
