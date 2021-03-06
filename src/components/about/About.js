import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring';

import PhotoSlideContainer from './PhotoSlideContainer.js';
import Technologies from './Technologies.js';
import AboutCard from './AboutCard.js';
import Nav2 from '../navigation/Nav2.js';

import Chevron from './data/Chevron.png';

import './about.css'

const About = () => {
const props = useSpring({
    from: { left: '100%', top: '0%', width: '0%', height: '100%' },
    to: { left: '0%', top: '0%', width: '100%', height: '100%' },
  })
  return (
    <animated.div  style={ props }>
        <Nav2 />
        <div className="about-container">
            <header className="App-header" >
                <p className="about-header">About Me</p>
                <div className="about-photo-container">
                    <AboutCard />
                    <PhotoSlideContainer />
                    <Technologies />
                </div>
            </header>
            <Link to='/'>
                <img src={Chevron} alt="back-button" className="back"/>
            </Link>
            <Link to='/projects'>
                <img src={Chevron} alt="forward-button" className="next"/>
            </Link>
        </div>
    </animated.div>   
    )
}

export default About;