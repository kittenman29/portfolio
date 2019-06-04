import React from 'react';
import { useSpring, animated, config } from 'react-spring';

const Subtitle = () => {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: '750',
        config: config.slow
    })
    return <animated.div className="subtitle" style={props}>I love to be challenged and solve problems</animated.div>
}

export default Subtitle;