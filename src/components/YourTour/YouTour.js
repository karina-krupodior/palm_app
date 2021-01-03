import React, {Component, Fragment} from "react";
import {connect} from 'react-redux'


class YourTour extends Component {


    render() {
        console.log(this.props, 'tyryt')

        return (
            <div>
                {this.props.cities.map(el=>{
                    return <h1> {el}</h1>
                })}
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