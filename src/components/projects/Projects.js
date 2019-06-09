import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated, config } from 'react-spring';

import ProjectFade from './ProjectsFade.js';
import Navigation from '../navigation/Navigation.js';

import Chevron from '../about/data/Chevron.png';

import './projects.css'

const Projects = () => {
const props = useSpring({
    from: { left: '100%', top: '0%', width: '0%', height: '100%' },
    to: { left: '0%', top: '0%', width: '100%', height: '100%' },
  })
  return (
    <animated.div  style={ props }>
        <Navigation />
        <div className="about-container">
            <header className="App-header" >
                <p className="projects-header">Recent Projects</p>
                <ProjectFade />
            </header>
            <img src={Chevron} className="chevron-back"/>
            <Link className="back-container" to='/about'></Link>
            <img src={Chevron} className="chevron-next"/>
            <Link className="next-container" to='/contact'></Link>
        </div>
    </animated.div>   
    )
}

export default Projects;