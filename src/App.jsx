import { useState } from "react";
// import { Cloudinary } from "@cloudinary/url-gen";
// import { AdvancedImage, responsive, accessibility } from "@cloudinary/react";
// import { fill } from "@cloudinary/url-gen/actions/resize";
import HomePage from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";

function App() {
	// const cld = new Cloudinary({ cloud: { cloudName: "ibehesther" } });
	// const myImage = cld.image("cld-sample");

	const [isSideBarOpen, setIsSideBarOpen] = useState(false);
	const toogleSideBar = () => {
		setIsSideBarOpen((prev) => !prev);
	};
	return (
		<div className="container">
			{/* <div>
				<AdvancedImage
					cldImg={myImage}
					plugins={[responsive({ steps: 200 })]}
                    // plugins={[responsive(), accessibility()]}
				/>
			</div> */}
			<NavigationBar
				toogleSideBar={toogleSideBar}
				isSideBarOpen={isSideBarOpen}
			/>
			<main className="main-content">
				<SideBar toogleSideBar={toogleSideBar} isSideBarOpen={isSideBarOpen} />
				<HomePage />
			</main>
		</div>
	);
}

export default App;
