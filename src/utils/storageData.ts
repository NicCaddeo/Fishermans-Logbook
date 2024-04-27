import { LOCAL_STORAGE_KEY } from "../constants";
import { INITIAL_FISH_DATA } from "../data";
// --------------------------------------------------------------

// Function to get data from local storage
export const getData = () => {
	// Retrieve data from local storage using the key
	const data = localStorage.getItem(LOCAL_STORAGE_KEY);
	// Parse the data to JSON if it exists, otherwise return null
	return !!data ? JSON.parse(data) : null;
};

// Function to set initial data to local storage if it doesn't exist
export const setData = () => {
	// Check if the data doesn't exist in local storage
	if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
		// Set the initial data to local storage as a stringified JSON
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(INITIAL_FISH_DATA));
	}
};

// Function to update data in local storage
export const updateData = (data: any) => {
	// Update the data in local storage with the new data
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};