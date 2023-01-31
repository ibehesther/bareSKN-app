import { Component } from "react";

class Images extends Component{

    // componentDidMount(){}
    render(){
        return(
            <div className="image-container">
                <img src={require(`../images/${this.props.imageType}5.jpg`)} alt=""  className="homepage-img fadeInOut" />
                <img src={require(`../images/${this.props.imageType}4.jpg`)} alt=""  className="homepage-img fadeInOut" />
                <img src={require(`../images/${this.props.imageType}3.jpg`)} alt=""  className="homepage-img fadeInOut" />
                <img src={require(`../images/${this.props.imageType}2.jpg`)} alt=""  className="homepage-img fadeInOut" />
                <img src={require(`../images/${this.props.imageType}1.jpg`)} alt=""  className="homepage-img fadeInOut" />
                
            </div>
        )
    }
}

export default Images