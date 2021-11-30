import React, { Component } from 'react';

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import { Contact } from './components/Contact.js';
import { Passwordmaker } from './components/Passwordmaker';
import { Home} from './components/Home';
import Navbar from "./components/Navbar";
import './App.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Router>
            <Navbar />
            <Routes>
            
                <Route exact path="/" element={<Home/>}/> 
               
                <Route path="/Contact" element={<Contact/>} />

                <Route path="/Passwordmaker" element={<Passwordmaker/>} />
            </Routes>
        </Router>
    );
  }
}