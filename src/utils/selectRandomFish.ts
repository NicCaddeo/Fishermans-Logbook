import { GET_FISH_DATA } from "../data";
// --------------------------------------------------------------

const rarityOdds = {
	1: 0.35,
	2: 0.25,
	3: 0.2,
	4: 0.15,
	5: 0.05,
};

const selectRandomFish = () => {
	const random = Math.random();
	let selectedRarity: number | null = null;
	let cumulativeProbability = 0;

	console.log("Random", random);
	for (const [rarity, probability] of Object.entries(rarityOdds)) {
		cumulativeProbability += probability;
		console.log(
			"Rarity:",
			rarity,
			"Probability:",
			probability,
			"Cumulative:",
			cumulativeProbability
		);
		if (random <= cumulativeProbability) {
			selectedRarity = parseInt(rarity);
			break;
		}
	}

	console.log("Final:", selectedRarity);

	const filteredFish = GET_FISH_DATA()?.filter(
		(fish) => fish.rarity === selectedRarity
	);
	const randomIndex = Math.floor(Math.random() * filteredFish.length);
	const selectedFish = filteredFish[randomIndex];

	return selectedFish;
};

export default selectRandomFish;
