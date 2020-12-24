
import React, { Component, Fragment } from "react";
import Popup from "reactjs-popup";
import './Countries.css'
import Checkbox from "./Checkbox";
import {connect} from "react-redux";
import { addCities } from "../redux/actions";
import { bindActionCreators } from 'redux'




class  GenericCountry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkCities: [],
        };


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.citiesTest, 'this from redux store')

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

                                                        <button onClick={() => this.props.addToBasket(this.state.checkCities)}>ADD TO TOUR</button>


                                                    </ul>
                                                    {console.log(this.props.citiesTest)}
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

    // onAddCitiesButton = () => {
    //     console.log('on add cities button')
    //     addToBasket('test');
    //
    // }

}

const mapDispatchToProps = dispatch => ({
    addToBasket: (cities) => {
        console.log(cities);
        return dispatch(addCities(cities))
    }
})

const mapStateToProps = state => ({
    citiesTest: state.cities
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GenericCountry)









