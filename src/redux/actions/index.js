import {ADD_CITY} from "./types";

export const addCities = (cities) => {
    return {
        type: ADD_CITY,
        payload: cities
    }
}