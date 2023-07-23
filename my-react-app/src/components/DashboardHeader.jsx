import React from "react";
import logo from "../assets/logo.png";
const DashboardHeader = () => {
	return (
		<div className="flex justify-between items-center">
			<h1 className="text-4xl font-bold text-white my-4 flex-1">Dashboard</h1>
			<img src={logo} width={120} />
		</div>
	);
};

export default DashboardHeader;
