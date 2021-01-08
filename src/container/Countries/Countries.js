import React, {Fragment} from "react";
import GenericCountry from "../GenericCountry/GenericCountry";
import '../GenericCountry/GenericCountry.css';
import Austria from '../../images/countries/austria.png';
import Albania from '../../images/countries/albania.jpg';
import Belgium from '../../images/countries/belgium.png';
import Bulgaria from '../../images/countries/bulgaria.png';
import United_Kingdom from '../../images/countries/United_Kingdom.png';
import Hungary from '../../images/countries/hungary.png';
import Germany from '../../images/countries/germany.png';
import Greece from '../../images/countries/greece.png';
import Denmark from '../../images/countries/denmark.jpg';
import Ireland from '../../images/countries/ireland.png';
import Iceland from '../../images/countries/Iceland.jpeg';
import Spain from '../../images/countries/spain.png';
import Italy from '../../images/countries/italy.png';
import Latvia from '../../images/countries/latvia.png';
import Lithuania from '../../images/countries/lithuania.png';
import Monaco from '../../images/countries/monaco.jpeg';
import Netherlands from '../../images/countries/netherlands.png';
import Norway from '../../images/countries/norway.png';
import Poland from '../../images/countries/poland .jpg';
import Russia  from '../../images/countries/russia.png';
import Romania from '../../images/countries/romania.jpg';
import Finland from '../../images/countries/finland.png';
import France from '../../images/countries/france.png';
import Croatia from '../../images/countries/croatia.jpg';
import Montenegro  from '../../images/countries/montenegro .png';
import Czech_Republic  from '../../images/countries/czech_republic.png';
import Switzerland  from '../../images/countries/switzerland.png';
import Sweden  from '../../images/countries/sweden.png';


const Countries = () => {
    const countries = [
        { name: 'Austria', cities : ['Vienna','Graz','Linz','Salzburg'] ,image:<img src={Austria} alt={''}/>},
        { name: 'Albania', cities: ['Tirana', 'Durrës','Vlorë','Elbasan'],image:<img src={Albania} alt={''}/>} ,
        { name: 'Belgium', cities: ['Aalst', 'Aarschot','Beringen','Genk'] ,image:<img src={Belgium} alt={''}/>} ,
        { name: 'Bulgaria', cities: ['Sofia', 'Plovdiv','Varna','Burgas'] ,image:<img src={Bulgaria} alt={''}/>} ,
        { name: 'United Kingdom',cities: ['London', 'Liverpool','Manchester','Oxford'],image:<img src={United_Kingdom} alt={''}/>} ,
        { name: 'Hungary', cities: ['Budapest', 'Debrecen','Szeged','Miskolc'] ,image:<img src={Hungary} alt={''}/>} ,
        { name: 'Germany', cities: ['Berlin', 'Hamburg','Stuttgart','Cologne '],image:<img src={Germany} alt={''}/>} ,
        { name: 'Greece', cities: ['Athens', 'Thessaloniki','Patras','Volos'] ,image:<img src={Greece} alt={''}/>} ,
        { name: 'Denmark', cities: ['Copenhagen', 'Odense','Aarhus','Randers'],image:<img src={Denmark} alt={''}/>} ,
        { name: 'Ireland', cities: ['Dublin', 'Belfast','Cork','Derry'] ,image:<img src={Ireland} alt={''}/>} ,
        { name: 'Iceland', cities: ['Reykjavik', 'Akureyri','Kópavogur','Egilsstadir'],image:<img src={Iceland} alt={''}/>} ,
        { name: 'Spain', cities: ['Madrid', 'Barcelona','Valencia','Seville'] ,image:<img src={Spain} alt={''}/>} ,
        { name: 'Italy', cities: ['Rome', 'Milan','Naples','Turin'],image:<img src={Italy} alt={''}/>} ,
        { name: 'Latvia', cities: ['Riga', 'Sabile','Kuldiga','Kandava'] ,image:<img src={Latvia} alt={''}/>} ,
        { name: 'Lithuania', cities: ['Vilnius', 'Kaunas','Klaipėda','Alytus'],image:<img src={Lithuania} alt={''}/>} ,
        { name: 'Monaco', cities: ['Monaco', 'Monte-Carlo','La Condamine','Moneghetti'] ,image:<img src={Monaco} alt={''}/>} ,
        { name: 'Netherlands', cities: ['Amsterdam', 'Rotterdam','Utrecht','Eindhoven'],image:<img src={Netherlands} alt={''}/>} ,
        { name: 'Norway', cities: ['Oslo', 'Bergen','Stavanger','Drammen'] ,image:<img src={Norway} alt={''}/>} ,
        { name: 'Poland', cities: ['Warsaw', 'Kraków','Poznań','Lublin'],image:<img src={Poland} alt={''}/>} ,
        { name: 'Russia', cities: ['Moscow', 'St. Petersburg','Yekaterinburg','Kazan'] ,image:<img src={Russia} alt={''}/>} ,
        { name: 'Romania', cities: ['Bucharest', 'Timișoara','Cluj-Napoca','Craiova'],image:<img src={Romania} alt={''}/>} ,
        { name: 'Finland', cities: ['Helsinki', 'Tampere','Turku','Oulu'] ,image:<img src={Finland} alt={''}/>} ,
        { name: 'France', cities: ['Paris', 'Marseille','Lyon','Toulouse'],image:<img src={France} alt={''}/>} ,
        { name: 'Croatia', cities: ['Zagreb', 'Split','Pula','Zadar'] ,image:<img src={Croatia} alt={''}/>} ,
        { name: 'Montenegro', cities: ['Podgorica', 'Pljevlja','Herceg Nov','Bar'],image:<img src={Montenegro} alt={''}/>} ,
        { name: 'Czech Republic', cities: ['Prague', 'Brno','Ostrava','Liberec'] ,image:<img src={Czech_Republic} alt={''}/>} ,
        { name: 'Switzerland', cities: ['Geneva', 'Basel','Lausanne','Bern'],image:<img src={Switzerland} alt={''}/>} ,
        { name: 'Sweden', cities: ['Stockholm', 'Göteborg','Uppsala ','Västerås'] ,image:<img src={Sweden} alt={''}/>} ,

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






