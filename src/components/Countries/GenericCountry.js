
import React, { Component, Fragment } from "react";
import Popup from "reactjs-popup";
import './Countries.css';
import {connect} from 'react-redux';
import {addToBasket} from "../../redux/actions/addAction";


const GenericCountry = (props) => {
    console.log(props)


        return (

            <Fragment>
                <div className={'box'}>
                    <ul className={'hr'}>
                        <li className={'text_count'}>
                            <div className={'flags'}>{props.image}</div>

                            <Popup modal trigger={<button className={'countriesButton'}>{props.text}</button>}>
                                <div id={'popup'} className={'popup'}>
                                    <div className="popup_body">
                                        <div className={'popup_content'}>
                                            <a href={''} className={'popup_close'}>X</a>

                                            <div>
                                                <h1 className="popup_title"> CHOOSE CITIES WHAT YOU WANT TO VISIT</h1>
                                                { props.cities.map(city => {
                                                    return  ( <div>
                                                        <input type="checkbox"/> {city}
                                                    </div>
                                                    )}) }
                                            </div>

                                            <button onClick={()=> props.addToBasket('city')}> ADD TO TOUR </button>
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


export default connect(null,{addToBasket}) (GenericCountry);



