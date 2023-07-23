import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const AgeStats = ({ ageGroups }) => {
	const chartData = {
		labels: ageGroups.map((group) => group.range),
		datasets: [
			{
				label: "Number of People",
				data: ageGroups.map((group) => group.count),
				backgroundColor: [
					// Green
					"#2196F3", // Red
					"#FF4081",
					"#4CAF50",
					"#9C27B0", // Pink
					"#FF9800",
					// Orange
					"#FFC107", // Amber
					// Blue//
					// Add more attractive colors as needed
				],
			},
		],
	};

	const chartOptions = {
		indexAxis: "x",
		scales: {
			x: {
				ticks: {
					font: {
						size: 14,
						weight: "bold",
					},
				},
				grid: {
					display: true,
				},
				beginAtZero: true,
			},
			y: {
				// beginAtZero: true,
				// maxBarThickness: 20,
				ticks: {
					font: {
						size: 14,
						weight: "bold",
					},
				},
				grid: {
					display: true,
				},
				beginAtZero: true,
			},
		},
	};

	return (
		<div className="flex ">
			<div style={{ width: "100%" }}>
				<Bar data={chartData} options={chartOptions} />
			</div>
		</div>
	);
};

export default AgeStats;
