import React, {Component, Fragment} from "react";
import './Home.css';
import Company from "./Company";
import AboutUs from "./AboutUs";







class Home extends Component {
    render() {
       return(
           <Fragment>
               <div className={'content'}>
                   <ul className={'menu_list_home'}>

                       <div className={'five_steps'}>
                           <li className={'menu_item_home'}>MAKE YOUR TOUR IN 5 STEPS</li>
                       </div>


                       <li className={'menu_item_home'}><p>1.CHOOSE  COUNTRIES WHAT
                           YOU WANT TO VISIT</p> </li>

                       <li className={'menu_item_home'}><p>2.CHOOSE CITIES  WHAT  YOU WANT TO VISIT   </p> </li>

                       <li className={'menu_item_home'}><p>3.CHECK OUT OUR OFFERS </p> </li>

                       <li className={'menu_item_home'}> <p>4.BOOK A TOUR </p> </li>

                       <li className={'menu_item_home'}> <p>5.ENJOY YOUR TRIP</p> </li>

                   </ul>
                   <div>
                       <img  className={'image_home'} src={'bg_1.jpg'} alt="" />


                   </div>


               </div>


               <Company/>
               <AboutUs/>
           </Fragment>




       )


    }



}



export default  Home;