import {Component} from "react";
import Card from "./Card";
import CollectionCard from "./CollectionCard";
import Images from "./Images";

class PageSection extends Component {
    constructor(props) {
        super(props);
        this.state={
            collection_id: [1, 2, 3, 4]
        }
    }
    
    render() {
        return(
            <div className="page-container">
                <Images imageType='skincare'/>
                <section className="page-section">
                    <span className="page-section-title">OUR COLLECTIONS</span>
                    <div className="page-section-cards">
                        {this.state.collection_id.map((id) => 
                            <CollectionCard 
                            id={id}
                            collection_id={id}/>
                        )}
                    </div>
                </section>
                <section className="page-section best">
                    <p>BareSKN's  MOST WANTED</p>
                    <p>CHECK OUT OUR BEST SELLING PRODUCTS</p>
                    <div>
                        <Card rating= {4}/>
                        <Card rating= {4}/>
                        <Card rating= {4}/>
                        <Card rating= {4}/>
                        <Card rating= {4}/>
                    </div>
                </section>
                <section className="page-section">
                    <span className="page-subsection-title">
                        <span>NEW ARRIVALS</span>
                    </span>
                    <div className="page-section-cards">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </section>
            </div>
            
            
        );
    }

}

export default PageSection;