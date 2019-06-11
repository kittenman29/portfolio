import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring';

import Nav4 from '../navigation/Nav4.js';
import ContactForm from './ContactForm.js';

import Chevron from '../about/data/Chevron.png';

import './contact.css'

const Contact = () => {
    const props = useSpring({
        from: { left: '100%', top: '0%', width: '0%', height: '100%' },
        to: { left: '0%', top: '0%', width: '100%', height: '100%' },
    })


  return (
    <animated.div style={ props }>
        <Nav4 />
        <div className="contact-container">
            <header className="App-header" >
                <p className="projects-header">Contact</p>
            </header>
            <ContactForm />
            <Link to='/projects'>
                <img src={Chevron} alt="back-button" className="back"/>
            </Link>
        </div>
    </animated.div>   
    )
}

export default Contact;