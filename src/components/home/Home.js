import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated, config } from 'react-spring';

import Subtitle from './Subtitle.js';
import Navigation from '../navigation/Navigation.js';

import Chevron from '../about/data/Chevron.png'

import './home.css'

const Home = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: '150',
    config: config.slow
})

return (
      <div className="home-container">
        <Navigation />
        <animated.div className="header" style={props}>
          Hi, my name is Will
        </animated.div>
        <Subtitle />
        <Link to='/about'>
          <img src={Chevron} alt="next-button" className="next"/>
        </Link>
      </div>
  
  )
}

export default Home;