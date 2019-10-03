import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Blogs from './Components/Blogs/Blogs'
import Contact from './Components/Contact/Contact'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer';
import Picture from './Components/Pictures/Picture'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Banner />
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/blogs' component={Blogs} />
          <Route exact path='/memories' component={Picture} />
          <Route exact path='/contact' component={Contact} />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
