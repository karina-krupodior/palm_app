import React, {Fragment} from "react";
import {ADD_TO_BASKET} from "../redux/actionConstants";
import GenericCountry from "../Countries/GenericCountry";
import {connect} from  'react-redux'



function YourTour (props){

    // props.onAddedCity('la')
    console.log(props, 'props')
    return (
        <Fragment>
    <div onClick={() => props.onAddedCity('la')}>  hi </div>
    <p>{props.cities.map(el => el)}</p>
        </Fragment>
) }


 const mapStateToProps = state => {
    console.log(state, 'mapstate')
    return {
        cities: state.basketReducer.cities
    }
 }
 const mapDispatchToProps = dispatch => {
    return {
        onAddedCity : (city) => {
            console.log(city)
            return dispatch({type : ADD_TO_BASKET, payload : city})
        }
    }
 }

export default connect(mapStateToProps,mapDispatchToProps)(YourTour);