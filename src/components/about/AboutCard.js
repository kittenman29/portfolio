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
        This past December I took a leap of faith and cleared my schedule for the better part of a year in order 
        to become immersed in the world of web development and computer science.
        Even if I don't end up ever getting a job as a developer, doing a coding bootcamp 
        will end up being the best decision of my life.  Being able to express any function, 
        concept, or equation, memorialize that in script and share it with the world, is such 
        a powerful concept and it makes me smile everytime I think about it.  I couldn't be any happier to sit down on a nightly basis and read 
        about networking, experiment with a new npm package, or start learning a new language.
        <br />
        <br />
        Before Lambda School I had a successful accounting career for 6+ years, but didn't enjoy it. Apart from accounting I studied after work
        for other professional exams which would hopefully afford me a chance to switch career paths.  I tried my hand at actuarial mathematics and financial mathematics
        but the burden and time investment was untenable and didn't allow me to have a life outside of work and study.  Having experience and learning about so many different industries has given me a lot of 
        invaluable experience and insight into how companies are structured and run on a fundamental level.  Apart from developing great communication skills
        I've also gained many other soft-skills that transfer well to any industry or job including presenting to boards, undergoing audits, conducting audits, 
        and most recently managing remote workers.
        I've been fortunate enough to have had a lot of great managers, directors, VPs, and mentors who have guided me and shown me what it takes to be a great leader.  The skill set that
        was evading me was a stronger tech background.  After being a student at Lambda School, I'm more confident than ever in my abilities to adapt to and learn
        new technologies and languages quickly.  I love learning and I love the ethos of software engineering where questions are encouraged and continuing education is the norm.  
        </p>
        <p className="about-content">I grew up in a suburb of St. Paul, MN playing hockey, soccer, golf, tennis, and skiing (both downhill and nordic).  
        I still love doing all of those activities and still play all of them regularly.  I love the outdoors, hiking, camping, canoeing, and hunting (only birds).
        I love traveling for vacations, enjoying new experiences, and taking pictures of beautiful landscapes.  
        </p>
        <p className="about-content">
        I am an avid learner and a lifelong student.  I enjoy helping people.  I love building and creating. 
        </p>
    </div>
    </animated.div>
    )
}

export default AboutCard;
