import React,{ Component } from 'react';
 import Route from "react-router-dom/es/Route";
import MetaTags from 'react-meta-tags';
import {BrowserRouter,Switch} from 'react-router-dom';
import './App.css';
import Header from "./container/Header/Header";
import Home from "./component/Home/Home";
import Countries from "./container/Countries/Countries";
import Contacts from "./component/Contacts/Contacts";
import YouTour from "./container/YourTour/YouTour";

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
          <Route exact path={'/palm_app'} component={Home}/>
          <Route exact path={'/countries'} component={Countries}/>
          <Route exact path={'/contacts'} component={Contacts}/>
          <Route exact path={'/tour'} component={YouTour}/>
        </div>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
