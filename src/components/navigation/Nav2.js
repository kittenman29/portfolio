import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated, config } from 'react-spring';

import './navigation.css'

const Nav2 = () => {
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
        <Link className="secondary-nav" to='/projects'>Projects</Link>
        <Link className="third-nav" to='/contact'>Contact</Link>
      </div>
    </animated.div>
  )
}

export default Nav2;