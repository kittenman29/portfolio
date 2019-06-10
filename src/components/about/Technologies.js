import React from 'react'
import { useSpring, animated, config } from 'react-spring';

import './about.css'

import htmlLogo from './data/HTML.png'
import JavascriptLogo from './data/Javascript.png'
import ReactLogo from './data/React.png'
import FirebaseLogo from './data/Firebase.png'
import NodeLogo from './data/Node.png'
import GraphQLLogo from './data/GraphQL.png'
import PostgresLogo from './data/postgres.png'
import PythonLogo from './data/Python.png'
import MatlabLogo from './data/Matlab.png'
import GitLogo from './data/Git.png'


const AboutCard = () => {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: '650',
        config: config.slow
    })
  return (
    <animated.div className="tech-stack-container" style={props}>
        <div >
            <p className="tech-stack-header">Tech Stack</p>
            <div className="logo-container">
                <img className="stack-logo" alt="html-logo" src={htmlLogo}/>
                <img className="stack-logo" alt="firebase-logo" src={FirebaseLogo}/>
                <img className="stack-logo" alt="javascript-logo" src={JavascriptLogo}/>
                <img className="stack-logo" alt="react-logo" src={ReactLogo}/>
                <img className="stack-logo" alt="node-logo" src={NodeLogo}/>
                <img className="stack-logo" alt="graphql-logo" src={GraphQLLogo}/>
                <img className="stack-logo" alt="postgres-logo" src={PostgresLogo}/>
                <img className="stack-logo" alt="python-logo" src={PythonLogo}/>
                <img className="stack-logo" alt="matlab-logo" src={MatlabLogo}/>
                <img className="stack-logo" alt="github-logo" src={GitLogo}/>
            </div>
        </div>
    </animated.div>
    )
}

export default AboutCard;