import { Link } from "react-router-dom";

export function Breadcrumb(props){
    return(
        <span>
           <Link to={'/'} >
                Home
            </Link>
            /
            <a onClick={() =>window.location.reload()}>
                Body Care
            </a>
        </span>
    );
}