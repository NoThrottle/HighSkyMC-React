import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-container">
        <div className="footer-container1">
          <span className="footer-text">HighSkyMinecraft</span>
          <span className="">Copyright © 2022 NoThrottle Inc.</span>
        </div>
        <div className="footer-container2">
          <div className="footer-container3">
            <span className="footer-text02 Large">Company</span>
            <span className="footer-text03 Large">About Us</span>
            <span className="footer-text04 Large">Careers</span>
            <span className="footer-text05 Large">Press</span>
          </div>
          <div className="footer-container4">
            <span className="footer-text06 Large">Pages</span>
            <span className="footer-text07 Large">Login</span>
            <span className="footer-text08 Large">Register</span>
            <span className="footer-text09 Large">About</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
