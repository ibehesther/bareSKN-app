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
                {this.props.group_name && <Breadcrumb group_name={this.props.group_name}/>}
                {
                    this.props.isLoading ?
                    <ProductsLoading/>
                    :
                    <div className="page-section-cards">
                        { this.props.products &&
                        this.props.products.map(({
                           _id, name, image_link, price, description}, key) => 
                            <Card
                            key={key}
                            _id={_id}
                            name = {name}
                            image_link = {image_link}
                            price = {price}
                            description = {description}
                            group_name={this.props.group_name}
                            />
                        )}
                    </div>
                }
            </div>

        );
    }
}