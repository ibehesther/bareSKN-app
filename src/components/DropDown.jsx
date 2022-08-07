import { useRef } from "react"

export function DropDown(props){
    const dropdownbar1 = useRef();
    const dropdownbar2 = useRef();

    const showMore = () => {
        // this.setState((state, props) => ({productsDropDown : !state.productsDropDown}))
        // if (this.state.productsDropDown) {
        //     this.dropdownbar1.current.style.animationName = 'showmore2'
        //     this.dropdownbar2.current.style.animationName = 'showmore1'
        // } else {
        //     this.dropdownbar1.current.style.animationName = 'showmore1'
        //     this.dropdownbar2.current.style.animationName = 'showmore2'
        // }
        
    }
    return(
        <div className="sidebar-show-more-icon" 
            onClick= {showMore}
            >
            <div className="sidebar-show-more-line-1" ref={dropdownbar1}></div>
            <div className="sidebar-show-more-line-2" ref={dropdownbar2}></div>
        </div>
    )
}