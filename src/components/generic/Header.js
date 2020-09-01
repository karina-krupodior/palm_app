import React,{ Component } from 'react';
import './Header.css';

class Header extends  Component {
    render() {
        return (
        <header className={'header'}>
            <div className={'header_logo'} >
<img src={'palm_tree.png'} alt={''}/>

            </div>


            <nav className={'nav'}>
                <ul className={'menu_list'}>
                    <li className={'menu_item'}>
                        <a className={'menu_link'} href={'#'}>HOME </a>
                    </li>
                    <li className={'menu_item'}>
                        <a className={'menu_link'} href={'#'}>COUNTRIES</a>
                    </li>
                    <li className={'menu_item'}>
                        <a className={'menu_link'} href={'#'}>CONTACTS </a>
                    </li>
                    <div className={'your_tour'}> <li className={'menu_item'}>
                      <a className={'menu_link_tour'} href={'#'}>YOUR<br/>
                      TOUR</a>
                          </li></div>


                </ul>

            </nav>

        </header>
        )
    }
}

export default Header;