import { Component } from "react";
import { Link } from "react-router-dom";

class CollectionCard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {name, image_link} = this.props;
        return(
            <Link to={'/asian'}>
                <div className="collection-card-parent">
                    <div className="collection-card-child"
                    style={{backgroundImage: `url(${image_link})`}}
                    >
                    </div>
                    <p className="collection-card-name">
                            {name}
                        </p>
                </div>
            </Link>
        )
    }
}

export default CollectionCard;