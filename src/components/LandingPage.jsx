import React, {useState, useEffect } from "react";
import Images from "./Images";
import Card from './Card';
import CollectionCard from "./CollectionCard";
import ProductsList from "./ProductsList";
import {CollectionsLoading } from "./Loading";


function LandingPage(){
    // const { isLoading: loading, id } = useSelector((store) => store.cart);
   
    const [collections, setCollections] = useState([]);
    const [products, setProducts] = useState([]);
    const [highestRatedProducts, setHighestRatedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [maxPage, setMaxPage] = useState(0);
    useEffect(() => {
        const getCollections = fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/collections`)
        .then(res => res.json());

        const getPaginatedProducts = fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/products?limit=8&page=${encodeURIComponent(pageNo)}`)
        .then(res => res.json());

        const getHighestRatedProducts = fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/products?rating=highest`)
        .then(res => res.json());

        Promise.all([getCollections, getPaginatedProducts, getHighestRatedProducts])
        .then((value) => {
            var collections = value[0];
            var {products} = value[1];
            var {totalLength} = value[1];
            var {limit} = value[1];
            var {products: highestRatedProducts} = value[2];
            var maxPage = Math.ceil(totalLength / limit);
            setIsLoading(false);
            setCollections(collections);
            setProducts(products);
            setMaxPage(maxPage);
            setHighestRatedProducts(highestRatedProducts);
        }).catch((err) => {
            setIsLoading(true);
        });
    }, [pageNo]);

    const next = () => {
        setPageNo((pageNo) => pageNo+1)
    }
    const prev = () => {
       setPageNo((pageNo) => pageNo-1)
    }

    return(
        <div className="page-container">
            <Images imageType='skincare'/>
            <section id="collection" className="collection page-section">
                <p className="page-section-title">OUR COLLECTIONS</p>
                    {
                        isLoading ?
                        <CollectionsLoading/>
                        :
                        <div className="page-section-cards">
                            {collections.map((collection) => 
                            <CollectionCard 
                            image_link= {collection.image_link}
                            name= {collection.name}
                            collection_key = {collection.key}
                            key= {collection.key}
                            />)}
                        </div>
                    }
                
            </section>
            <section className="page-section best">
                <p>BareSKN's  MOST WANTED</p>
                <p>CHECK OUT OUR BEST SELLING PRODUCTS</p>
                
                {
                    isLoading ?
                    <CollectionsLoading/>
                    :
                    <div>
                        {highestRatedProducts.map((product, key) => 
                            <Card
                            key={key}
                            name = {product.name}
                            description = {product.description}
                            image_link = {product.image_link}
                            price = {product.price} 
                            rating = {product.rating}/>
                        )}
                    </div>
                }
                
            </section>
            <div>
                <section className="page-section" id="a">
                    <span className="page-subsection-title">
                        <p>ALL PRODUCTS</p>
                    </span>
                    <ProductsList next= {next} prev={prev} 
                    pageNo={pageNo} products={products}
                    isLoading={isLoading} maxPage={maxPage}/>
                    <div className="products-navigation">
                        {!isLoading &&
                        <>
                            <button onClick={prev}
                            disabled={pageNo === 1 ? true : false}> 
                                &lt;
                            </button>
                            <span>{pageNo}</span>
                            <button onClick={next}
                            disabled={pageNo === maxPage ? true : false}>
                                &gt;
                            </button>
                        </>}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default LandingPage;