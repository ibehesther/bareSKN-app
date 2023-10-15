import { Link } from "react-router-dom";
import SideBarOptions from "./SideBarOptions";
import { useSelector } from "react-redux";
import { useState } from "react";

function LandingNavigationBar(props) {
	// Get state properties from redux store
	const { id } = useSelector((store) => store.user);
	const { total } = useSelector((store) => store.cart);

	const [navbarTouched, setNavbarTouched] = useState(false);

	return (
		<div className="nav-bar">
			<h1 className="app-name">
				<a href="/">BareSKN</a>
			</h1>
			<div className="navbar-center hidden-sm hidden-md">
				<SideBarOptions />
			</div>
			<div className="navbar-right">
				<span
					onClick={() => {
						props.toogleSearchTab();
						props.isSideBarOpen && props.toogleSideBar();
					}}
				>
					<img
						src={require("../icons/search.png")}
						alt="Search"
						srcSet=""
						className="navbar-icon"
					/>
				</span>
				<span className="cart-icon-container hidden-sm" aria-label="profile">
					<Link
						to={id ? "/account" : "/signin"}
						onClick={props.isSideBarOpen && props.toogleSideBar}
					>
						<img
							id="profile"
							src={require("../icons/profile.png")}
							alt="profile"
							className="navbar-icon"
						/>
					</Link>
				</span>
				<span className="cart-icon-container" aria-label="cart">
					<Link
						onClick={props.isSideBarOpen && props.toogleSideBar}
						to={`/cart`}
					>
						<img
							id="cart"
							src={require("../icons/shopping-cart.png")}
							alt="cart"
							className="navbar-icon"
							srcSet=""
						/>
						{total > 0 && <span id="cart-no">{total}</span>}
					</Link>
				</span>
				<div
					className="navbar-icon hidden-lg"
					onClick={() => {
						props.toogleSideBar();
						setNavbarTouched(true);
					}}
				>
					<div
						className="navbar-line-1"
						style={{
							animationName:
								navbarTouched && !props.isSideBarOpen
									? "navbarline1_close"
									: props.isSideBarOpen
									? "navbarline1_open"
									: "",
						}}
					></div>
					<div
						className="navbar-line-2"
						style={{ display: props.isSideBarOpen ? "none" : "block" }}
					></div>
					<div
						className="navbar-line-3"
						style={{
							animationName:
								navbarTouched && !props.isSideBarOpen
									? "navbarline3_close"
									: props.isSideBarOpen
									? "navbarline3_open"
									: "",
						}}
					></div>
				</div>
			</div>
		</div>
	);
}

export default LandingNavigationBar;
