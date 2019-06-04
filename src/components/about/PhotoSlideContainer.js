
import React from 'react'
import { useSpring, animated, config } from 'react-spring';


import './about.css'
import PhotoSlide from './PhotoSlide.js'

const PhotoSlideContainer = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: '500',
    config: config.slow
})
  return (
    <animated.div className="photo-container" style={props}>
      <div>
        <PhotoSlide />
      </div>
    </animated.div>
  )
}

export default PhotoSlideContainer;