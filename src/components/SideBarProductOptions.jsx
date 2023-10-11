import { useState, useEffect } from "react";
import { SubDropDown } from "./DropDown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function SideBarProductsOptions(props) {
	const { isLoading } = useSelector(
		(store) => store.products
	);
	const [categories, setCategories] = useState([]);
	const [subCategories, setSubCategories] = useState([]);
	const subCategorySlugs = ["br", "con", "skn"];

	const [subCategoryDropDown1, setSubCategoryDropDown1] = useState(false);
	const [subCategoryDropDown2, setSubCategoryDropDown2] = useState(false);
	const [subCategoryDropDown3, setSubCategoryDropDown3] = useState(false);
	const [subCategoryIndex, setSubCategoryIndex] = useState(1);
	const subCategoryDropDownList = [
		subCategoryDropDown1,
		subCategoryDropDown2,
		subCategoryDropDown3,
	];

	const setSubCategoryDropDownList = [
		setSubCategoryDropDown1,
		setSubCategoryDropDown2,
		setSubCategoryDropDown3,
	];

	const setDropDownUnit = (dropIndex = null) => {
		if (dropIndex !== null) {
			setSubCategoryDropDownList.forEach((setDropDown, index) => {
				if (index !== dropIndex) {
					return setDropDown(false);
				}
				return setDropDown((prev) => !prev);
			});
			setSubCategoryIndex(dropIndex + 1);
		} else {
			setSubCategoryDropDownList.forEach((setDropDown, index) => {
				return setDropDown(false);
			});
		}
	};

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/categories`)
			.then((res) => res.json())
			.then(({ categories }) => {
				if (!categories) throw Error();

				setCategories(categories);
			})
			.catch(() => console.log);
		fetch(
			`${
				process.env.REACT_APP_API_URL
			}/api/v1.0/subcategories/cat_0${encodeURIComponent(subCategoryIndex)}`
		)
			.then((res) => res.json())
			.then(({ subcategories }) => {
				if (!subcategories) throw Error();

				setSubCategories(subcategories);
			})
			.catch(() => console.log);
	}, [subCategoryIndex]);


	return (
		<>
			<ul
				className={`sidebar-products-option sidebar-product ${
					props.show && "sidebar-show"
				}`}
			>
				{isLoading ? (
					<div className="sub-products"> Loading... </div>
				) : (
					categories &&
					categories.map(({ name, key }, index) => {
						return (
							<div key={key}>
								<li className="sub-products">
									<span className="sidebar-products-title">By {name}</span>
									<SubDropDown
										index={index}
										showMore={subCategoryDropDownList[index]}
										setShowMore={() => setDropDownUnit(index)}
									/>
								</li>
								<ul
									className={`sidebar-products-option ${
										subCategoryDropDownList[index] && "sidebar-show"
									}`}
								>
									{subCategories &&
										subCategories.map(({ name, key }, sub_index) => (
											<li className="sub-products" key={key}>
												<Link
													onClick={() => {
														props?.toogleSideBar?.();
														props.hideProducts();
														setDropDownUnit();
													}}
													to={`subcategories/subcat_${encodeURIComponent(
														subCategorySlugs[index]
													)}_0${encodeURIComponent(sub_index + 1)}/products`}
													state={{
														key,
														index: sub_index + 1,
														subCategory: subCategorySlugs[index],
													}}
												>
													<em
														className="sidebar-products-title"
														style={{ padding: "0 1em" }}
													>
														{name}
													</em>
												</Link>
											</li>
										))}
								</ul>
							</div>
						);
					})
				)}
			</ul>
			<div
				className={`${props.show ? "dropdown-overlay" : ""}`}
				onClick={props.hideProducts}
			></div>
		</>
	);
}

export default SideBarProductsOptions;
