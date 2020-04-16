 
import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import './App.css';
import Navbar from './layouts/Navbar'
import Breeds from './layouts/Breeds'
import  SearchArea from './layouts/SearchArea'
import BreedDetails from './components/breedDetails'

class App extends Component {
  render() {

    return (
      <div className="App">
      <Router>
        <Fragment>
          <Navbar />
  
          <Route path="/" exact component={ SearchArea }/>
          <Route path="/" exact component={ Breeds }/>
          <Switch>
              
              <Route exact path="/breeds" component={ Breeds } />
              <Route exact path="/breed-details/:id" component={BreedDetails} />
              
            </Switch>
       
           
          </Fragment>
          </Router>
    </div>
  );
}

}

export default App;
