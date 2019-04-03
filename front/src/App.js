import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import Test from './Test';
import List from './List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path='/test' component={Test}/> 
          <Route path='/list' component={List}/>
      </div>
    );
  }
}

export default App;
