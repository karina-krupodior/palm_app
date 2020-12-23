
import React, { Component, Fragment } from "react";
import Popup from "reactjs-popup";
import './Countries.css'
import Checkbox from "./Checkbox";
import {connect} from "react-redux";
import {addToBasket} from "../redux/actions/addAction";




class  GenericCountry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkCities: [],
        };


    }


    render() {


        return (
                <Fragment>
                    <div className={'box'}>
                        <ul className={'hr'}>
                            <li className={'text_count'}>

                                <div className={'flags'}>{this.props.image}</div>

                                <Popup modal trigger={<button className={'countriesButton'}>{this.props.text}</button>}>
                                    <div id={'popup'} className={'popup'}>
                                        <div className="popup_body">
                                            <div className={'popup_content'}>
                                                <a href={''} className={'popup_close'}>X</a>
                                                <div>
                                                    <h1 className="popup_title"> CHOOSE CITIES WHAT YOU WANT TO VISIT</h1>
                                                    {/*<input type="checkbox" onClick={this.handleAllChecked} value="checkedall" /> Select all cities / Clear all*/}
                                                    <ul>
                                                        {this.props.cities.map((city) => {
                                                            return (

                                                                <Checkbox value={city} cities = {city} onClick={this.onCheckboxClick} />)
                                                        })}

                                                        <button onClick={() => this.onAddCitiesButton()}>ADD TO TOUR</button>


                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </li>
                        </ul>
                    </div>
                </Fragment>
        )



    }


    onCheckboxClick = (checked, cityName) => {
        console.log(cityName, 'city');
        if (checked) {
            console.log(checked, 'citySt.checked')

            const citiesArr = [...this.state.checkCities]

            citiesArr.push(cityName)

            this.setState({
                checkCities: citiesArr
            })

        } else {
            this.setState({
                checkCities: this.state.checkCities.filter(function (val) {
                    return val !== cityName
                })
            })
        }

        console.log(this.state.checkCities, 'result')
        console.log(setTimeout(() => console.log(this.state.checkCities), 3000))
    }

    onAddCitiesButton = () => {
        console.log('on add cities button')
        addToBasket('test');

    }

}

//
// const mapDispatchToProps = dispatch => {
//     return {
//         onAddedCity : (city) => {
//
//             return dispatch({type : ADD_TO_BASKET, payload : city})
//         }
//     }
// }

export default connect(null,{addToBasket}) (GenericCountry);









