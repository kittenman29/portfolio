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
    const [name, setName] = useState("");  
    const [email, setEmail] = useState("");  
    const [message, setMessage] = useState("");

    const formSubmit = (e) => {
        e.preventDefault()

        let data = {
            name: name,
            email: email,
            message: message
        }
        
        axios.post('https://will-schulz-portfolio-back-end.herokuapp.com/api/v1', data)
        .then( res => {
            resetForm()
            alertSuccess()
        })
        .catch( () => {
          console.log('Message not sent')
          resetForm()
        })
      }

      const resetForm = () => {
        setName("");
        setEmail("");
        setMessage("");
    }

    const alertSuccess = () => {
        alert(`
        Email Sent Successfully!

        Name: ${name}
        Email Address: ${email}
        Message: ${message}
        `)
    }

  return (
    <animated.div className="contact-card-container" style={props}>
        <div>
            <form className="contact-form" onSubmit={formSubmit}>
                <div className="name-input-container input-container">
                    <label className="name-label label" htmlFor="message-name">Your Name:</label>
                    <input onChange={e => setName(e.target.value)}
                    value={name} 
                    name="name"
                    className="name-input" 
                    type="text" 
                    placeholder="Your Name" 
                    />
                </div>

                <div className="email-input-container input-container">
                    <label className="email-label label" htmlFor="message-email">Your Email:</label>
                    <input onChange={e => setEmail(e.target.value)} 
                    name="email" 
                    className="email-input" 
                    type="email" 
                    placeholder="your@email.com" 
                    required 
                    value={email}  />
                </div>
                
                <div className="message-input-container input-container">
                    <label className="message-label label" htmlFor="message-input">Your Message:</label>
                    <textarea onChange={e => setMessage(e.target.value)} 
                    name="message" 
                    className="message-input" 
                    type="text" 
                    placeholder="Please write your message here" 
                    value={message} 
                    required/>
                </div>

                <div className="button--container">
                    <button type="submit" className="button">Submit</button>
                </div>
            </form>
        </div>
    </animated.div>   
    )
}

export default Contact;