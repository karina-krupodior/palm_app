import React, {Component} from "react";
import {connect} from 'react-redux'
import './YouTour.css'

class YourTour extends Component {

    render() {
        return (
            <div className={'wrapper_your_tour'}>
            <div className={'scroll'}>
                <div className={'heading_your_tour'}>YOUR SELECTED TOUR</div>
                {this.props.cities.map(el => {
                    return <h1> {el}</h1>
                })}
            </div>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    cities: store.cities.cities
})

export default connect(
    mapStateToProps,
    null
)(YourTour);