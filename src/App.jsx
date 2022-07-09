import {Component} from 'react';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import NavigationBar from './Components/NavigationBar';
import SideBar from './Components/SideBar';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSideBarOpen : false
        }
        this.toogleSideBar = this.toogleSideBar.bind(this);
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
                    <SideBar/> 
                    :
                    <main className="main-content">
                        <HomePage/>
                    </main>
                }
                
                <Footer/>
            </div>
            
        )
    }
}

export default App;
