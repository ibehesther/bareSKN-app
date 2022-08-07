import { Component } from "react";
import { Breadcrumb } from "./Breadcrumb";
import Card from './Card';

export default class ProductsList extends Component{
    constructor(props){
        super(props);
        this.state={
            products: [],
        }
    }
    componentDidMount(){
        
    }
    
    render(){
        this.pageNo = this.props.pageNo
        return(
            <div>
                {this.props.breadcrumb && <Breadcrumb/>}
                <div className="page-section-cards">
                    {
                        this.props.isLoading ?
                        <div>Loading...</div> 
                        :
                        this.props.products.map(({
                            name, image_link, price, description}, key) => 
                            <Card
                            key={key}
                            name = {name}
                            image_link = {image_link}
                            price = {price}
                            description = {description}
                            />
                        )
                    }
                </div>
                
            </div>

        );
    }
}