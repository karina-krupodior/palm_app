import React,{ Component } from 'react';
import './App.css';
import MetaTags from 'react-meta-tags';
import Header from "./components/generic/Header";
import Home from "./components/Home/Home";
import Countries from "./components/Countries/Countries";
import Contacts from "./components/Contacts/Contacts";
import YouTour from "./components/YouTour/YouTour";

import Route from "react-router-dom/es/Route";
import {BrowserRouter,Switch} from "react-router-dom";
import {Provider} from "react-redux";

import store from './redux/store';

class App extends Component {
  render () {

    return (
        <BrowserRouter>
        <Provider  store={store}>

        <div className={'App'}>
          <MetaTags>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          </MetaTags>

          <Header/>

          <Switch>
          <Route path={'/home'} component={Home}/>
          <Route path={'/countries'} component={Countries}/>
          <Route path={'/contacts'} component={Contacts}/>
          <Route path={'/tour'} component={YouTour}/>
          </Switch>
        </div>
        </Provider>
      </BrowserRouter>




    );
  }

}

export default App;
