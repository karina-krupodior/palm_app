
import React,{ Component, useState} from 'react';
import './Header.css';

class Header extends  React.Component {

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


    render(){
        return (

        <div className={'header'}>
            <div className={'header_logo'} >
             <img src={'1854_1535905236_goldpalm17.jpg'} alt={''}/>
                </div>

                <div className={`header_burger ${this.state.isToggleOn ? 'active' : ''}`} onClick={this.handleClick }>
                  <span> </span>

                    <nav className={`header_menu  ${this.state.isToggleOn ? 'active' : ''}`} onClick={this.handleClick}>

                        <ul className={'header_list'}>
                            <li className={'menu_item'}>
                                <a className={'header_link'} href={'/home'}>HOME </a>
                            </li>
                            <li className={'menu_item'}>
                                <a className={'header_link'} href={'/countries'}>COUNTRIES</a>
                            </li>
                            <li className={'menu_item'}>
                                <a className={'header_link'} href={'/contacts'}>CONTACTS </a>
                            </li>
                            <li className={'menu_item'}>
                                <a className={'header_link'} href={'/tour'}>YOUR TOUR</a>  </li>
                        {/*</div>*/}

                        </ul>

                    </nav>
        </div>
 </div>
        

        )
    }
}

export default Header;