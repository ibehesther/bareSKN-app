import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SearchTab(props) {
	const [searchTerm, setSearchTerm] = useState("");
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const handleChange = (e) => {
		e.preventDefault();
		setSearchTerm(e.target.value);
	};
	useEffect(() => {
		fetch(
			`${
				process.env.REACT_APP_API_URL
			}/api/v1.0/products?s=${encodeURIComponent(searchTerm)}`
		)
			.then((res) => res.json())
			.then(({ products }) => {
				setProducts(products);
				setIsLoading(false);
			})
			.catch(console.log);
	}, [searchTerm]);
	return (
		<div className="navbar-search-container">
			<div className="navbar-search-tab-container">
				<div className="navbar-search-tab">
					<form
						action="/"
						className="search-tab"
						onSubmit={(e) => {
							e.preventDefault();
							return false;
						}}
					>
						<input
							type="text"
							name="Search"
							value={searchTerm}
							id="search-tab"
							className="search-tab"
							placeholder="Search"
							onChange={(e) => handleChange(e)}
						/>
					</form>
					<button id="cancel" onClick={props.toogleSearchTab}>
						CANCEL
					</button>
				</div>
				<div className="navbar-search-result">
					<ul>
						{products.length === 0 ? (
							<li>No products found...</li>
						) : (
							products
								.slice(0, 5)
								.map(({ _id, name, image_link, price, description }, index) => (
									<li key={index}>
										<Link
											onClick={props.toogleSearchTab}
											to={`/products/${_id}`}
											state={{ name, image_link, price, description }}
										>
											{name}
										</Link>
									</li>
								))
						)}
					</ul>
					{searchTerm.length > 0 && products.length > 5 ? (
						<Link
							onClick={props.toogleSearchTab}
							to={`/products/search/${searchTerm}`}
							state={{ isLoading, searchTerm, products }}
							className="navbar-search-all"
						>
							See all...
						</Link>
					) : (
						""
					)}
				</div>
			</div>
			<div className="overlay" onClick={props.toogleSearchTab}></div>
		</div>
	);
}

export default SearchTab;
