import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import OutlineGrayButton from '../components/outline-gray-button'
import Footer from '../components/footer'
import './how-to-install-the-fabric-loader.css'

const HowToInstallTheFabricLoader = (props) => {
  return (
    <div className="how-to-install-the-fabric-loader-container">
      <Helmet>
        <title>How-to-install-the-Fabric-Loader - HighSky Minecraft</title>
        <meta
          name="description"
          content="The best minecraft server you don't even have to pay for. Only lasting 1.5 months! Join now."
        />
        <meta
          property="og:title"
          content="How-to-install-the-Fabric-Loader - HighSky Minecraft"
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
      <HeaderFull rootClassName="header-full-root-class-name2"></HeaderFull>
      <div className="how-to-install-the-fabric-loader-container01">
        <div className="how-to-install-the-fabric-loader-banner">
          <h2 className="how-to-install-the-fabric-loader-text">
            How to Install the Fabric Loader
          </h2>
        </div>
      </div>
      <div className="how-to-install-the-fabric-loader-blog">
        <div className="how-to-install-the-fabric-loader-container02">
          <img
            alt="image"
            src="https://i.imgur.com/6uzTYPl.png"
            className="how-to-install-the-fabric-loader-image"
          />
          <div className="how-to-install-the-fabric-loader-container03">
            <h1 className="how-to-install-the-fabric-loader-text01">
              1. Download Fabric Loader
            </h1>
            <div className="how-to-install-the-fabric-loader-container04">
              <span className="how-to-install-the-fabric-loader-text02">
                <span>
                  Go to:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://fabricmc.net/use/installer/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="how-to-install-the-fabric-loader-text04">
                    https://fabricmc.net/use/installer/
                  </span>
                </a>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  Download for Windows if you are running on Windows. Download
                  universal jar if you&apos;re running on anything else.
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="how-to-install-the-fabric-loader-container05">
          <img
            alt="image"
            src="https://i.imgur.com/3opcq7M.png"
            className="how-to-install-the-fabric-loader-image1"
          />
          <div className="how-to-install-the-fabric-loader-container06">
            <h1 className="how-to-install-the-fabric-loader-text10">
              2. Press Install
            </h1>
            <div className="how-to-install-the-fabric-loader-container07">
              <span className="how-to-install-the-fabric-loader-text11">
                <span>
                  This part should be automatic and you don&apos;t have to
                  change or modify anything. After that, you&apos;re done.
                </span>
                <a
                  href="https://download.oracle.com/java/18/latest/jdk-18_macos-x64_bin.dmg"
                  target="_blank"
                  rel="noreferrer noopener"
                ></a>
                <a
                  href="https://download.oracle.com/java/18/latest/jdk-18_macos-aarch64_bin.dmg"
                  target="_blank"
                  rel="noreferrer noopener"
                ></a>
                <a
                  href="https://www.oracle.com/java/technologies/downloads/#jdk18-linux"
                  target="_blank"
                  rel="noreferrer noopener"
                ></a>
                <a
                  href="https://www.java.com/en/download/"
                  target="_blank"
                  rel="noreferrer noopener"
                ></a>
                <span></span>
                <span></span>
              </span>
            </div>
          </div>
        </div>
        <div className="how-to-install-the-fabric-loader-container08">
          <img
            alt="image"
            src="https://i.imgur.com/hoAKcML.png"
            className="how-to-install-the-fabric-loader-image2"
          />
          <div className="how-to-install-the-fabric-loader-container09">
            <h1 className="how-to-install-the-fabric-loader-text15">
              3. Open Minecraft
            </h1>
            <div className="how-to-install-the-fabric-loader-container10">
              <span className="how-to-install-the-fabric-loader-text16">
                <span>
                  It is important that you run the game first so fabric can make
                  the required files for the next steps.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  When you boot up to the start screen, verify that at the
                  bottom left it says &quot;Minecraft 1.19/Fabric&quot; then you
                  should close the game.
                </span>
                <br></br>
                <a
                  href="https://download.oracle.com/java/18/latest/jdk-18_macos-x64_bin.dmg"
                  target="_blank"
                  rel="noreferrer noopener"
                ></a>
                <a
                  href="https://download.oracle.com/java/18/latest/jdk-18_macos-aarch64_bin.dmg"
                  target="_blank"
                  rel="noreferrer noopener"
                ></a>
                <a
                  href="https://www.oracle.com/java/technologies/downloads/#jdk18-linux"
                  target="_blank"
                  rel="noreferrer noopener"
                ></a>
                <a
                  href="https://www.java.com/en/download/"
                  target="_blank"
                  rel="noreferrer noopener"
                ></a>
                <span></span>
                <span></span>
              </span>
            </div>
          </div>
        </div>
        <Link
          to="/setupandinstallation"
          className="how-to-install-the-fabric-loader-navlink"
        >
          <OutlineGrayButton
            button="Go Back"
            rootClassName="outline-gray-button-root-class-name2"
            className="how-to-install-the-fabric-loader-component1"
          ></OutlineGrayButton>
        </Link>
      </div>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default HowToInstallTheFabricLoader
