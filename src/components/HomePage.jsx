import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Account from "./Account";
import Services from "./Services";
import Blog from "./Blog";
import BlogPosts from "./BlogPosts";
import Cart from "./Cart";
import Checkout from "./Checkout";
import EditAccount from "./EditAccount";
import OrderHistory from "./OrderHistory";
import LandingPage from "./LandingPage";
import Payment from "./Payment";
import Product from "./Product";
import SignUp from "./SignUp";
import CollectionProductsList from "./CollectionProductsList";
import SubCategoryProductsList from "./SubCategoryProductsList";
import { useSelector, useDispatch } from "react-redux";
import { getCart, updateCart } from "../redux/features/cart/cartSlice";
import { verifyJWT } from "../redux/features/user/userSlice";
import Success from "./Success";
import Signin from "./Signin";
import Failure from "./Failure";
import SearchProductsList from "./SearchProductList";

function HomePage() {
	const { isLoading: loading, ...cart } = useSelector((store) => store.cart);
	const { id } = useSelector((store) => store.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(verifyJWT());
	}, [id]);

	useEffect(() => {
		dispatch(getCart(cart.id));
	}, [cart.id]);

	useEffect(() => {
		dispatch(updateCart(cart));
	}, [cart.cartItems]);

	return (
		<>
			<Routes>
				<Route path={"/"} element={<LandingPage />}></Route>
				<Route path={`cart`} element={<Cart />}></Route>
				<Route path={`payment`} element={<Payment />}></Route>
				<Route path={`checkout`} element={<Checkout />}></Route>
				<Route path={`account`} element={<Account />}></Route>
				<Route path={`order-history`} element={<OrderHistory />}></Route>
				<Route path={`edit`} element={<EditAccount />}></Route>
				<Route
					path={`/products/search/:searchTerm`}
					element={<SearchProductsList />}
				></Route>
				<Route path={`products/:id`} element={<Product />}></Route>
				<Route path={`services`} element={<Services />}></Route>
				<Route path={`blog`} element={<Blog />}></Route>
				<Route path={`blog-posts`} element={<BlogPosts />}></Route>
				<Route path={`signup`} element={<SignUp />}></Route>
				<Route path={`signin`} element={<Signin />}></Route>
				<Route
					path={`collections/:coll_name/products`}
					element={<CollectionProductsList />}
				></Route>
				<Route
					path={`subcategories/:cat_name/products`}
					element={<SubCategoryProductsList />}
				></Route>
				<Route path={"/success"} element={<Success />}></Route>
				<Route path={"/failure"} element={<Failure />}></Route>
				<Route
					path={"*"}
					element={
						<main style={{ padding: "1rem" }}>
							<p>Oops! nothing to see here.</p>
						</main>
					}
				></Route>
			</Routes>
		</>
	);
}

export default HomePage;
