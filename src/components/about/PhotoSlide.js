import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './about.css'

import Montana from './data/Montana.jpg'
import BigSky from './data/BigSky.jpg'
import Budapest from './data/Budapest.jpg'
import Condado from './data/Condado.jpg'
import Brussels from './data/Brussels.jpg'
import Culebra from './data/Culebra.jpg'
import Isabella from './data/Isabella.jpg'
import Keystone from './data/Keystone.jpg'
import OceanPark from './data/OceanPark.jpg'
import Rincon from './data/Rincon.jpg'

const slides = [
  { id: 0, url: Montana },
  { id: 1, url: Keystone },
  { id: 2, url: Condado },
  { id: 3, url: Budapest },
  { id: 4, url: OceanPark },
  { id: 5, url: BigSky },
  { id: 6, url: Brussels },
  { id: 7, url: Rincon },
  { id: 8, url: Isabella },
  { id: 9, url: Culebra },
]

const PhotoSlide = () => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 10), 3000), [])
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg"
      style={{ ...props, backgroundImage: `url(${item.url})` }}
    />
  ))
}

export default PhotoSlide;