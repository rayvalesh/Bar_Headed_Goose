import React, { useState, useEffect } from "react";
import CrowdDetection from "./components/CrowdDetection";
import AgeStats from "./components/AgeState";
import jsonData from "./data/data.json";
import extractData from "./helper/extractData.jsx";
import Navbar from "./components/NavBar";
import DashboardHeader from "./components/DashboardHeader";
import PeopleCountRow from "./components/PeopleCountRow";
import BigCard from "./components/BigCard";
import EmojiGrid from "./components/EmojiGrid";

const App = () => {
	
	const [selectedTab, setSelectedTab] = useState("Total");
	const [maleCount, setMaleCount] = useState(0);
  	const [femaleCount, setFemaleCount] = useState(0);
	const [happyCount, sethappyCount] = useState(0);
  	const [surpriseCount, setsurpriseCount] = useState(0);
	const [neutralCount, setneutralCount] = useState(0);
  	const [angryCount, setangryCount] = useState(0);
	const [personCount, setpersonCount] = useState(0);

	const [maleCount1, setMaleCount1] = useState(0);
  	const [femaleCount1, setFemaleCount1] = useState(0);
	const [happyCount1, sethappyCount1] = useState(0);
  	const [surpriseCount1, setsurpriseCount1] = useState(0);
	const [neutralCount1, setneutralCount1] = useState(0);
  	const [angryCount1, setangryCount1] = useState(0);
	const [personCount1, setpersonCount1] = useState(0);

	//const [records, setRecords] = useState([]);
	//const [analyticsData, setAnalyticsData] = useState([]);
	const [ageData, setAgeData] = useState([]);
	const [ageData1, setAgeData1] = useState([]);

	const handleTabChange = (tab) => {
		setSelectedTab(tab);
	};

	function determineBooth(person1, person2) {
		if (person1 === (undefined || 0) && person2 === (undefined || 0)) {
		  return "-";
		} else if (person1 === undefined ) {
		  return "Booth 2";
		} else if (person2 === undefined ){
		  return "Booth 1";
		} else if (person1 >= person2){
		  return "Booth 1";
		}else {
		  return "Booth 2";
		}
	  }
	
	
	useEffect(() => {

		let subscribed = true;
		const interval= setInterval(()=>{
			console.log("started1")
			fetch('http://172.26.1.245/api/v1/react')
			.then(function (response) {
			return response.json();
			})
			.then(function (data) {
			console.log(data)
			console.log(extractData(data));
			const extractedData = extractData(data);

			setMaleCount(extractedData.males);
			setFemaleCount(extractedData.females);
			sethappyCount(extractedData.happy);
			setangryCount(extractedData.angry);
			setneutralCount(extractedData.neutral);
			setsurpriseCount(extractedData.surprise);
			setpersonCount(extractedData.person);
			setAgeData(extractedData.ageGrp);


			});
			
		},10000);
	
		return() => {
			clearInterval(interval);
			subscribed = false;
		}
		},[])

		useEffect(() => {
		let subscribed = true;
		const interval= setInterval(()=>{
			console.log("started2")
			fetch('http://172.26.1.243/api/v1/react')
			.then(function (response) {
			return response.json();
			})
			.then(function (data1) {
			console.log(data1)
			console.log(extractData(data1));
			const extractedData1 = extractData(data1);

			setMaleCount1(extractedData1.males);
			setFemaleCount1(extractedData1.females);
			sethappyCount1(extractedData1.happy);
			setangryCount1(extractedData1.angry);
			setneutralCount1(extractedData1.neutral);
			setsurpriseCount1(extractedData1.surprise);
			setpersonCount1(extractedData1.person);
			setAgeData1(extractedData1.ageGrp);

			});
			
		},10000);
	
		return() => {
			clearInterval(interval);
			subscribed = false;
		}
		}, []);

	return (
		<div className="bg-gray-900 flex flex-row">
			<Navbar />
			<div className="bg-gray-950 min-h-screen p-8 flex-1">
				<DashboardHeader />
				<PeopleCountRow
					selectedTab={selectedTab}
					onTabChange={handleTabChange}
				/>
				<div className="flex space-x-4 my-4 flex-row flex-grow-0 justify-evenly">
					<BigCard
						title="Max Traffic"
						value={determineBooth(personCount, personCount1)}
						backgroundColor={"bg-gradient-to-br from-yellow-400 to-orange-600"}
						isTotal={selectedTab === "Total"}
						max={true}
					/>
					<BigCard
						title="Total People Count"
						value={selectedTab === "Total" ? (personCount+personCount1) : "25"}
						backgroundColor={"bg-gradient-to-br from-purple-500 to-indigo-600"}
						isTotal={selectedTab === "Total"}
					/>
					<BigCard
						title="Average People Count"
						value={selectedTab === "Total" ? Math.round(personCount/2+personCount1/2) : "1"}
						backgroundColor={"bg-gradient-to-br from-pink-500 to-rose-600"}
						isTotal={selectedTab === "Total"}
					/>
				</div>
				<div className="mt-8 ">
					<div className="flex items-center">
						<div className="flex-1 ">
							<CrowdDetection camera={determineBooth(personCount, personCount1)} males={maleCount+maleCount1} females={femaleCount+femaleCount1} />
						</div>
					</div>
					<div className="flex items-center">
						<div className="w-1/2 h-full mt-8 mb-4">
							<h1 className="text-2xl font-bold mb-8 text-white">Age Stats</h1>
							<AgeStats
								ageGroups={ageData1}
							/>
						</div>
						<div className="w-1/2 mt-8 mb-4">
							<h1 className="text-2xl font-bold mb-8 text-white">Emotions</h1>
							<EmojiGrid happy={happyCount+happyCount1} angry={angryCount+angryCount1} neutral={neutralCount+neutralCount1} surprise={surpriseCount+surpriseCount1} />
						</div>
					</div>
				</div>
			</div>
			<div className="text-3xl flex flex-col justify-center text-white px-4 items-center bg-gradient-to-br from-blue-600 to-purple-600">
				<div className="vertical-text-container text-black">
					<div className="font-bold vertical-text mb-8 bg-gradient-to-r from-yellow-200 to-amber-300  stroke-amber-400 inline-block text-transparent bg-clip-text">
						EXPO
					</div>
					<div className="font-bold vertical-text mb-8 bg-gradient-to-r from-yellow-200 to-amber-300  stroke-amber-400 inline-block text-transparent bg-clip-text">
						EVENT
					</div>
					<div className="font-bold vertical-text mb-8 bg-gradient-to-r from-yellow-200 to-amber-300  stroke-amber-400 inline-block text-transparent bg-clip-text">
						MANAGEMENT
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
