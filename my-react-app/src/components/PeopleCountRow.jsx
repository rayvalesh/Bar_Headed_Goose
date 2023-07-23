import React from "react";

const PeopleCountRow = ({ selectedTab, onTabChange }) => {
	return (
		<div className="flex w-full my-4 flex-row justify-between">
			<div className="text-white text-2xl font-bold ">Live People Count</div>
			<div className=" flex items-center space-x-4">
				<button
					className={`px-4 py-2 rounded ${
						selectedTab === "Total"
							? "bg-blue-600 text-white"
							: "bg-blue-200 text-black"
					}`}
					onClick={() => onTabChange("Total")}
				>
					Total
				</button>
				<button
					className={`px-4 py-2 rounded ${
						selectedTab === "Last 30 min"
							? "bg-blue-600 text-white"
							: "bg-blue-200 text-black"
					}`}
					onClick={() => onTabChange("Last 30 min")}
				>
					Last 30 min
				</button>
			</div>
		</div>
	);
};

export default PeopleCountRow;
