import { Component } from "react";
import { Breadcrumb } from "./Breadcrumb";
import Card from './Card';
import {ProductsLoading } from "./Loading";

export default class ProductsList extends Component{
    constructor(props){
        super(props);
        this.state={
            products: [],
        }
    }
    
    render(){
        this.pageNo = this.props.pageNo
        return(
            <div>
                {this.props.breadcrumb && <Breadcrumb/>}
                {
                    this.props.isLoading ?
                    <ProductsLoading/>
                    :
                    <div className="page-section-cards">
                        {
                        this.props.products.map(({
                            name, image_link, price, description}, key) => 
                            <Card
                            key={key}
                            name = {name}
                            image_link = {image_link}
                            price = {price}
                            description = {description}
                            />
                        )}
                    </div>
                }
            </div>

        );
    }
}