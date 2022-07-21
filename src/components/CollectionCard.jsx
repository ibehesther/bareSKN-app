import { Component } from "react";
import { Link } from "react-router-dom";

class CollectionCard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Link to={'/asian'}>
                <div className="collection-card-parent">
                    <div className="collection-card-child"
                        id ={`collection-card-${this.props.collection_id}`}
                       >
                    </div>
                    <p className="collection-card-name">
                            ASIAN PRODUCTS
                        </p>
                </div>
            </Link>
        )
    }
}

export default CollectionCard;