import React,{ Component } from 'react';
// import {Route,Switch} from "react-router-dom/es/Route";
import MetaTags from 'react-meta-tags';
// import {BrowserRouter,} from "react-router-dom";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
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
        <Switch>
        <div className={'App'}>
          <MetaTags>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          </MetaTags>
          <Header/>
          <Route exact path={'/home'} component={Home}/>
          <Route exact path={'/countries'} component={Countries}/>
          <Route exact path={'/contacts'} component={Contacts}/>
          <Route exact path={'/tour'} component={YouTour}/>
        </div>
        </Switch>

      </BrowserRouter>




    );
  }

}

export default App;
