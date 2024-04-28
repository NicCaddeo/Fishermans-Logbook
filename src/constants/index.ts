import { GameSpeed } from "../types"; // Import the GameSpeed type from the types file

// Define an object mapping rarity values to their corresponding text, background color, and text color
export const RARITY_VALUES = {
	1: { text: "Common", bgColor: "#154F5B", textColor: "#fff" },
	2: { text: "Uncommon", bgColor: "#37718E", textColor: "#fff" },
	3: { text: "Rare", bgColor: "#7FA6B2", textColor: "#fff" },
	4: { text: "Super Rare", bgColor: "#D1E3DD", textColor: "#154F5B" },
	5: { text: "Ultra Rare", bgColor: "#FFF9C2", textColor: "#154F5B" },
};

// Define an object mapping page names to their corresponding URLs
export const LINKS = {
	LandingPage: "/",
	GamePage: "/catch-fish",
	LogbookPage: "/logbook",
};

// Define a constant for a message granting special access to view fish in the logbook early
export const SECRET_ACCESS_TEXT =
	"You gained special access to view the fish in the logbook early, but only what they look like... You have to catch them first!";

// Define the game speed constant, specifying the arrow speed (1 to 5, with 5 being the max speed)
export const GAME_SPEED: GameSpeed = 5;

// Define a constant for the key used in local storage to store fish data
export const LOCAL_STORAGE_KEY = "FISH_DATA";
