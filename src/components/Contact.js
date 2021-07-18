import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter } from 'react-icons/fa'
import { Button } from './Button'
import { SiMinutemailer } from 'react-icons/si'
import { GrLinkedinOption } from 'react-icons/gr'
import { IconContext } from 'react-icons/lib'
import './Contact.css'

function Contact({
  lightBg, lightText, lightTextDesc, email, email2, social}) {
  return (
    <IconContext.Provider value={{color: '#fff', size: 64}}>
    <div>
      <div className="contact__section">
        <div className="contact__wrapper">
          <h1 className="contact__heading">Contact</h1>
          <div className="contact__container">
            <Link to="/contact" className="contact__container-card">
              <div className="contact__container-cardInfo">
                <div className="icon">
                  <FaTwitter />
                </div>
                <h3>Twitter</h3>
                <h4>@{social[1].username}</h4>
                <p>Interact with me!</p>
                <Link to='/contact'>
                  <Button buttonSize='btn--wide' buttonColor='primary'>
                    Tweet
                  </Button>
                </Link>
              </div>
            </Link>
            <Link to="/contact" className="contact__container-card">
              <div className="contact__container-cardInfo">
                <div className="icon">
                  <SiMinutemailer />
                </div>
                <h3>Email</h3>
                <h3>{email2}</h3>
                <p>Shoot me an email!</p>
                <Button buttonSize='btn--wide' buttonColor='green'>
                  Email
                </Button>
              </div>
            </Link>
            <Link to="/contact" className="contact__container-card">
              <div className="contact__container-cardInfo">
                <div className="icon">
                  <GrLinkedinOption />
                </div>
                <h3>LinkedIn</h3>
                <h4>{social[0].username}</h4>
                <p>Connect with me!</p> 
                <a href={social[0].url} rel="noreferrer">
                  <Button buttonSize='btn--wide' buttonColor='primary'>
                    Connect
                  </Button>
                </a>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </IconContext.Provider>
  )
}

export default Contact
