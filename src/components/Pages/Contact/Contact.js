import React from 'react'
import {contactObj} from './Data'
import Contact from '../../Contact'

function Home() {
  return (
    <>
      <Contact {...contactObj}></Contact>
    </>
  )
}

export default Home