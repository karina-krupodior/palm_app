import React, {Component} from "react";
import './Company.css'

class Company extends Component {
    render() {
        return (
            <div className={'company'}>
                <div className={'wrap_head'}><h1 className={'head'}> WHY OUR COMPANY ?</h1></div>
                <div className="img-item">
                    <p> EXCLUSIVELY</p>
                    <img src='icons8-пляж-100.png'/>
                    <p>Tired of ‘hot’ tours ? <br/>
                        Do it yourself your trip <br/>
                        how you want!!!</p>
                </div>
                <div className="img-item">
                    <p> AVAILABLE</p>
                    <img src="icons8-деньги-200.png"/>
                    <p className={'medium_text'}>Enough to overpay<br/>
                    travel agencies for tours <br/>
                        select countries based <br/>
                        on your budget</p>
                </div>
                <div className="img-item">
                    <p> FAST</p>
                    <img src="icons8-взлет-самолета-100.png"/>
                    <p>Our experts provide <br/>
                    the best travel  options <br/>
                     quickly and efficiently</p>
                </div>
            </div>
        )
    }
}

export default Company;