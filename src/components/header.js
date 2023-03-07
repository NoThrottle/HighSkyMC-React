import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryBlueButton from './primary-blue-button'
import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className={`header-header ${props.rootClassName} `}>
      <nav className="header-nav">
        <div className="header-container">
          <img
            alt={props.image_alt}
            src="https://i.imgur.com/AUfR9vt.png"
            className="header-image"
          />
          <a
            href="https://www.highskymc.com/"
            className="header-link HeadingThree"
          >
            <span className="">HighSkyMC</span>
          </a>
          <div className="header-menu">
            <a href="https://www.highskymc.com/" className="header-link1 Large">
              Home
            </a>
            <Link to="/resources" className="header-navlink Large">
              Resources
            </Link>
            <Link to="/faq" className="header-navlink1 Large">
              FAQ
            </Link>
          </div>
          <div className="header-container1">
            <div className="header-container2">
              <PrimaryBlueButton
                button="Play Now"
                rootClassName="primary-blue-button-root-class-name1"
                className=""
              ></PrimaryBlueButton>
            </div>
            <div data-role="BurgerMenu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path
                  d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink2 Large">
            Soft UI Design System
          </Link>
          <div data-role="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon2">
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link to="/" className="header-navlink3 Large">
              Home
            </Link>
            <Link to="/resources" className="header-navlink4 Large">
              Profile
            </Link>
            <Link to="/faq" className="header-navlink5 Large">
              Coming Soon
            </Link>
          </div>
        </div>
        <div className="header-bot">
          <PrimaryPinkButton button="buy now" className=""></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
  image_src:
    'https://lh6.googleusercontent.com/qm700-_pocltYAQ_GYowe7pFxrQn02qE1W4uKmo_2uf1K16O6ru9pji6mg7eGZrqZfB9HxwNoEbEe6H9QONa8g=w16383',
  image_alt: 'image',
}

Header.propTypes = {
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Header
