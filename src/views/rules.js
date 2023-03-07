import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import RulesWhy from '../components/rules-why'
import MainRules from '../components/main-rules'
import Footer from '../components/footer'
import './rules.css'

const Rules = (props) => {
  return (
    <div className="rules-container">
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
      <Header rootClassName="header-root-class-name2"></Header>
      <RulesWhy></RulesWhy>
      <MainRules></MainRules>
      <Footer rootClassName="footer-root-class-name5"></Footer>
    </div>
  )
}

export default Rules
