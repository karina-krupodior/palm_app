import React, {Component} from "react";
import insta from '../../images/insta.webp'
import facebook from '../../images/facebook.png'
import telegram from '../../images/telegram.png'

class Networks extends Component {
    render() {
    return (
        <div className={'friends'} >
        <p>LET'S BE FRIENDS</p>
        <img  className={'networkLogo'} src ={insta}/>
        <img className={'networkLogo'} src ={facebook}/>
        <img className={'networkLogo'} src ={telegram}/>
    </div>
    )}}
export default Networks;
