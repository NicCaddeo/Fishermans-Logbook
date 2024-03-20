export type RarityIndex = 1 | 2 | 3 | 4 | 5;

export type ActiveStars = 0 | 1 | 2 | 3 | 4 | 5;

export type Fish = {
	name: string;
	rarity: RarityIndex;
	size: string;
	habitat: string;
	description: string;
	image: string;
	caught: number;
};

export type GameSpeed = 1 | 2 | 3 | 4 | 5;
