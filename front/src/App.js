import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import Test from './ContollerCrud/Test';
import List from './ContollerCrud/List';
import Ajouter from './ContollerCrud/Ajouter';
//import FontExplosif from './ComponentsExplosion/FontExplosif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <FontExplosif/> */}
          <Route exact path='/test' component={Test}/> 
          <Route path='/list' component={List}/>
          <Route path='/ajouter' component={Ajouter}/>
          {/* <Route path='/explosif' component={FontExplosif}/> */}
      </div>
    );
  }
}

export default App;
