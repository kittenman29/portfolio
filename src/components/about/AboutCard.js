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
        <p className="about-content top-content">Lorem ipsum dolor amet blue bottle keytar migas forage offal irure gentrify viral vice whatever veniam succulents you probably haven't heard of them ipsum. In direct trade lyft pickled, hexagon culpa hoodie pork belly trust fund et hashtag master cleanse. Chia gochujang hoodie, velit PBR&B in nisi etsy banh mi. Cornhole cloud bread scenester, before they sold out dreamcatcher poke meditation helvetica chartreuse consectetur excepteur. Roof party occaecat pok pok pariatur. Mollit brooklyn intelligentsia chambray ethical taxidermy twee paleo aliqua fashion axe kinfolk, ennui gastropub esse af.</p>
        <p className="about-content">Tilde esse exercitation quinoa. Portland butcher minim farm-to-table palo santo heirloom pug swag tote bag. Literally 8-bit flexitarian post-ironic anim. Tilde mollit plaid nisi XOXO woke offal elit. Cold-pressed deserunt proident vinyl freegan food truck. Knausgaard copper mug mollit lumbersexual.</p>
        <p className="about-content">Try-hard polaroid adaptogen wolf fingerstache la croix. Banjo elit bespoke dreamcatcher. Salvia consequat pariatur narwhal. Neutra man braid flexitarian chartreuse. Put a bird on it ramps disrupt forage literally anim PBR&B seitan crucifix.</p>
    </div>
    </animated.div>
    )
}

export default AboutCard;
