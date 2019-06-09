import React from 'react'
import { useSpring, animated, config } from 'react-spring';

import Project1 from './Project1.js';
import Project2 from './Project2.js';
import Project3 from './Project3.js';
import Project4 from './Project4.js';

import './projects.css'

const ProjectFade = () => {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: '500',
        config: config.slow
    })
  return (
    <animated.div className="project-fade-container" style={props}>
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
    </animated.div>
    )
}

export default ProjectFade;