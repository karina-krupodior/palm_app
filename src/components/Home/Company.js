import React, {Component} from "react";
import './Company.css'
import AboutUs from "./AboutUs";



class Company extends Component {
    render() {
        return(

            <div className={'company'}>
                <div className={'wrap_head'}> <h1 className={'head'}>  WHY OUR COMPANY ?</h1></div>
                <div className="img-item">
                    <p> EXCLUSIVELY</p>
                    <img src='icons8-пляж-100.png'/>
                        <span>Tired of ‘hot’ tours ?<br/>
                            Do it yourself your trip how you want!!!</span>
                </div>

                <div className="img-item">
                    <p> AVAILABLE</p>
                    <img src="icons8-деньги-200.png"/>
                        <span>Enough to overpay travel agencies for tours select countries based on your budget</span>
                </div>
                <div className="img-item">
                    <p> FAST</p>
                    <img src="icons8-взлет-самолета-100.png"/>
                        <span>Our experts provide the best travel options quickly and efficiently</span>
                </div>

                </div>
    )
    }

}


export default  Company;