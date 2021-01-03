import React from "react";
import Maps from './Map';
import {Fragment} from "react";

const Contacts = () => {
    return (
        <Fragment>
            <div className={'wrap_contacts'}>

                <div className={'tel'}>
                    <h1 className={'page_title'}>TRAVEL AGENCIES CONTACTS</h1>
                    <img className={'images_icons'} src={'phone.png'} alt={''}/> Telephones:
                    <p>+38 (097) 685-46-96 viber</p>
                    <p>+38 (066) 195-48-58 viber</p>
                    <p>+38 (063) 828-93-61 </p>
                    <p>+38 (057) 732-00-92</p></div>

                <div className={'address'}>
                    <img className={'images_icons'} src={'home.png'} alt={''}/>Address:
                    <p> Kharkiv, street Shota Rustaveli, 16 </p>
                    <p> We are open:</p>
                    <p> Mon-Fri, 10:00-19:00</p>
                    <p>Sat 10:00 – 15:00</p>
                    <p>Sun: in agreement</p>
                    <p>Waiting for you!</p>
                </div>
                <div className={'email'}>
                    <img className={'images_icons'} src={'pochta.png'} alt={''}/>Email:
                    <p>yourtour@gmail.com </p>

                </div>
                <div className={'friends_con'}><p className={'text_friends'}>LET'S BE FRIENDS</p>
                    <img src={'social-03-512 (1).webp'}/>
                    <img src={'Facebook-512.png'}/>
                    <img className={'networkLogo_con'} src={'Telegram-256.png'}/>
                </div>
                <div><Maps/></div>
            </div>
        </Fragment>
    )
}

export default Contacts;









