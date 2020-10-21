import {ADD_TO_BASKET} from "../actionConstants";

const initialState = {
    cities: []
};


const basketReducer = (state= initialState,{ type, payload }) => {
    switch (type) {

        case ADD_TO_BASKET:
            console.log(payload,'action payload reducer ')
            console.log(state,'state reducer ')
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
export default basketReducer;