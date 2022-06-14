import {Component} from "react";
import LandingNavigationBar from "./LandingNavigationBar";
import SearchNavigationBar from "./SearchNavigationBar";

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearchTabOpen : false
        }
        this.toogleSearchTab = this.toogleSearchTab.bind(this)
    }
    toogleSearchTab = () => {
        this.setState(
            (state) => ({isSearchTabOpen : !state.isSearchTabOpen})
            )
    }
    render() {
        return (
            <nav>
                {
                    this.state.isSearchTabOpen 
                    ?
                    <SearchNavigationBar toogleSearchTab={this.toogleSearchTab}/>
                    :
                    <LandingNavigationBar toogleSearchTab={this.toogleSearchTab} 
                    toogleSideBar = {this.props.toogleSideBar} 
                    isSideBarOpen={this.props.isSideBarOpen}
                    />
                }
                
                {/* <SearchNavigationBar/> */}
               
            </nav>
        );

    }
}

export default NavigationBar