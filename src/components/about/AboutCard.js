import React from 'react'
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
        <strong>Hi, I'm Will.</strong> I grew up in a suburb of St. Paul, Minnesota and enjoy playing sports, spending time outdoors, 
        hanging with my golden retriever, and traveling. I’ve had the opportunity to visit 14 countries and have lived abroad in Spain 
        and Puerto Rico.
        <br />
        <br />
        <strong>Here’s the scoop.</strong> After a 6+ year career in accounting and finance, 
        I took a leap of faith and pursued my passion for web development and computer science through Lambda School, 
        and I couldn’t be happier. Being able to express any function, concept, or equation, memorialize that in 
        script and share it with the world, is such a powerful concept. In my spare time I find myself 
        reading about networking, experimenting with new npm packages, learning new languages, etc. I can’t wait 
        to see where my new path takes me and what I get to build and create next! 
        </p>
        <p className="about-content"><strong>I love to learn.</strong> I’ve consistently pushed myself to 
        broaden my skillset beyond the workplace through continuing education. 
        From actuarial mathematics to experimenting in the world of cryptocurrency, from woodworking to 
        studying countless books and articles, I’ll always jump on the opportunity to learn. 
        </p>
        <p className="about-content">
        <strong>I have diverse experience.</strong> Having worked for multiple financial institutions, government agencies, 
        a cryptocurrency hedge fund start-up, a vegetable farm, lumber company and more, I’ve gained invaluable 
        skills that will benefit my future employer. I have stellar communication skills, can quickly adapt, 
        am always eager to take on new projects and challenges, and love to problem solve.
        </p>
        <p className="about-content"><strong>I am a leader.</strong> From presenting company 
        financials to a board of directors to coaching a women’s college hockey team, 
        I’ve never been one to turn down a leadership role. Most recently, I’ve had the 
        opportunity to work for Lambda School as a project manager to help manage remote learners like myself.
        </p>
    </div>
    </animated.div>
    )
}

export default AboutCard;
