import React from 'react'
import {portfolioObj} from './Data'
import Portfolio from '../../Portfolio'

function Folio() {
  return (
    <>
      <Portfolio {...portfolioObj}></Portfolio>
    </>
  )
}

export default Folio