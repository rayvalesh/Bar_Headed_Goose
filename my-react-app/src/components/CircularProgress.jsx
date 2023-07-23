import React, { useState } from "react";

const CircularProgress = ({ progress, type }) => {
	return type == "Males" ? (
		<div className="radial-progress text-secondary" style={{ "--value": 70 }}>
			{progress}
		</div>
	) : type != "Camera" ? (
		<div className="radial-progress text-primary" style={{ "--value": 40 }}>
			{progress}
		</div>
	) : (
		<div
			className="radial-progress text-amber-400 text-xs"
			style={{ "--value": 50 }}
		>
			{progress}
		</div>
	);
};

export default CircularProgress;
