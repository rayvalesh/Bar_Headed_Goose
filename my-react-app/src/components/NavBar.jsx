import React from "react";
import {
	FaHome,
	FaClock,
	FaVideo,
	FaUserFriends,
	FaPhone,
	FaMap,
	FaExclamationTriangle,
} from "react-icons/fa";

const Sidebar = () => {
	return (
		<aside className=" text-gray-300 h-min-screen w-64 p-4 border-r shadow-2xl border-grey-400 ">
			{/* User information */}
			<div className="flex flex-col items-center mb-8">
				<img
					className="w-16 h-16 rounded-full mb-2"
					src="https://tjgurwara99.github.io/assets/img/avatar-icon.png" // Replace with the path to the real user image
					alt="User"
				/>
				<div className="text-center">
					<p className="font-semibold text-lg">John Doe</p>
					<p className="text-gray-300 text-sm">User Profile</p>
				</div>
			</div>

			{/* Navigation items */}
			<ul className="space-y-8 ml-8">
				<li>
					<a href="#" className="flex items-center">
						<FaHome className="mr-3" />
						<span className="text-lg">Home</span>
					</a>
				</li>
				<li>
					<a href="#" className="flex items-center">
						<FaClock className="mr-3" />
						<span className="text-lg">Attendance</span>
					</a>
				</li>
				<li>
					<a href="#" className="flex items-center">
						<FaVideo className="mr-3" />
						<span className="text-lg">Live Streaming</span>
					</a>
				</li>
				<li>
					<a href="#" className="flex items-center">
						<FaUserFriends className="mr-3" />
						<span className="text-lg">People Count</span>
					</a>
				</li>
				<li>
					<a href="#" className="flex items-center">
						<FaPhone className="mr-3" />
						<span className="text-lg">Calling Booth</span>
					</a>
				</li>
				<li>
					<a href="#" className="flex items-center">
						<FaMap className="mr-3" />
						<span className="text-lg">Heat Maps</span>
					</a>
				</li>
				<li>
					<a href="#" className="flex items-center">
						<FaExclamationTriangle className="mr-3" />
						<span className="text-lg">Emergency</span>
					</a>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
