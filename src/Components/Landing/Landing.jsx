import React from 'react'
import './Landing.css'
import Nav from '../Navbar/Nav'
import Banner from '../banner/Banner'
import Trending from './Trending'

function Landing() {
  return (
    <div className='landing'>
      <div className="landing-contents">
      <div className="navbar">
        <Nav/>
      </div>
      <div className="banner">
        <Banner/>
      </div>

      <div className="trendingbox">
        <Trending/>
      </div>


    

      </div>
    </div>
  )
}

export default Landing
