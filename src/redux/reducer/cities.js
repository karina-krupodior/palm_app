const initialState = {
    cities: [],
}

export default (state = null, action) => {
    switch (action.type) {
        case 'ADD_CITY' :
            return {
                ...state,
                cities: [...state.cities, ...action.payload]
            };
        default:
            return state
    }
}