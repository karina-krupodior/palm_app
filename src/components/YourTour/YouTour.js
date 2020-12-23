import React, {Fragment} from "react";
import {ADD_TO_BASKET} from "../redux/actions/types";
import GenericCountry from "../Countries/GenericCountry";
import {connect} from  'react-redux'



function YourTour (props){
    console.log(props,'propsYourTour')
    return (
        <Fragment>
    <p>{props.cities.map(el => el)}</p>
            {console.log(props.cities.map(el => el),'(props.cities.map(el => el)')}
        </Fragment>
)}




 const mapStateToProps = state => {
    console.log(state,mapStateToProps,'mapStateToPropsYourTour','state')
    return {
        cities: state.basketReducer.cities
        // cities: state.basketReducer.cities

    }


 }



const mapDispatchToProps = dispatch => {
    return {
      onAddedCity : (city) => {
            console.log(city,'onAddedCity,city,YourTour')
            return dispatch({type : ADD_TO_BASKET, payload : city})
        }
    }
 }

export default connect(mapStateToProps,mapDispatchToProps)(YourTour);