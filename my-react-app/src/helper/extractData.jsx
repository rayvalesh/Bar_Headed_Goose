const extractData = (json) => {
	const maleCount = json.inferenceanalytics.InferenceAnalytics.Male;
	const femaleCount = json.inferenceanalytics.InferenceAnalytics.Female;
	const happyCount = json.inferenceanalytics.InferenceAnalytics.happy || 0;
	const surpriseCount = json.inferenceanalytics.InferenceAnalytics.surprise || 0;
	const neutralCount = json.inferenceanalytics.InferenceAnalytics.neutral || 0;
	const angryCount = json.inferenceanalytics.InferenceAnalytics.angry || 0;
	const personCount = json.inferenceanalytics.InferenceAnalytics.person || 0;


	const ageGroups = [
		{ range: "Below 20", count: 0 },
		{ range: "20 - 30", count: 0 },
		{ range: "30 - 40", count: 0 },
		{ range: "40 - 50", count: 0 },
		{ range: "50 and above", count: 0 },
	];

	for (let i = 10; i <= 50; i++) {
		const ageKey = `0.${i}`;
		const ageCount = json.inferenceanalytics.InferenceAnalytics[ageKey] || 0;

		if (i < 20) {
			ageGroups[0].count += ageCount;
		} else if (i < 30) {
			ageGroups[1].count += ageCount;
		} else if (i < 40) {
			ageGroups[2].count += ageCount;
		} else if (i < 50) {
			ageGroups[3].count += ageCount;
		} else {
			ageGroups[4].count += ageCount;
		}
	}

	return {
		males: maleCount,
		females: femaleCount,
		happy: happyCount,
		surprise: surpriseCount,
		neutral: neutralCount,
		angry: angryCount,
		person: personCount,
		ageGroups: ageGroups,
	};
};

export default extractData;
