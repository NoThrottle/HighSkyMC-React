import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryBlueButton from './primary-blue-button'
import './header-full.css'

const HeaderFull = (props) => {
  return (
    <div className={`header-full-header ${props.rootClassName} `}>
      <nav className="header-full-nav">
        <div className="header-full-container">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="header-full-image"
          />
          <a
            href="https://www.highskymc.com/"
            className="header-full-link HeadingThree"
          >
            HighSkyMC
          </a>
          <div className="header-full-menu">
            <a
              href="https://www.highskymc.com/"
              className="header-full-link1 Large"
            >
              Home
            </a>
            <Link to="/resources" className="header-full-navlink Large">
              Resources
            </Link>
            <Link to="/faq" className="header-full-navlink1 Large">
              FAQ
            </Link>
          </div>
          <div className="header-full-container1">
            <div className="header-full-container2">
              <PrimaryBlueButton
                button="Play Now"
                rootClassName="primary-blue-button-root-class-name"
                className=""
              ></PrimaryBlueButton>
            </div>
            <svg viewBox="0 0 1024 1024" className="header-full-icon">
              <path
                d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      </nav>
    </div>
  )
}

HeaderFull.defaultProps = {
  image_src: 'https://i.imgur.com/AUfR9vt.png',
  image_alt: 'image',
  rootClassName: '',
}

HeaderFull.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HeaderFull
