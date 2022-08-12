import { useState } from 'react';

import HomePage from './components/HomePage';
import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar';

function App (){
   
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const toogleSideBar= () => {
        setIsSideBarOpen((prev) => !prev);
    }
    return(
        <div className='container'>
            <NavigationBar toogleSideBar={toogleSideBar}
            isSideBarOpen={isSideBarOpen}
            />
            {/* {isSideBarOpen? */}
                <SideBar 
                toogleSideBar={toogleSideBar}
                isSideBarOpen={isSideBarOpen}/> 
                
                <main className={`main-content
                 ${isSideBarOpen && "sidebar-hide"}`}>
                    <HomePage/>
                </main>
            {/* } */}
            {/* <main className="main-content">
                <SideBar toogleSideBar={toogleSideBar}
                isSideBarOpen={isSideBarOpen}/>
                <HomePage isSideBarOpen={isSideBarOpen}/>
            </main> */}
        </div>
    )
}

export default App;
