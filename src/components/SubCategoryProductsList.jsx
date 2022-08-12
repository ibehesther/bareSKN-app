import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductsList from "./ProductsList";

export default function SubCategoryProductsList(props){
    const location = useLocation();
    const { index, subCategoryProducts } = location.state;


    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
  
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/subcategories/subcat_${encodeURIComponent(subCategoryProducts)}_0${encodeURIComponent(index)}/products`)
        .then((res) => res.json())
        .then(({subCategory:name, products}) => {
            setIsLoading(false);
            setName(name);
            setProducts(products);
        }).catch(() => setIsLoading(true));
    }, [index, subCategoryProducts]);
    return (
        <div style={{width: "100%"}}>
            <section className="page-section">
                <span className="page-subsection-title">
                    <p>{name}</p>
                </span>
                <ProductsList isLoading={isLoading}
                products={products} breadcrumb={true}/>
            </section>
        </div>
    );
}