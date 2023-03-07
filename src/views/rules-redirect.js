import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import RulesWhy from '../components/rules-why'
import MainRules from '../components/main-rules'
import Footer from '../components/footer'
import './rules-redirect.css'

const RulesRedirect = (props) => {
  return (
    <div className="rules-redirect-container">
      <Helmet>
        <title>Rules - HighSky Minecraft</title>
        <meta
          name="description"
          content="The best minecraft server you don't even have to pay for. Only lasting 1.5 months! Join now."
        />
        <meta property="og:title" content="Rules - HighSky Minecraft" />
        <meta
          property="og:description"
          content="Who's idea was it even to run a Minecraft server on enterprise-grade hardware? Play Now!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f6f804de-9a2d-4d93-ac2f-e375dac31476/86ac1fa8-cebb-44d0-b58b-40a1789670be?org_if_sml=1"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="rules-redirect-banner">
        <h2 className="rules-redirect-text">
          <span>
            <span>Scroll down to the edge of the page to continue.</span>
          </span>
        </h2>
      </div>
      <RulesWhy></RulesWhy>
      <MainRules></MainRules>
      <div className="rules-redirect-banner1">
        <h2 className="rules-redirect-text3">
          Thank you for hopefully reading and understanding the rules.
        </h2>
        <a
          href="https://forms.gle/hCiejQYMn77tYNfP8"
          className="rules-redirect-link button"
        >
          Continue to Sign-Up
        </a>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default RulesRedirect
