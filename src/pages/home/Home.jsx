import React from 'react'
import './home.css'

import Profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="profile" className="home__img" />

      <div className='home__content'>
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Saurabh Kumar.</span> Web Designer
          </h1>

          <p className="home__description">
          Hi, I'm Saurabh Kumar, a freelance web developer and designer. I create beautiful and functional websites that help turn your vision into reality. I also have a passion for learning new skills and exploring new trends in web design.
          </p>

          <Link to='/about' className='button'>
            More About Me <span className='button__icon'><FaArrowRight/></span>
          </Link>
        </div>
      </div>

      <div className="color__block">
        
      </div>
    </section>
  )
}

export default Home
