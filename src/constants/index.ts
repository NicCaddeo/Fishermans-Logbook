import { GameSpeed } from "../types";
// --------------------------------------------------------------

export const RARITY_VALUES = {
	1: { text: "Common", bgColor: "#154F5B", textColor: "#fff" },
	2: { text: "Uncommon", bgColor: "#37718E", textColor: "#fff" },
	3: { text: "Rare", bgColor: "#7FA6B2", textColor: "#fff" },
	4: { text: "Super Rare", bgColor: "#D1E3DD", textColor: "#154F5B" },
	5: { text: "Ultra Rare", bgColor: "#FFF9C2", textColor: "#154F5B" },
};

export const LINKS = {
	LandingPage: "/",
	GamePage: "/catch-fish",
	LogbookPage: "/logbook",
};

export const SECRET_ACCESS_TEXT =
	"You gained special access to view the fish in the logbook early, but only what they look like... You have to catch them first!";

export const GAME_SPEED: GameSpeed = 4; // Arrow speed (1 to 5). 5 is the max speed.

export const LOCAL_STORAGE_KEY = "FISH_DATA";
