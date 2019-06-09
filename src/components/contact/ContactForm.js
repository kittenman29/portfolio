import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';

import Navigation from '../navigation/Navigation.js';

import Chevron from '../about/data/Chevron.png';

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
      
        setFormState({
            buttonText: '...sending'
        })
      
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        
        axios.post('https://nodejs-express.willschulz29.now.sh/api/v1', data)
        .then( res => {
            this.setState({ sent: true }, this.resetForm())
        })
        .catch( () => {
          console.log('Message not sent')
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

  return (
    <animated.div className="about-card-container" style={props}>
        <div>
            <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
                <label class="message" htmlFor="message-input">Your Message</label>
                <textarea onChange={e => setFormState({ message: e.target.value})} name="message" class="message-input" type="text" placeholder="Please write your message here" value={formState.message} required/>

                <label class="message-name" htmlFor="message-name">Your Name</label>
                <input onChange={e => setFormState({ name: e.target.value})} name="name" class="message-name" type="text" placeholder="Your Name" value={formState.name}/>

                <label class="message-email" htmlFor="message-email">Your Email</label>
                <input onChange={(e) => setFormState({ email: e.target.value})} name="email" class="message-email" type="email" placeholder="your@email.com" required value={formState.email} />

                <div className="button--container">
                    <button type="submit" className="button button-primary">{formState.buttonText}</button>
                </div>
            </form>
        </div>
    </animated.div>   
    )
}

export default Contact;