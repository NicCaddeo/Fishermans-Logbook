import { GET_FISH_DATA } from "../data";


// Define the odds of each rarity level
const rarityOdds = {
	1: 0.35, // Common = 35%
	2: 0.25, // UnCommon = 25%
	3: 0.2, // Rare = 20%
	4: 0.15, // Super Rare = 15%
	5: 0.05, // Ultra Rare = 5%
};

// Function to select a random fish based on rarity
const selectRandomFish = () => {
	// Generate a random number between 0 and 1
	const random = Math.random();
	// Initialize selectedRarity to null
	let selectedRarity: number | null = null;
	// Initialize cumulativeProbability to 0
	let cumulativeProbability = 0;

	console.log("Random", random);
	// Loop through the rarityOdds object
	for (const [rarity, probability] of Object.entries(rarityOdds)) {
		// Add the probability of the current rarity to cumulativeProbability
		cumulativeProbability += probability;
		console.log(
			"Rarity:",
			rarity,
			"Probability:",
			probability,
			"Cumulative:",
			cumulativeProbability
		);
		// Check if the random number is less than or equal to cumulativeProbability
		if (random <= cumulativeProbability) {
			// If true, set selectedRarity to the current rarity and break out of the loop
			selectedRarity = parseInt(rarity);
			break;
		}
	}

	console.log("Final:", selectedRarity);

	// Filter the fish data to include only fish with the selected rarity
	const filteredFish = GET_FISH_DATA()?.filter(
		(fish) => fish.rarity === selectedRarity
	);
	// Generate a random index within the length of filteredFish
	const randomIndex = Math.floor(Math.random() * filteredFish.length);
	// Select a fish based on the random index
	const selectedFish = filteredFish[randomIndex];

	return selectedFish;
};

export default selectRandomFish;
