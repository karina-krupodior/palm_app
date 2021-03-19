import React, {Component, useState} from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import Logo from '../../images/gold_palm_logo.jpg'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <div className={'header'}>
                <div className={'header_logo'}>
                    <img src={Logo} alt={''}/>
                    <span className={`header_burger ${this.state.isToggleOn ? 'active' : ''}`} onClick={this.handleClick}> </span>
                </div>
                    <nav className={`header_menu  ${this.state.isToggleOn ? 'active' : ''}`} onClick={this.handleClick}>
                        <ul className={'header_list'}>
                            <li className={'menu_item'}>
                                <Link className={'header_link'} to={'/'}>HOME</Link>
                            </li>
                            <li className={'menu_item'}>
                                <Link className={'header_link'} onClick={this.handleOnClick} to={'/countries'}>COUNTRIES</Link>
                            </li>
                            <li className={'menu_item'}>
                                <Link className={'header_link'} to={'/contacts'}>CONTACTS </Link>
                            </li>
                            <li className={'menu_item'}>
                                <Link className={'header_link'} to={'/tour'}>YOUR TOUR</Link></li>
                        </ul>
                    </nav>
                </div>
        )
    }
}

export default Header;