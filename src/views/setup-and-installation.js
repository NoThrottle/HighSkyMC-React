import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import BlogPostCard2 from '../components/blog-post-card2'
import Footer from '../components/footer'
import './setup-and-installation.css'

const SetupAndInstallation = (props) => {
  return (
    <div className="setup-and-installation-container">
      <Helmet>
        <title>Setup-and-Installation - HighSky Minecraft</title>
        <meta
          name="description"
          content="The best minecraft server you don't even have to pay for. Only lasting 1.5 months! Join now."
        />
        <meta
          property="og:title"
          content="Setup-and-Installation - HighSky Minecraft"
        />
        <meta
          property="og:description"
          content="Who's idea was it even to run a Minecraft server on enterprise-grade hardware? Play Now!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f6f804de-9a2d-4d93-ac2f-e375dac31476/86ac1fa8-cebb-44d0-b58b-40a1789670be?org_if_sml=1"
        />
      </Helmet>
      <HeaderFull rootClassName="header-full-root-class-name"></HeaderFull>
      <div className="setup-and-installation-container1">
        <div className="setup-and-installation-banner">
          <h2 className="setup-and-installation-text">
            <span>
              <span>
                This tutorial assumes that you are already a whitelisted player
                on the server. If you want to get whitelisted, sign-up on the
                form below.
              </span>
            </span>
          </h2>
          <Link
            to="/rules-redirect-signup"
            className="setup-and-installation-navlink button"
          >
            Sign-Up
          </Link>
        </div>
        <div className="setup-and-installation-blog">
          <div className="setup-and-installation-container2">
            <Link to="/article-001" className="setup-and-installation-navlink1">
              <BlogPostCard2
                when="June 24, 2022"
                label="DEPENDENCIES"
                title="How to install Java for Fabric mods"
                author="NoThrottle"
                new_prop="How to Install Java SE 18"
                image_src="https://i.imgur.com/dVA0Ttx.png"
                description="A quick and easy platform-independent tutorial on how to install Java SE Development Kit 18."
                profile_src="https://i.imgur.com/P9FNOF8.png"
                rootClassName="rootClassName3"
                className="setup-and-installation-component1"
              ></BlogPostCard2>
            </Link>
          </div>
          <div className="setup-and-installation-container3">
            <Link to="/article-002" className="setup-and-installation-navlink2">
              <BlogPostCard2
                when="June 24, 2022"
                label="DEPENDENCIES"
                title="How to install the Fabric Loader"
                author="NoThrottle"
                new_prop="How to Install Fabric Loader"
                image_src="https://i.imgur.com/b2krbHM.png"
                description="A short tutorial on how to install the fabric mod loader for any operating system. The one in TLauncher is broken."
                profile_src="https://i.imgur.com/P9FNOF8.png"
                rootClassName="rootClassName"
                className="setup-and-installation-component2"
              ></BlogPostCard2>
            </Link>
          </div>
          <Link to="/article-003" className="setup-and-installation-navlink3">
            <BlogPostCard2
              when="June 24, 2022"
              label="DEPENDENCIES"
              title="How to use GMI to install the Mod Pack"
              author="NoThrotle"
              new_prop="How to install the modpack using GMI"
              image_src="https://i.imgur.com/sct9WJi.png"
              description="GMI or Global Mod Installler, is a custom program made by NoThrottle to download and extract the mods to the correct folder. This tutorial teaches you how to use it."
              profile_alt="NoThrottle"
              profile_src="https://i.imgur.com/P9FNOF8.png"
              rootClassName="rootClassName2"
              className="setup-and-installation-component3"
            ></BlogPostCard2>
          </Link>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default SetupAndInstallation
