import React from "react";

const BigCard = ({ title, value, backgroundColor, isTotal, max }) => {
	return (
		<div
			className={`rounded p-4 shadow-md flex flex-col items-start justify-center ${backgroundColor} w-1/2`}
		>
			<p className="text-white text-lg font-bold">{title}</p>
			<p className="text-white text-4xl mt-2">{value}</p>
			<p className="text-white text-sm mt-2 text-end ml-auto">
				{isTotal ? "Total" : "Last 30 min"}
			</p>
		</div>
	);
};
export default BigCard;
