import React from "react";
import Card from "./Card";
import { ProductsLoading } from "./Loading";
import { useLocation } from "react-router-dom";

const SearchProductsList = () => {
	const location = useLocation();
	const { isLoading, searchTerm, products } = location.state;
	return (
		<div className="page-section">
			<h2>
				Search: <em>{searchTerm}</em>
			</h2>

			{isLoading ? (
				<ProductsLoading />
			) : (
				<div className="page-section-cards">
					{products?.map(
						({ _id, name, image_link, price, description }, key) => (
							<Card
								key={key}
								_id={_id}
								name={name}
								image_link={image_link}
								price={price}
								description={description}
							/>
						)
					)}
				</div>
			)}
		</div>
	);
};

export default SearchProductsList;
