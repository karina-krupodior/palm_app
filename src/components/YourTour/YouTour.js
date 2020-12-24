import React, {Component, Fragment} from "react";
import {connect} from  'react-redux'



class YourTour extends Component {


    render () {
        console.log(this.props)

    return (
        <div>
    <h1>12345</h1>
</div>
    )
    }
}


const mapStateToProps = state => ({
    cities: state.cities
})


export default connect(
    mapStateToProps,
    null
)(YourTour);