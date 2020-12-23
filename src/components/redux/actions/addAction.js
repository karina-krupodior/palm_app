import {ADD_TO_BASKET} from "./types";




export const addToBasket =(city) => {
    return(dispatch) => {
        console.log(city,'cityfromaddtobasket')
        console.log('Adding to Basket');
        dispatch({
            type:ADD_TO_BASKET,
            payload :city,
        })
    }
}
