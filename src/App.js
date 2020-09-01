import React,{ Component } from 'react';
import './App.css';
import Header from "./components/generic/Header";
import Home from "./components/Home/Home";
import Company from "./components/Home/Company";
import AboutUs from "./components/Home/AboutUs";



class App extends Component {
  render () {
    return (
        <div className={'App'}>
        <Header/>
        <Home/>
        <Company/>
        <AboutUs/>
        </div>

    );
  }

}

export default App;
