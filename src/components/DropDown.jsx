import React, { useRef } from "react"

export function SubDropDown(props){
    const dropdownbar1 = useRef();
    const dropdownbar2 = useRef();
    const {subCategoryDropDown, 
        setSubCategoryDropDown, 
        setSubCategoryIndex,
        setSubCategoryDropDownList
    } = props

    const showMore = () => {
        setSubCategoryDropDownList.map((dropdown, index) => {
            var setDropDown = dropdown;
            if(index !== props.index){
                return setDropDown(false);
            }
        })
        setSubCategoryIndex(props.index + 1);
        setSubCategoryDropDown((prev) => !prev);
        if (subCategoryDropDown) {
            dropdownbar1.current.style.animationName = 'showmore2'
            dropdownbar2.current.style.animationName = 'showmore1'
        } else {
            dropdownbar1.current.style.animationName = 'showmore1'
            dropdownbar2.current.style.animationName = 'showmore2'
        }
        
    }
    return(
        <>
            <div className="sidebar-show-more-icon" 
                onClick= {showMore}
                >
                <div className="sidebar-show-more-line-1" ref={dropdownbar1}></div>
                <div className="sidebar-show-more-line-2" ref={dropdownbar2}></div>
            </div>
        </>
    )
}


export const DropDown = React.forwardRef((props, ref) => (
    <div className="sidebar-show-more-icon" 
        onClick= {props.showMore}>
        <div className={`sidebar-show-more-line-1 `}  ref={ref.dropdownbar1} ></div>
        <div className="sidebar-show-more-line-2" ref={ref.dropdownbar2}></div>
    </div>
));