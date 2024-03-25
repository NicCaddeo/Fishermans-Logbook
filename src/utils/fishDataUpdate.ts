import { Fish } from "../types";
import { getData, updateData } from "./storageData";
import { INITIAL_FISH_DATA } from "../data";
// --------------------------------------------------------------

export const updateCaughtNumberForFish = (name: string) => {
	const data = (getData() as Fish[]) || INITIAL_FISH_DATA;
	const fishIndex = data.findIndex((fish) => fish.name === name);
	if (fishIndex >= 0) {
		data[fishIndex].caught++;
		updateData(data);
	}
};
