import React, { useState, useEffect } from "react";
import Images from "./Images";
import Card from "./Card";
import CollectionCard from "./CollectionCard";
import ProductsList from "./ProductsList";
import { CollectionsLoading } from "./Loading";
import {
	getCollections,
	getProducts,
} from "../redux/features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";

function LandingPage() {
	const dispatch = useDispatch();
	const { products, collections, isLoading } = useSelector(
		(store) => store.products
	);
	const [paginatedProducts, setPaginatedProducts] = useState([]);
	// const [highestRatedProducts, setHighestRatedProducts] = useState([]);
	const [limit] = useState(12);
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(0);

	useEffect(() => {
		dispatch(getProducts());
		dispatch(getCollections());
	}, []);

	useEffect(() => {
		const startIndex = (page - 1) * limit;
		const endIndex = startIndex + limit;

		const pageProducts = products.slice(startIndex, endIndex);
		setPaginatedProducts(pageProducts);

		const max = Math.ceil(products.length / limit);
		setMaxPage(max);
	}, [page, products]);

	const next = () => {
		setPage((pageNo) => pageNo + 1);
	};
	const prev = () => {
		setPage((pageNo) => pageNo - 1);
	};
	const hey = Array.from({ length: maxPage }).map((_, x) => x++);
	console.log(hey, maxPage);

	return (
		<div className="page-container">
			<Images imageType="skincare" />
			<section id="collection" className="collection page-section">
				<p className="page-section-title">OUR COLLECTIONS</p>
				{isLoading ? (
					<CollectionsLoading />
				) : (
					<div className="page-section-cards">
						{collections &&
							collections.map((collection) => (
								<CollectionCard
									image_link={collection.image_link}
									name={collection.name}
									collection_key={collection.key}
									key={collection.key}
								/>
							))}
					</div>
				)}
			</section>
			<section className="page-section best">
				<p>BareSKN's MOST WANTED</p>
				<p>CHECK OUT OUR BEST SELLING PRODUCTS</p>

				{isLoading ? (
					<CollectionsLoading />
				) : (
					<div>
						{products &&
							products.map((product, key) => (
								<Card
									key={key}
									name={product.name}
									description={product.description}
									image_link={product.image_link}
									price={product.price}
									rating={product.rating}
								/>
							))}
					</div>
				)}
			</section>
			<div>
				<section className="page-section" id="a">
					<span className="page-subsection-title">
						<p>ALL PRODUCTS</p>
					</span>
					<ProductsList
						next={next}
						prev={prev}
						pageNo={page}
						products={paginatedProducts}
						isLoading={isLoading}
						maxPage={maxPage}
					/>
					<div className="products-navigation">
						{!isLoading && (
							<>
								{
									<button onClick={prev} disabled={page === 1}>
										&lt;
									</button>
								}
								{Array.from({ length: maxPage }).map((_, x) => {
									let current = x + 1;
									if (current === page)
										return <span className="current-page">{current}</span>;
									return <span>{current}</span>;
								})}
								{
									<button onClick={next} disabled={page === maxPage}>
										&gt;
									</button>
								}
							</>
						)}
					</div>
				</section>
			</div>
		</div>
	);
}

export default LandingPage;
