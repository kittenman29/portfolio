import React, {useState} from 'react';
import axios from 'axios';
import { useSpring, animated, config } from 'react-spring';

import './contact.css'

const Contact = () => {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: '500',
        config: config.slow
    })
    const [formState, setFormState] = useState({
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    })

    const formSubmit = (e) => {
        e.preventDefault()
        console.log("is this working?")
        setFormState({
            buttonText: '...sending'
        })
      
        let data = {
            name: formState.name,
            email: formState.email,
            message: formState.message
        }
        
        axios.post('https://will-schulz-portfolio-back-end.herokuapp.com/api/v1', data)
        .then( res => {
            setFormState({ sent: true })
            resetForm()
            console.log(...formState)
        })
        .catch( () => {
          console.log('Message not sent')
          resetForm()
        })
      }

      const resetForm = () => {
        setFormState({
            name: '',
            message: '',
            email: '',
            buttonText: 'Message Sent'
        })
    }

    const handleChange = (e) => {
        e.preventDefault();
        setFormState({
            
        })

    }

  return (
    <animated.div className="contact-card-container" style={props}>
        <div>
            <form className="contact-form" onSubmit={formSubmit}>
                <label className="message-name" htmlFor="message-name">Your Name</label>
                <input onChange={e => setFormState({ name: e.target.value})} 
                name="name" className="message-name" 
                type="text" 
                placeholder="Your Name" 
                value={formState.name}/>

                <label className="message-email" htmlFor="message-email">Your Email</label>
                <input onChange={(e) => setFormState({ email: e.target.value})} 
                name="email" className="message-email" 
                type="email" 
                placeholder="your@email.com" 
                required 
                value={formState.email} />
                
                <label className="message" htmlFor="message-input">Your Message</label>
                <textarea onChange={e => setFormState({ message: e.target.value})} 
                name="message" 
                className="message-input" 
                type="text" placeholder="Please write your message here" 
                value={formState.message} 
                required/>

                <div className="button--container">
                    <button type="submit" className="button button-primary">{formState.buttonText}</button>
                </div>
            </form>
        </div>
    </animated.div>   
    )
}

export default Contact;