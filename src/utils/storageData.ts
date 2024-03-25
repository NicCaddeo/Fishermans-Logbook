import { LOCAL_STORAGE_KEY } from "../constants";
import { INITIAL_FISH_DATA } from "../data";
// --------------------------------------------------------------

export const getData = () => {
	const data = localStorage.getItem(LOCAL_STORAGE_KEY);
	return !!data ? JSON.parse(data) : null;
};

export const setData = () => {
	if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(INITIAL_FISH_DATA));
	}
};

export const updateData = (data: any) => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};
