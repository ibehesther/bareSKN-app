import { useCallback } from "react";
import { useState, useRef, useEffect } from "react";
import { DropDown, SubDropDown } from "./DropDown";


function SideBarProductsOptions(props) {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [categoryDropDown, setCategoryDropDown] = useState(false);

   
    // const [subCategoryDropDown, setSubCategoryDropDown] = useState(false)
    const [subCategoryDropDown1, setSubCategoryDropDown1] = useState(false)
    const [subCategoryDropDown2, setSubCategoryDropDown2] = useState(false)
    const [subCategoryDropDown3, setSubCategoryDropDown3] = useState(false)
    const [subCategoryIndex, setSubCategoryIndex] = useState(1);
    const subCategoryDropDownList=[
        subCategoryDropDown1, subCategoryDropDown2, subCategoryDropDown3
    ]
    const setSubCategoryDropDownList=[
        setSubCategoryDropDown1, setSubCategoryDropDown2, setSubCategoryDropDown3
    ]

    
    const dropdownbar1 = useRef();
    const dropdownbar2 = useRef();
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/categories`)
        .then((res) => res.json())
        .then((categories) => {
            setCategories(categories);
        });
        fetch(`${process.env.REACT_APP_API_URL}/api/v1.0/subcategories/cat_0${encodeURIComponent(subCategoryIndex)}`)
        .then((res) => res.json())
        .then(({subCategories}) => {
            setSubCategories(subCategories);
        })
    }, [subCategoryIndex]);

    const showMore = (index) => {
        setCategoryDropDown((prev) => !prev);
        
        if (categoryDropDown) {
            dropdownbar1.current.style.animationName = 'showmore2'
            dropdownbar2.current.style.animationName = 'showmore1'
        } else {
            dropdownbar1.current.style.animationName = 'showmore1'
            dropdownbar2.current.style.animationName = 'showmore2'
        }
    }
    
    return(
        <ul className="sidebar-products-option" >
            {categories.map(({name, key}, index) => 
            < >
                <li className="sub-products" key={key}>
                    <span className="sidebar-products-title">By {name}</span>
                    <SubDropDown index={index} 
                    subCategoryDropDownList={subCategoryDropDownList}
                    setSubCategoryDropDownList={setSubCategoryDropDownList}
                    subCategoryDropDown={subCategoryDropDownList[index]} 
                    setSubCategoryDropDown={setSubCategoryDropDownList[index]}
                    setSubCategoryIndex={setSubCategoryIndex}/>
                    {/* <DropDown showMore={showMore} ref={{dropdownbar1, dropdownbar2}}/> */}
                </li>
                {subCategoryDropDownList[index] &&
                <ul className="sidebar-products-option" >
                    {subCategories.map(({name, key}, index) => 
                    <>
                        <li className="sub-products" key={key}>
                            <span className="sidebar-products-title">{name}</span>
                        </li>
                    </>
                    )}
                
                </ul>}
            </>
            )}
           
        </ul>
    );
}

export default SideBarProductsOptions;