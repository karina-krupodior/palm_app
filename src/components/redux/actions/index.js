import { ADD_CITY } from "./types";

export const addCities = (cities) => {
    console.log('in add cities');
    return {
        type: ADD_CITY,
        payload: cities
    }
}