import React from 'react'

import { Helmet } from 'react-helmet'

import OutlineGrayButton from '../components/outline-gray-button'
import './not-found.css'

const NotFound = (props) => {
  return (
    <div className="not-found-container">
      <Helmet>
        <title>Not-Found - HighSky Minecraft</title>
        <meta
          name="description"
          content="The best minecraft server you don't even have to pay for. Only lasting 1.5 months! Join now."
        />
        <meta property="og:title" content="Not-Found - HighSky Minecraft" />
        <meta
          property="og:description"
          content="Who's idea was it even to run a Minecraft server on enterprise-grade hardware? Play Now!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f6f804de-9a2d-4d93-ac2f-e375dac31476/86ac1fa8-cebb-44d0-b58b-40a1789670be?org_if_sml=1"
        />
      </Helmet>
      <span className="not-found-text">404 Not Found</span>
      <span className="not-found-text1">Why are you even here anyways?</span>
      <a href="https://www.highskymc.com/" className="not-found-link">
        <OutlineGrayButton
          button="Go Back Home"
          rootClassName="outline-gray-button-root-class-name"
          className="not-found-component"
        ></OutlineGrayButton>
      </a>
    </div>
  )
}

export default NotFound
