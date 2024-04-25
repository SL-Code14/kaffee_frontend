import React from 'react'
import Home from '../components/landingpage/home'
import About from '../components/landingpage/about'
import Card from '../components/landingpage/card'

function Homepage() {
  return (
    <div>
        <Home/>
        <About/>
        <Card/>
    </div>
  )
}

export default Homepage