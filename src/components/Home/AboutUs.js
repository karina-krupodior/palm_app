import React, {Component} from "react";
import './AboutUs.css'
import Friends from "./Friends";



class AboutUs extends Component {
    render() {
        return(
            <div className={'aboutUs'}>
                <div className={'news'}>
                    <p>NEWS</p>

                Bus tours to Europe
               <p>  You have been dreaming about a trip to Europe for a long time, but you don't know ...</p>

                <p>People who travel abroad often know that the best thing ...</p>

               <p> Choosing tours to Bulgaria
                   Tours to Bulgaria Sunny Republic of Bulgaria beckons to itself every year ...</p></div>

                <div className={'contacts'}>
                    <p>СONTACTS</p>

                   <p> Kharkiv, street Shota Rustaveli, 16</p>

                    <p>+38 (098) 185-01-83  </p>

                    <p> +38 (093) 185-01-83</p>

                    <p>+38 (095) 185-01-33 </p>
                    <p> yourtour @ gmail.com</p>
                       <p>call me back</p>
                        Book a tour </div>

                <nav className={'footer_menu '}>
                    <ul className={'footer_list'}>
                        <li className={'footer_item'}>
                            <a className={'footer_link'} href={'#'}>HOME </a>
                        </li>
                        <li className={'footer_item'}>
                            <a className={'footer_link'} href={'#'}>COUNTRIES</a>
                        </li>
                        <li className={'footer_item'}>
                            <a className={'footer_link'} href={'#'}>CONTACTS </a>
                        </li>
                        <li className={'footer_item'}>
                            <a className={'footer_link'} href={'#'}>YOUR TOUR</a>
                        </li>


                    </ul>

                </nav>
             <Friends   />

                </div>
        )
    }

}


export default  AboutUs;