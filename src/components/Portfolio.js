import React from 'react'
import { Link } from 'react-router-dom'
import { RiFlutterFill } from 'react-icons/ri'
import { Button } from './Button'
import { FaVuejs } from 'react-icons/fa'
import { GiBrain } from 'react-icons/gi'
import { IconContext } from 'react-icons/lib'
import './Portfolio.css'

function Portfolio() {
  return (
    <IconContext.Provider value={{color: '#fff', size: 64}}>
    <div>
      <div className="portfolio__section">
        <div className="portfolio__wrapper">
          <h1 className="portfolio__heading">Portfolio</h1>
          <div className="portfolio__container">
          <Link to="/portfolio" className="portfolio__container-card">
              <div className="portfolio__container-cardInfo">
                <div className="icon">
                  <FaVuejs />
                </div>
                <h3>Completed</h3>
                <h4>Ronswansays</h4>
                <p>Find out what Ron Swanson has to say</p>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Github
                </Button>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Website
                </Button>
              </div>
            </Link>
            <Link to="/portfolio" className="portfolio__container-card">
              <div className="portfolio__container-cardInfo">
                <div className="icon">
                  <RiFlutterFill />
                </div>
                <h3>In progress</h3>
                <h4>Recipe App</h4>
                <p>An app to manage your recipes</p>
                <Button buttonSize='btn--wide' buttonColor='green'>
                  Github
                </Button>
                <Button buttonSize='btn--wide' buttonColor='green'>
                  Website
                </Button>
              </div>
            </Link>
            <Link to="/portfolio" className="portfolio__container-card">
              <div className="portfolio__container-cardInfo">
                <div className="icon">
                  <GiBrain />
                </div>
                <h3>Up Next</h3>
                <h4>Musicly</h4>
                <p>A website to share music</p>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Github
                </Button>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Website
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </IconContext.Provider>
  )
}

export default Portfolio
