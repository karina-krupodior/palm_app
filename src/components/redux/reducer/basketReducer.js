import {ADD_TO_BASKET} from "../actions/types";

const initialState = {
    cities: []
};

export default function (state= initialState,{ type, payload }) {
    // {console.log(basketReducer,'basketReducer')}
    console.log(state,'state from reducer')
    switch (type) {

        case ADD_TO_BASKET:

            console.log(payload,' payload')
            state.cities.push(payload);
            const tempCities = [...state.cities]
            return {
                ...state,
                cities: tempCities,
                test: 'TEST'
            }
        default:
            return state
    }
}
function solution(string) {

    for ( let i = 0; i < string.lenght; i++) {
        if(string[i] === string[i].toUpperCase()){
            // insert space letter in array on previous index
            return  string.split('').splice(string[i],0,' ').join('')
        }
    }
}
console.log(solution('camelCasing'))