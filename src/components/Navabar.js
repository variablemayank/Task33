import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddnewList from './AddnewList';
import MovieList from './MovieList';

export default class Navabar extends Component {
  render() {
    return (
        <div style = {{
            width:'100%',
            height:'150px',
            backgroundColor:'black'
        }}>
        sdfsdfsd
          <p style ={{
              color:'white',
              fontSize:'35px'
          }}>IMDB</p>
          
         <Link to ="/add" target="_blank">ADD</Link>
        <MovieList/>
        </div>
    )   
  }                                                                                                                                                                                                                                                                      
}
