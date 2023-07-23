import React from "react";

const EmojiGrid = ({ happy=0 , angry=0, neutral=0, surprise=0 }) => {
	const emojis = [
		{ emoji: "🙂", number: happy },
		{ emoji: "😠", number: angry },
		{ emoji: "😐", number: neutral },
		{ emoji: "😵", number: surprise },
	];

	return (
		<div className="grid grid-cols-2 gap-12 justify-items-center items-center h-full">
			{emojis.map((item, index) => (
				<div key={index} className="text-center">
					<div className="text-6xl mb-4">{item.emoji}</div>
					<div className="text-2xl text-white">{item.number}</div>
				</div>
			))}
		</div>
	);
};

export default EmojiGrid;
