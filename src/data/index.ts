import { Fish } from "../types";
import { getData } from "../utils/storageData";
// --------------------------------------------------------------

export const INITIAL_FISH_DATA: Fish[] = [
	{
		name: "Sockeye Salmon",
		rarity: 1,
		size: "24-36 inches",
		habitat: "Alaska",
		description:
			"Renowned for its vibrant red hue and unwavering strength, the sockeye salmon embodies the spirit of the untamed waters. With each graceful leap against the current, it ignites the thrill of the chase, promising anglers a battle of skill and determination. A prized catch, revered for its rich flavor and resilience, the sockeye salmon is a testament to nature's enduring majesty.",
		image: "sockeye.png",
		caught: 0,
	},
	{
		name: "Rainbow Trout",
		rarity: 1,
		size: "12-24 inches",
		habitat: "Various freshwater locations across North America",
		description:
			"With its vibrant colors and playful nature, the rainbow trout is a favorite among anglers seeking a thrilling catch. Found in pristine streams and lakes, this agile fish puts up a spirited fight, rewarding persistence with its delectable flesh.",
		image: "rainbow_trout.png",
		caught: 0,
	},
	{
		name: "Yellow Perch",
		rarity: 1,
		size: "6-12 inches",
		habitat: "Freshwater lakes and rivers across North America",
		description:
			"Admired for its golden hues and distinctive stripes, the yellow perch is a prized catch in freshwater habitats. With its scrappy attitude and delectable meat, it offers anglers a delightful challenge and a rewarding meal.",
		image: "yellow_perch.png",
		caught: 0,
	},
	{
		name: "Clownfish",
		rarity: 2,
		size: "2-5 inches",
		habitat: "Coral reefs of the Indo-Pacific",
		description:
			"With its vibrant colors and playful demeanor, the clownfish is a beloved resident of coral reefs. Found darting among the anemones, it offers anglers a glimpse into the colorful world beneath the waves.",
		image: "clownfish.png",
		caught: 0,
	},
	{
		name: "Red Snapper",
		rarity: 2,
		size: "12-20 inches",
		habitat: "Coastal waters of North America",
		description:
			"Renowned for its succulent meat and vibrant red coloration, the red snapper is a sought-after prize in saltwater fishing. Found near rocky reefs and underwater structures, it offers anglers a thrilling challenge and a delicious reward.",
		image: "red_snapper.png",
		caught: 0,
	},
	{
		name: "Arctic Char",
		rarity: 2,
		size: "12-30 inches",
		habitat: "Arctic and subarctic regions",
		description:
			"Adapted to survive in frigid waters, the Arctic char is a prized catch for anglers seeking adventure in remote northern locales. With its delicate flesh and striking coloration, it offers a unique fishing experience amidst breathtaking landscapes.",
		image: "arctic_char.png",
		caught: 0,
	},
	{
		name: "Napoleon Wrasse",
		rarity: 3,
		size: "48-96 inches",
		habitat: "Coral reefs of the Indo-Pacific",
		description:
			"Regal and colorful, the Napoleon wrasse is a majestic presence on tropical coral reefs. With its impressive size and peaceful demeanor, it offers anglers a rare and awe-inspiring encounter with one of the ocean's most iconic inhabitants.",
		image: "napoleon_wrasse.png",
		caught: 0,
	},
	{
		name: "Electric Eel",
		rarity: 3,
		size: "24-40 inches",
		habitat: "Freshwater rivers and streams in South America",
		description:
			"With its ability to generate electric shocks, the electric eel is a fascinating and formidable predator. Found in the murky depths of Amazonian waters, it offers anglers a thrilling encounter with one of nature's most electrifying creatures.",
		image: "electric_eel.png",
		caught: 0,
	},
	{
		name: "Harlequin Shrimp",
		rarity: 3,
		size: "2-3 inches",
		habitat: "Coral reefs of the Indo-Pacific",
		description:
			"Small but stunning, the harlequin shrimp is a colorful resident of tropical coral reefs. With its intricate patterns and delicate movements, it offers anglers a glimpse into the vibrant underwater world.",
		image: "harlequin_shrimp.png",
		caught: 0,
	},
	{
		name: "Firefly Squid",
		rarity: 4,
		size: "2-3 inches",
		habitat: "North Pacific Ocean",
		description:
			"A mesmerizing spectacle of bioluminescence, the firefly squid illuminates the dark depths of the North Pacific. With its shimmering light show and ethereal beauty, it offers anglers a rare and magical experience.",
		image: "firefly_squid.png",
		caught: 0,
	},
	{
		name: "Dragon Eel",
		rarity: 4,
		size: "24-48 inches",
		habitat: "Deep ocean trenches and volcanic vents",
		description:
			"A creature of legend and mystery, the dragon eel lurks in the darkest depths of the ocean. With its serpentine form and otherworldly appearance, it offers anglers a glimpse into the realm of the unknown.",
		image: "dragon_eel.png",
		caught: 0,
	},
	{
		name: "Decorator Crab",
		rarity: 4,
		size: "2-4 inches",
		habitat: "Coral reefs and rocky substrates worldwide",
		description:
			"Masters of camouflage, decorator crabs adorn themselves with bits of seaweed, coral, and debris. With their elaborate disguises and secretive nature, they offer anglers a challenge to spot amidst the vibrant reef environment.",
		image: "decorator_crab.png",
		caught: 0,
	},
	{
		name: "Thunderbolt Crayfish",
		rarity: 5,
		size: "4-6 inches",
		habitat: "Hoa Creek, New Guinea",
		description:
			"Rare and elusive, the thunderbolt crayfish dwells in the darkest recesses of underground caves. With its vibrant colors and enigmatic behavior, it offers anglers a mysterious encounter in the hidden realms of the earth.",
		image: "thunderbolt_crayfish.png",
		caught: 0,
	},
	{
		name: "Phantom Jellyfish",
		rarity: 5,
		size: "8-16 inches",
		habitat: "Deep ocean waters",
		description:
			"Transparent and ethereal, the phantom jellyfish drifts silently through the abyss. With its delicate tendrils and ghostly presence, it offers anglers a hauntingly beautiful encounter in the hidden depths.",
		image: "phantom_jellyfish.png",
		caught: 0,
	},
	{
		name: "Mantis Shrimp",
		rarity: 5,
		size: "6-12 inches",
		habitat: "Tropical and subtropical waters worldwide",
		description:
			"With its lightning-fast strikes and powerful claws, the mantis shrimp is a fearsome predator of coral reefs. With its vibrant colors and complex behaviors, it offers anglers a captivating glimpse into the underwater battlegrounds.",
		image: "mantis_shrimp.png",
		caught: 0,
	},
	{
		name: "Blacktip Reef Shark",
		rarity: 5,
		size: "48-84 inches",
		habitat: "Coral reefs of the Indo-Pacific",
		description:
			"Graceful and swift, the blacktip reef shark patrols the colorful reefs of tropical waters. With its sleek form and distinctive markings, it offers anglers a thrilling glimpse into the wild beauty of the underwater world.",
		image: "blacktip_reef_shark.png",
		caught: 0,
	},
];

// ----------------------------------------------------------------

export const GET_FISH_DATA = () => (getData() as Fish[]) || INITIAL_FISH_DATA;
