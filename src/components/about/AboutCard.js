import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated, config } from 'react-spring';

import './about.css'

const AboutCard = () => {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: '500',
        config: config.slow
    })
  return (
    <animated.div className="about-card-container" style={props}>
    <div >
        <p className="about-content top-content">    
        It has taken me nearly a decade to find a career that I enjoy so much I consider it a hobby. 
        The 'ah-hah' moments, the strenuous hours of debugging, the stack overflow, the api documentation, the open source repositories, the continual learning and infinte updates.  
        These are the things that I live for.  I finally took a leap of faith and cleared my schedule for the better part of a year in order to become immersed in the world of web development and computer science.
        Even if I don't end up ever getting a job as a developer, doing a coding bootcamp will end up being the best decision of my life.  Being able to express any function, concept, or equation, memorialize that in script, 
        and share it with the world, is such a powerful concept.
        <br />
        
        </p>
        <p className="about-content">I grew up in a suburb of St. Paul, MN.  I grew up playing hockey, soccer, golf, tennis, and skiing (both downhill and nordic).  I am happy to say that I still love doing all of those activities and still play all of them.  I love the outdoors, hiking, camping, canoeing, and hunting (only birds).
        
        </p>
        <p className="about-content">Try-hard polaroid adaptogen wolf fingerstache la croix. Banjo elit bespoke dreamcatcher. Salvia consequat pariatur narwhal. Neutra man braid flexitarian chartreuse. Put a bird on it ramps disrupt forage literally anim PBR&B seitan crucifix.</p>
    </div>
    </animated.div>
    )
}

export default AboutCard;
