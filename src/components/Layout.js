import React, { Fragment, useState } from "react";
import Header from "./Header";
import Footer from "./Footer.js";
import Dropdown from "./Dropdown";
import Video from "./Video";
import { useSiteMetadata } from "../hooks/useSiteMetaData";

const Layout = ({ children }) => {
	let [dropDownState, setDropDownState] = useState(false);
	let [dropDownData, setDropDownData] = useState({ name: "", data: [] });
	const { github, linkedIn, projects } = useSiteMetadata();

	let handleToggle = (e) => {
		e.preventDefault();
		if (e.target.title === "open") {
			let data = e.target.textContent === "Projects" ? { name: "Projects", data: projects } : { name: "Blogs", data: [] };
			setDropDownData(data);
		}
		setDropDownState(!dropDownState);
	};

	return (
		<Fragment>
			<Video />
			<main className="wrapper">
				<Header dropDownState={dropDownState} handleClick={handleToggle} />
				<Dropdown dropDownState={dropDownState} data={dropDownData} handleClick={handleToggle} />
				<section className="banner">{children}</section>
				<Footer socialMedia={{ github, linkedIn }} />
			</main>
		</Fragment>
	);
};

export default Layout;
