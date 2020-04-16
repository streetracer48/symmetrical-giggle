 
import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import './App.css';
import Navbar from './layouts/Navbar'
import Breeds from './layouts/Breeds'
import  SearchArea from './layouts/SearchArea'

class App extends Component {
  render() {

    return (
      <div className="App">
      <Router>
        <Fragment>
          <Navbar />
          <Route path="/" exact component={ SearchArea }/>
          <Route path="/" exact component={ Breeds }/>
           
          </Fragment>
          </Router>
    </div>
  );
}

}

export default App;
