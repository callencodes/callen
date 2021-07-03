import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Hero.css'

function Hero({
  lightBg, topLine, lightText, lightTextDesc, headline, preference, education, languages, buttonLabel, src, alt, imgStart
}) {
  return (
    <>
    <div className={lightBg ? 'home_hero-section' : 'home_hero-section darkbg'}>
      <div className="container">
        <div className="row home_hero-row"
        style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse': 'row'}}
        >
          <div className='col'>
            <div className='home_hero-text-wrapper'>
              <div className='top-line'>{topLine}</div>
              <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
              <p className={lightTextDesc ? 'home_hero-subtitle' : 'home_hero-subtitle dark'}>I recently graduated with a {education}. I am a {preference} developer with experience in {languages}.</p>
              <Link to='/portfolio'>
                <Button buttonSize='btn--large' buttonColor='green'>{buttonLabel}</Button>
              </Link>
            </div>
          </div>
          <div className='col'>
            <div className='home_hero-img-wrapper'>
              <img src={src} alt={alt} className='home_hero-img'/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero;