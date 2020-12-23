import React,{ Component } from 'react';
import Route from "react-router-dom/es/Route";
import MetaTags from 'react-meta-tags';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Header from "./components/generic/Header";
import Home from "./components/Home/Home";
import Countries from "./components/Countries/Countries";
import Contacts from "./components/Contacts/Contacts";
import YouTour from "./components/YourTour/YouTour";



class App extends Component {
  render () {

    return (
      <BrowserRouter>
        <div className={'App'}>
          <MetaTags>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          </MetaTags>
          <Header/>
          <Route path={'/home'} component={Home}/>
          <Route path={'/countries'} component={Countries}/>
          <Route path={'/contacts'} component={Contacts}/>
          <Route path={'/tour'} component={YouTour}/>
        </div>
      </BrowserRouter>




    );
  }

}

export default App;
