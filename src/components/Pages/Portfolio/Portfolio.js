import React from 'react'
import {portfolioObj} from './Data'
import Portfolio from '../../Portfolio'

function Home() {
  return (
    <>
      <Portfolio {...portfolioObj}></Portfolio>
    </>
  )
}

export default Home