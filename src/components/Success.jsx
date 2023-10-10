import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	createCart,
	getCart,
	updateCart,
} from "../redux/features/cart/cartSlice";

const Success = (props) => {
	const dispatch = useDispatch();

	const { id } = useSelector((store) => store.user);
	const { id: cart_id } = useSelector((store) => store.cart);

	useEffect(() => {
		dispatch(updateCart({ id: cart_id, cleared: true }));
	}, [id]);

	useEffect(() => {
		dispatch(createCart());
	}, []);

	useEffect(() => {
		console.log(cart_id);
		dispatch(getCart(cart_id));
	}, [cart_id]);
	return (
		<div className="success-container">
			<img src={require("../images/success.png")} alt="Big tick" />
			<h1>Your order was submitted successfully!</h1>
		</div>
	);
};

export default Success;
