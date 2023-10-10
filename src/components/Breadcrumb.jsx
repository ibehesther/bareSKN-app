import { Link } from "react-router-dom";

export function Breadcrumb(props) {
	return (
		<span className="breadcrumb">
			<Link to={"/"}>Home</Link>
			<span className="breadcrumb-divider">/</span>
			{props.group_name && props.name ? (
				<>
					<button onClick={() => window.history.go(-1)}>
						{props.group_name && props.group_name}
					</button>
					<span className="breadcrumb-divider">/</span>
					<button onClick={() => window.location.reload()} className="active">
						{props.group_name && props.name}
					</button>
				</>
			) : (
				<button onClick={() => window.location.reload()} className="active">
					{props.group_name && props.group_name}
				</button>
			)}
		</span>
	);
}
