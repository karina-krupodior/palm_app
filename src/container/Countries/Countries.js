import React, {Fragment} from "react";
import GenericCountry from "../GenericCountry/GenericCountry";
import '../GenericCountry/GenericCountry.css';

const Countries = () => {
    const countries = [
        { name: 'Austria', cities : ['Vienna','Graz','Linz','Salzburg'] ,image:<img src={'austria.png'} alt={''}/>},
        { name: 'Albania', cities: ['Tirana', 'Durrës','Vlorë','Elbasan'],image:<img src={'albania.jpg'} alt={''}/>} ,
        { name: 'Belgium', cities: ['Aalst', 'Aarschot','Beringen','Genk'] ,image:<img src={'Belgium.png'} alt={''}/>} ,
        { name: 'Bulgaria', cities: ['Sofia', 'Plovdiv','Varna','Burgas'] ,image:<img src={'bulgaria-256.png'} alt={''}/>} ,
        { name: 'United Kingdom',cities: ['London', 'Liverpool','Manchester','Oxford'],image:<img src={'United Kingdom .png'} alt={''}/>} ,
        { name: 'Hungary', cities: ['Budapest', 'Debrecen','Szeged','Miskolc'] ,image:<img src={'Hungary.png'} alt={''}/>} ,
        { name: 'Germany', cities: ['Berlin', 'Hamburg','Stuttgart','Cologne '],image:<img src={'germany.png'} alt={''}/>} ,
        { name: 'Greece', cities: ['Athens', 'Thessaloniki','Patras','Volos'] ,image:<img src={'GREECE.png'} alt={''}/>} ,
        { name: 'Denmark', cities: ['Copenhagen', 'Odense','Aarhus','Randers'],image:<img src={'DENMARK.jpg'} alt={''}/>} ,
        { name: 'Ireland', cities: ['Dublin', 'Belfast','Cork','Derry'] ,image:<img src={'ireland.png'} alt={''}/>} ,
        { name: 'Iceland', cities: ['Reykjavik', 'Akureyri','Kópavogur','Egilsstadir'],image:<img src={'Iceland.jpeg'} alt={''}/>} ,
        { name: 'Spain', cities: ['Madrid', 'Barcelona','Valencia','Seville'] ,image:<img src={'SPAIN.png'} alt={''}/>} ,
        { name: 'Italy', cities: ['Rome', 'Milan','Naples','Turin'],image:<img src={'italy.png'} alt={''}/>} ,
        { name: 'Latvia', cities: ['Riga', 'Sabile','Kuldiga','Kandava'] ,image:<img src={'3.png'} alt={''}/>} ,
        { name: 'Lithuania', cities: ['Vilnius', 'Kaunas','Klaipėda','Alytus'],image:<img src={'lithuania.png'} alt={''}/>} ,
        { name: 'Monaco', cities: ['Monaco', 'Monte-Carlo','La Condamine','Moneghetti'] ,image:<img src={'images.jpeg'} alt={''}/>} ,
        { name: 'Netherlands', cities: ['Amsterdam', 'Rotterdam','Utrecht','Eindhoven'],image:<img src={'if_Flag_of_Netherlands_96202.png'} alt={''}/>} ,
        { name: 'Norway', cities: ['Oslo', 'Bergen','Stavanger','Drammen'] ,image:<img src={'NORWAY .png'} alt={''}/>} ,
        { name: 'Poland', cities: ['Warsaw', 'Kraków','Poznań','Lublin'],image:<img src={'polskii-flag.jpg'} alt={''}/>} ,
        { name: 'Russia', cities: ['Moscow', 'St. Petersburg','Yekaterinburg','Kazan'] ,image:<img src={'russia_PNG92466.png'} alt={''}/>} ,
        { name: 'Romania', cities: ['Bucharest', 'Timișoara','Cluj-Napoca','Craiova'],image:<img src={'ROMANIA.jpg'} alt={''}/>} ,
        { name: 'Finland', cities: ['Helsinki', 'Tampere','Turku','Oulu'] ,image:<img src={'FINLAND flag.png'} alt={''}/>} ,
        { name: 'France', cities: ['Paris', 'Marseille','Lyon','Toulouse'],image:<img src={'france.png'} alt={''}/>} ,
        { name: 'Croatia', cities: ['Zagreb', 'Split','Pula','Zadar'] ,image:<img src={'CROATIA 1.jpg'} alt={''}/>} ,
        { name: 'Montenegro', cities: ['Podgorica', 'Pljevlja','Herceg Nov','Bar'],image:<img src={'MONTENEGRO.png'} alt={''}/>} ,
        { name: 'Czech Republic', cities: ['Prague', 'Brno','Ostrava','Liberec'] ,image:<img src={'Czech Republic.png'} alt={''}/>} ,
        { name: 'Switzerland', cities: ['Geneva', 'Basel','Lausanne','Bern'],image:<img src={'SWITZERLAND.png'} alt={''}/>} ,
        { name: 'Sweden', cities: ['Stockholm', 'Göteborg','Uppsala ','Västerås'] ,image:<img src={'sweden-circular.png'} alt={''}/>} ,

    ]
    return (
        <Fragment>
            {countries.map((c, i) => {

                return <div className={'box'}>
                    <GenericCountry key={i} cities={c.cities} text={c.name} image={c.image}/>
                </div>
            })}

        </Fragment>
    )
}


export default Countries;






