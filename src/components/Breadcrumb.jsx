import { Link } from "react-router-dom";

export function Breadcrumb(props){
    return(
        <span className="breadcrumb">
           <Link to={'/'}>
                Home
            </Link>
            <span className="breadcrumb-divider">/</span>
            {props.group_name && props.name
            ?
            <>
                <a  onClick={() =>window.history.go(-1)} >
                    {props.group_name && props.group_name}
                </a>
                <span className="breadcrumb-divider">/</span>
                <a  onClick={() =>window.location.reload()} className='active'>
                    {props.group_name && props.name}
                </a>
            </> 
            :
            <a  onClick={() =>window.location.reload()} className='active'>
              {props.group_name && props.group_name}
            </a>}

        </span>
    );
}