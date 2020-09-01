import React, {Component} from "react";
import './AboutUs.css'



class AboutUs extends Component {
    render() {
        return(
            <div className={'aboutUs'}>
                <div className={'news'}>
                    <p>NEWS</p>

                <p>Bus tours to Europe </p>
               <p>  You have been dreaming about a trip </p> <p>to Europe for a long time, but you don't know ...</p>

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
                        <div className={'yourTour'}> <li className={'menu_item'}>
                            <a className={'menu_link'} href={'#'}>YOUR TOUR</a>
                        </li></div>


                    </ul>

                </nav>
                <div className={'friends'} > <p>LET'S BE FRIENDS</p>
                <img  className={'networkLogo'} src ='social-03-512 (1).webp'/>
                    <img  className={'networkLogo'} src ='Facebook-512.png'/>
                    <img  className={'networkLogo'} src ='Telegram-256.png'/>
            </div>

                </div>






        )
    }

}


export default  AboutUs;