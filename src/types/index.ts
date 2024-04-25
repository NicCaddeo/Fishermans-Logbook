// Define a type for the rarity index of a fish, which ranges from 1 to 5
export type RarityIndex = 1 | 2 | 3 | 4 | 5;

// Define a type for the number of active stars, which ranges from 0 to 5
export type ActiveStars = 0 | 1 | 2 | 3 | 4 | 5;

// Define a type for the properties of a fish
export type Fish = {
  name: string;         // The name of the fish
  rarity: RarityIndex;  // The rarity index of the fish
  size: string;         // The size of the fish
  habitat: string;      // The habitat of the fish
  description: string;  // A description of the fish
  image: string;        // The image URL of the fish
  caught: number;       // The number of times the fish has been caught
};

// Define a type for the game speed, which ranges from 1 to 5
export type GameSpeed = 1 | 2 | 3 | 4 | 5;
