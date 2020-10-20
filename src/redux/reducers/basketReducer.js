import {ADD_TO_BASKET,REMOVE_FROM_BASKET} from '../actions/types'

const initialState ={
    city :  {

    }
 }
console.log(initialState)



 export const reducer = (state= initialState,action) => {


    switch (action.type) {




        case ADD_TO_BASKET:
            return {

            }
            const newCity ={city : this.city

            }
            console.log(newCity)
            return {
                ...state,
                city: state.city.push(newCity)


            }
            console.log(newCity)
        case REMOVE_FROM_BASKET:
            return {

            }
    }


}
export default reducer;
console.log(reducer())