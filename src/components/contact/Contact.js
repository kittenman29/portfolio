import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated, config } from 'react-spring';

import Navigation from '../navigation/Navigation.js';
import ContactForm from './ContactForm.js';

import Chevron from '../about/data/Chevron.png';

import './contact.css'

const Contact = () => {
    const props = useSpring({
        from: { left: '100%', top: '0%', width: '0%', height: '100%' },
        to: { left: '0%', top: '0%', width: '100%', height: '100%' },
    })


  return (
    <animated.div  style={ props }>
        <Navigation />
        <div className="about-container">
            <header className="App-header" >
                <p className="projects-header">Contact</p>
            </header>
            <ContactForm />
            <img src={Chevron} className="chevron-back"/>
            <Link className="back-container" to='/projects'></Link>
        </div>
    </animated.div>   
    )
}

export default Contact;