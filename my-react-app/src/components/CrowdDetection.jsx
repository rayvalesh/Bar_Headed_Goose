import React from "react";
import CircularProgress from "./CircularProgress";

import { FiArrowUpRight } from "react-icons/fi";
const CrowdDetection = ({ males, females, camera }) => {
	return (
		<div className="flex justify-between items-center bg ">
			<div className="p-4 rounded-lg shadow-lg flex items-center gap-4">
				<div className="flex items-center">
					<CircularProgress progress={camera} type={"Camera"} />

					<h1 className="text-2xl ml-4 font-bold text-white mb-4">
						Crowd Detection
					</h1>
				</div>
			</div>
			<div className="flex flex-1 justify-around items-center">
				<div className="p-4 rounded-lg shadow-lg ">
					<div className="flex items-center">
						<CircularProgress progress={males} type={"Males"} />
						<span className="text-2xl font-bold mb-2 text-white ml-4">
							Male
						</span>
					</div>
				</div>
				<div className="p-4 rounded-lg shadow-lg">
					<div className="flex items-center">
						<CircularProgress progress={females} type={"female"} />
						<span className="text-2xl font-bold mb-2 text-white ml-4">
							Female
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CrowdDetection;
