
import React,{Fragment} from "react";
import GenericCountry from "./GenericCountry";
import  './Countries.css';

const Countries = (props) => {

    const countries = [
        { name: 'Austria', cities : ['Vienna',' ' ,'Graz',' ','Linz',' ','Salzburg'] ,image:<img src={'austria.png'} alt={''}/>},
    { name: 'Albania', cities: ['Tirana', 'Durrës','Vlorë','Elbasan'],image:<img src={'albania.jpg'} alt={''}/>} ,
        { name: 'Belgium', cities: ['Aalst ', 'Aarschot ','Beringen','Genk'] ,image:<img src={'Belgium.png'} alt={''}/>} ,
        { name: 'Bulgaria', cities: ['Sofia ', 'Plovdiv ','Varna','Burgas'] ,image:<img src={'bulgaria-256.png'} alt={''}/>} ,
        { name: 'United Kingdom', cities: ['London ', 'Liverpool ','Manchester','Oxford'],image:<img src={'United Kingdom .png'} alt={''}/>} ,
        { name: 'Hungary', cities: ['Budapest', 'Debrecen ','Szeged','Miskolc'] ,image:<img src={'Hungary.png'} alt={''}/>} ,
        { name: 'Germany', cities: ['Berlin', 'Hamburg','Stuttgart','Cologne '],image:<img src={'germany.png'} alt={''}/>} ,
        { name: 'Greece', cities: ['Athens', 'Thessaloniki','Patras','Volos'] ,image:<img src={'GREECE.png'} alt={''}/>} ,
        { name: 'Denmark', cities: ['Copenhagen', 'Odense','Aarhus','Randers'],image:<img src={'DENMARK.jpg'} alt={''}/>} ,
        { name: 'Ireland', cities: ['Sofia ', 'Plovdiv ','Odense','Burgas'] ,image:<img src={'ireland.png'} alt={''}/>} ,
        { name: 'Iceland', cities: ['Sofia ', 'Plovdiv ','Varna','Burgas'],image:<img src={'Iceland.jpeg'} alt={''}/>} ,
        { name: 'Spain', cities: ['Sofia ', 'Plovdiv ','Varna','Burgas'] ,image:<img src={'SPAIN.png'} alt={''}/>} ,
        { name: 'Italy', cities: ['Sofia ', 'Plovdiv ','Varna','Burgas'],image:<img src={'italy.png'} alt={''}/>} ,
        { name: 'Latvia', cities: ['Sofia ', 'Plovdiv ','Varna','Burgas'] ,image:<img src={'3.png'} alt={''}/>} ,
        { name: 'Lithuania', cities: ['Sofia ', 'Plovdiv ','Varna','Burgas'],image:<img src={'lithuania.png'} alt={''}/>} ,
        { name: 'Monaco', cities: ['Sofia ', 'Plovdiv ','Varna','Burgas'] ,image:<img src={'images.jpeg'} alt={''}/>} ,
        { name: 'Netherlands', cities: ['Sofia ', 'Plovdiv ','Varna','Burgas'],image:<img src={'if_Flag_of_Netherlands_96202.png'} alt={''}/>} ,
        { name: 'Norway', cities: ['Sofia ', 'Plovdiv ','Varna','Burgas'] ,image:<img src={'NORWAY .png'} alt={''}/>} ,
        { name: 'Poland', cities: ['Sofia ', 'Plovdiv ','Varna','Burgas'],image:<img src={'polskii-flag.jpg'} alt={''}/>} ,
        { name: 'Russia', cities: ['Sofia ', 'Plovdiv ','Varna','Burgas'] ,image:<img src={'russia_PNG92466.png'} alt={''}/>} ,
        { name: 'Romania', cities: ['Sofia ', 'Plovdiv ','Varna','Burgas'],image:<img src={'ROMANIA.jpg'} alt={''}/>} ,
        { name: 'Finland', cities: ['Sofia ', 'Plovdiv ','Varna','Burgas'] ,image:<img src={'FINLAND flag.png'} alt={''}/>} ,
        { name: 'France', cities: ['Sofia ', 'Plovdiv ','Varna','Burgas'],image:<img src={'france.png'} alt={''}/>} ,
        { name: 'Croatia', cities: ['Sofia ', 'Plovdiv ','Varna','Burgas'] ,image:<img src={'CROATIA 1.jpg'} alt={''}/>} ,
        { name: 'Montenegro', cities: ['Sofia ', 'Plovdiv ','Varna','Burgas'],image:<img src={'MONTENEGRO.png'} alt={''}/>} ,
        { name: 'Czech Republic', cities: ['Sofia ', 'Plovdiv ','Varna','Burgas'] ,image:<img src={'Czech Republic.png'} alt={''}/>} ,
        { name: 'Switzerland', cities: ['Sofia ', 'Plovdiv ','Varna','Burgas'],image:<img src={'SWITZERLAND.png'} alt={''}/>} ,
        { name: 'Sweden', cities: ['Sofia ', 'Plovdiv ','Varna','Burgas'] ,image:<img src={'sweden-circular.png'} alt={''}/>} ,

    ]
    return (
        <Fragment>
            {countries.map( (c,i) => {

               return <div className={'box'}   >
                   <GenericCountry key={i} cities={c.cities} text={c.name} image={c.image}  />
               </div>
            } )}

    </Fragment>
    )
}


export  default Countries;






