import React, { useEffect, useRef } from "react";

export function SubDropDown({ showMore, setShowMore }) {
	const dropdownbar1 = useRef();
	const dropdownbar2 = useRef();
	useEffect(() => {
		if (showMore) {
			dropdownbar1.current.style.animationName = "showmore1";
			dropdownbar2.current.style.animationName = "showmore2";
		} else {
			dropdownbar1.current.style.animationName = "showmore2";
			dropdownbar2.current.style.animationName = "showmore1";
		}
	}, [showMore]);

	return (
		<>
			<div className="sidebar-show-more-icon" onClick={setShowMore}>
				<div className="sidebar-show-more-line-1" ref={dropdownbar1}></div>
				<div className="sidebar-show-more-line-2" ref={dropdownbar2}></div>
			</div>
		</>
	);
}

export const DropDown = React.forwardRef((props, ref) => (
	<div className="sidebar-show-more-icon" onClick={props.showMore}>
		<div className={`sidebar-show-more-line-1 `} ref={ref.dropdownbar1}></div>
		<div className="sidebar-show-more-line-2" ref={ref.dropdownbar2}></div>
	</div>
));
