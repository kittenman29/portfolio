import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated, config } from 'react-spring';

import './navigation.css'

const Nav4 = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: '1000',
    config: config.slow
})
return (
    <animated.div className="nav-container about-nav" style={props}>
      <div>
        <Link className="primary-nav" to='/home'>Home</Link>
        <Link className="secondary-nav" to='/about'>About</Link>
        <Link className="third-nav" to='/projects'>Projects</Link>
      </div>
    </animated.div>
  )
}

export default Nav4;