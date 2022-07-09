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
                    <div>
                        <LandingNavigationBar toogleSearchTab={this.toogleSearchTab} 
                        toogleSideBar = {this.props.toogleSideBar} 
                        isSideBarOpen={this.props.isSideBarOpen}
                        />
                        <SearchNavigationBar toogleSearchTab={this.toogleSearchTab}/>
                    </div>
                    :
                    <LandingNavigationBar toogleSearchTab={this.toogleSearchTab} 
                    toogleSideBar = {this.props.toogleSideBar} 
                    isSideBarOpen={this.props.isSideBarOpen}
                    />
                }
            </nav>
        );

    }
}

export default NavigationBar