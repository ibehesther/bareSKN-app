import React, {Component} from "react";
import Images from "./Images";
import Card from './Card';
import CollectionCard from "./CollectionCard";
import ProductsList from "./ProductsList";
import {CollectionsLoading } from "./Loading";


class PageSection extends Component {
    constructor(props) {
        super(props);
        this.state={
            collections: [],
            products: [],
            isLoading: true,
            pageNo: 0,
            maxPage: 0
        }
    }
    
    componentDidMount(){
        const getCollections = fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/collections`)
        .then(res => res.json());

        const getPaginatedProducts = fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/products?limit=6&page=1`)
        .then(res => res.json());

        Promise.all([getCollections, getPaginatedProducts])
        .then((value) => {
            var collections = value[0];
            var {products} = value[1];
            var {totalLength} = value[1];
            var {limit} = value[1];
            var maxPage = Math.ceil(totalLength / limit);
            this.setState({isLoading: false});
            this.setState({collections});
            this.setState({products});
            this.setState({maxPage});
            this.setState({pageNo: 1});
        }).catch(() => {
            this.setState({isLoading: true});
        });
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextState.pageNo !== this.state.pageNo){
            return true;
        }else{
            return false;
        }
    }

    componentDidUpdate(){
        fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/products?limit=6&page=${encodeURIComponent(this.state.pageNo)}`)
        .then(res => res.json())
        .then(({products}) => {
            this.setState({isLoading: false});
            this.setState({products});
        })
        .catch(() => {
            this.setState({isLoading: true})
        });
    }

    next = () => {
        this.setState((state) => ({pageNo: state.pageNo + 1}))
    }
    prev = () => {
       this.setState((state) => ({pageNo: state.pageNo - 1}))
    }

    render() {
        
        return(
            <div className="page-container">
                <Images imageType='skincare'/>
                <section id="collection" className="collection page-section">
                    <p className="page-section-title">OUR COLLECTIONS</p>
                        {
                            this.state.isLoading ?
                            <CollectionsLoading/>
                            :
                            <div className="page-section-cards">
                            {this.state.collections.map((collection) => 
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
                        this.state.isLoading ?
                        <CollectionsLoading/>
                        :
                        <div>
                            {this.state.products.map((product, key) => 
                                <Card
                                key={key}
                                name = {product.name}
                                image_link = {product.image_link}
                                price = {product.price} 
                                rating = {4}/>
                            )}
                        </div>
                    }
                    
                </section>
                <div>
                    <section className="page-section" id="a">
                        <span className="page-subsection-title">
                            <p>NEW ARRIVALS</p>
                        </span>
                        <ProductsList next= {this.next} prev={this.prev} 
                        pageNo={this.state.pageNo} products={this.state.products}
                        isLoading={this.state.isLoading} maxPage={this.state.maxPage}/>
                        <div className="products-navigation">
                            {!this.state.isLoading &&
                            <>
                                <button onClick={this.prev}
                                disabled={this.state.pageNo === 1 ? true : false}> 
                                - 
                                </button>
                                <span>{this.state.pageNo}</span>
                                <button onClick={this.next}
                                disabled={this.pageNo === this.state.maxPage ? true : false}>
                                    + 
                                </button>
                            </>}
                        </div>
                    </section>
                </div>
            </div>
        );
    }

}

export default PageSection;