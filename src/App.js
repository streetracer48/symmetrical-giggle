 
import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import './App.css';
import Navbar from './layouts/Navbar'
class App extends Component {
  render() {

    return (
      <div className="App">
      <Router>
        <Fragment>
          <Navbar />
          </Fragment>
          </Router>
    </div>
  );
}

}

export default App;
