import { Component } from "react";

class SearchTab extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="navbar-search-tab">
                <form action="/" className="search-tab">
                    <input type="text" name="Search" id="search-tab" className="search-tab" placeholder="Search"/>
                </form>
                <button id="cancel" onClick={this.props.toogleSearchTab}>CANCEL</button>
            </div>
        )
    }
}

export default SearchTab;