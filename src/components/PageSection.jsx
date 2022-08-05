import React, {Suspense, Component} from "react";
import Images from "./Images";
import Card from './Card';
import CollectionCard from "./CollectionCard";
import ProductsList from "./ProductsList";


class PageSection extends Component {
    constructor(props) {
        super(props);
        this.state={
            collections: [],
            products: [],
            isLoading: false,
            pageNo: 1
        }
    }
    
    componentDidMount(){
        fetch('http://127.0.0.1:8080/api/v1.0/collections')
        .then(res => res.json())
        .then((collections) => {
            this.setState({collections});
        })
        .catch(console.log);

        fetch(`http://127.0.0.1:8080/api/v1.0/products?limit=10&page=${encodeURIComponent(this.state.pageNo)}`)
        .then(res => res.json())
        .then((products) => {
            this.setState({isLoading: false});
            this.setState({products});
        })
        .catch((error) => {
            this.setState({isLoading: true})
        });
        fetch(`http://127.0.0.1:8080/api/v1.0/products?limit=10&page=${encodeURIComponent(this.state.pageNo)}`)
        .then(res => res.json())
        .then((products) => {
            this.setState({isLoading: false});
            this.setState({products});
        })
        .catch((error) => {
            this.setState({isLoading: true})
        });
    // fetch('http://127.0.0.1:8080/api/v1.0/collections')
        // .then(res => res.json())
        // .then((collections) => {
        //     this.setState({collections})
        // });
    }
    // componentDidUpdate(){
    //     fetch(`http://127.0.0.1:8080/api/v1.0/products?limit=10&page=${encodeURIComponent(this.state.pageNo)}`)
    //     .then(res => res.json())
    //     .then((products) => {
    //         this.setState({isLoading: false});
    //         this.setState({products});
    //     })
    //     .catch((error) => {
    //         this.setState({isLoading: true})
    //     });
    // }
        
    next = () => {
        this.setState((state) => ({pageNo: state.pageNo + 1}))
    }
    prev = () => {
        if(this.state.pageNo > 1){
            this.setState((state) => ({pageNo: state.pageNo - 1}))
        }
        
    }

    render() {
        
        return(
            <div className="page-container">
                <Images imageType='skincare'/>
                <section className="page-section">
                    <p className="page-section-title">OUR COLLECTIONS</p>
                    <div className="page-section-cards">
                        {
                            this.state.isLoading ?
                            <div>Loading...</div> 
                            :
                            this.state.collections.map((collection, key) => 
                            <CollectionCard 
                            image_link= {collection.image_link}
                            name= {collection.name}
                            key= {key}
                            />)
                        }
                    </div>
                </section>
                <section className="page-section best">
                    <p>BareSKN's  MOST WANTED</p>
                    <p>CHECK OUT OUR BEST SELLING PRODUCTS</p>
                    <div>
                    {
                            this.state.isLoading ?
                            <div>Loading...</div> 
                            :
                            this.state.products.map((product, key) => 
                                <Card
                                key={key}
                                name = {product.name}
                                image_link = {product.image_link}
                                price = {product.price} 
                                rating = {4}/>
                            )
                        }
                    </div>
                </section>
                <ProductsList next= {this.next} prev={this.prev} 
                pageNo={this.state.pageNo} products={this.state.products} isLoading={this.state.isLoading}/>
            </div>
        );
    }

}

export default PageSection;