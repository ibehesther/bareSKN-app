import {Component} from 'react';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar';
;
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSideBarOpen : false
        }
    }
    toogleSideBar= () => {
        this.setState((state) => ({
            isSideBarOpen : !state.isSideBarOpen
        }));
    }
    render() {
        return(
            <div className='container'>
                <NavigationBar toogleSideBar={this.toogleSideBar}
                isSideBarOpen={this.state.isSideBarOpen}
                />
            
                {this.state.isSideBarOpen?
                    <SideBar 
                    toogleSideBar={this.toogleSideBar}
                    isSideBarOpen={this.state.isSideBarOpen}/> 
                    :
                    <main className="main-content">
                        <HomePage/>
                    </main>
                }
            </div>
        )
    }
}

export default App;
