import { Component } from "react";

class Images extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        const imgs = document.querySelectorAll('.homepage-img')
    
        
    }
    render(){
        return(
            <div className="image-container">
                <img src={require('../images/woman.jpg')} alt=""  className="homepage-img fadeInOut" />
                <img src={require('../images/products-texture.jpg')} alt=""  className="homepage-img fadeInOut" />
                <img src={require('../images/products.jpg')} alt=""  className="homepage-img fadeInOut" />
                <img src={require('../images/woman.jpg')} alt=""  className="homepage-img fadeInOut" />
                <img src={require('../images/products-texture.jpg')} alt=""  className="homepage-img fadeInOut" />
            </div>
        )
    }
}

export default Images