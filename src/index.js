import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './styles.css';

import Home from './components/home/Home.js';
import About from './components/about/About.js';
import Projects from './components/projects/Projects.js';
import Contact from './components/contact/Contact.js';

export default function App() {

    return (
      <>
        <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/home" component={Home} />
         <Route path="/about" component={About} />
         <Route path="/projects" component={Projects} />
         <Route path="/contact" component={Contact} />
       </Switch>
      </>
    );
}


render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
)
