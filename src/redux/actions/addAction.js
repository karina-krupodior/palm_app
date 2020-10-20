import {ADD_TO_BASKET,} from "./types";

export const addToBasket = (city) => {
    return {
        type :'ADD_TO_BASKET',
        payload: city
    }

}


