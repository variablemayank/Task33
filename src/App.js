import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navabar from './components/Navabar';
import MovieList from './components/MovieList';
import AddnewList from '../src/components/AddnewList';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path = "/" component = {Navabar} />
            <Route path ="/add" component = {AddnewList} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
