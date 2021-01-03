const initialState = {
    cities: [],
}


export default (state = null, action) => {
    switch (action.type) {
        case 'ADD_CITY' :
            console.log('in reducer');
            console.log(action);
            console.log(state, 'state')
            return {
                ...state,
                cities: [...state.cities, ...action.payload]
            };
        // case 'REMOVE_CITY':
        //     return {
        //         ...state,
        //         items: state.items.filter(o => o.id != action.payload)
        //     }

        default:
            return state
    }
}