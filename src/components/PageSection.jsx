import React, {Suspense, Component} from "react";
import Images from "./Images";
const Card = React.lazy(() => 
import('./Card'));
const CollectionCard = React.lazy(() => 
import( "./CollectionCard"));


class PageSection extends Component {
    constructor(props) {
        super(props);
        this.state={
            collections: [],
            products: []
        }
    }
    collections = fetch('http://127.0.0.1:8080/api/v1.0/collections')
        .then(res => res.json())
        .then((collections) => {
            this.setState({collections});
        })
        .catch(console.log);
    products = fetch('http://127.0.0.1:8080/api/v1.0/products?limit=10&page=1')
        .then(res => res.json())
        .then((products) => {
            this.setState({products});
        })
        .catch(console.log);
    // fetch('http://127.0.0.1:8080/api/v1.0/collections')
        // .then(res => res.json())
        // .then((collections) => {
        //     this.setState({collections})
        // });
    render() {
        return(
            <div className="page-container">
                <Images imageType='skincare'/>
                <section className="page-section">
                    <span className="page-section-title">OUR COLLECTIONS</span>
                    <div className="page-section-cards">
                        {this.state.collections.map((collection, key) => 
                            <Suspense fallback={<div>Loading...</div>}>
                                <CollectionCard 
                                image_link= {collection.image_link}
                                name= {collection.name}
                                key= {key}
                                />
                            </Suspense>
                        )}
                    </div>
                </section>
                <section className="page-section best">
                    <p>BareSKN's  MOST WANTED</p>
                    <p>CHECK OUT OUR BEST SELLING PRODUCTS</p>
                    <div>
                    {this.state.products.map((product, key) => 
                            <Suspense fallback={<div>Loading...</div>}>
                                <Card
                                key={key}
                                name = {product.name}
                                image_link = {product.image_link}
                                price = {product.price}
                                rating = {4} />
                            </Suspense>
                        )}
                    </div>
                </section>
                <section className="page-section">
                    <span className="page-subsection-title">
                        <span>NEW ARRIVALS</span>
                    </span>
                    <div className="page-section-cards">
                        {this.state.products.map((product, key) => 
                            <Suspense fallback={<div>Loading...</div>}>
                                <Card
                                key={key}
                                name = {product.name}
                                image_link = {product.image_link}
                                price = {product.price} />
                            </Suspense>
                        )}
                    </div>
                </section>
            </div>
            
            
        );
    }

}

export default PageSection;