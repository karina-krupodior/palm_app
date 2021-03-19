import React, {Component, Fragment} from "react";
import './GenericCountry.css';
import Checkbox from "../Checkbox/Checkbox";
import {connect} from "react-redux";
import {addCities} from "../../redux/actions";
import Modal from "../Modal/Modal";
import '../Modal/Modal.css';

class GenericCountry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkCities: [],
            show: false,
        }
    }

    showModal = () => {
        this.setState({
            show: !this.state.show
        });
    };

    onClose = () => {
        this.setState({show: !this.state.show})};
    render() {
        return (
            <Fragment>
                <div className={'box'}>
                    <ul className={'hr'}>
                        <li className={'text_count'}>
                            <div className={'flags'}>
                                {this.props.image}
                            </div>
                            <button className={'button_countries'}
                                    onClick={e => {
                                        this.showModal(e)
                                    }}>{this.props.text}
                            </button>
                            <Modal onClose={this.showModal} show={this.state.show}>
                                <div>
                                    <ul>
                                        <h2 className={'modal_text'}>CHOOSE CITIES WHAT YOU WANT TO VISIT</h2>
                                        {this.props.cities.map((city) => {
                                            return (
                                                <Checkbox value={city} cities={city} onClick={this.onCheckboxClick}/>)
                                        })}
                                    </ul>
                                    <button className="toggle-button" onClick={this.onClose}>
                                        CLOSE
                                    </button>

                                    <button className={'button_add_to_tour'}
                                            onClick={() => this.props.addToBasket(this.state.checkCities)}>ADD TO TOUR
                                    </button>

                                </div>
                            </Modal>
                        </li>
                    </ul>
                </div>
            </Fragment>
        )
    }
    onCheckboxClick = (checked, cityName) => {
        if (checked) {
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
      setTimeout(() => console.log(this.state.checkCities), 3000)
    }

}

const mapDispatchToProps = dispatch => ({
    addToBasket: (cities) => {
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









