import React from 'react'
import Hero from '../../Hero'
import {homeObjUno} from './Data'

function Home() {
  return (
    <>
      <Hero {...homeObjUno}></Hero>
    </>
  )
}

export default Home
