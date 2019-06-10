import React from 'react'
import { useSpring, animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './projects.css'

const calc = (x, y) => [(y - window.innerHeight / 2) / 200, -(x - window.innerWidth / 2) / 200, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Project4() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, .75],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  return (
    <animated.div
      className="project-card pc4"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, .75] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <a href="https://github.com/kittenman29/Landing-Page-Will-S">
        <FontAwesomeIcon className="icon-two fa-3x" icon={faGithub} />
      </a>
    </animated.div>
  )
}

export default Project4;