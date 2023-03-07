import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import FeatureCard2 from '../components/feature-card2'
import BlogPostCard3 from '../components/blog-post-card3'
import OutlineGrayButton from '../components/outline-gray-button'
import Footer from '../components/footer'
import './how-to-install-java-for-fabric-mods.css'

const HowToInstallJavaForFabricMods = (props) => {
  return (
    <div className="how-to-install-java-for-fabric-mods-container">
      <Helmet>
        <title>How-to-install-Java-for-Fabric-mods - HighSky Minecraft</title>
        <meta
          name="description"
          content="The best minecraft server you don't even have to pay for. Only lasting 1.5 months! Join now."
        />
        <meta
          property="og:title"
          content="How-to-install-Java-for-Fabric-mods - HighSky Minecraft"
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
      <HeaderFull rootClassName="header-full-root-class-name1"></HeaderFull>
      <div className="how-to-install-java-for-fabric-mods-container1">
        <div className="how-to-install-java-for-fabric-mods-banner">
          <h2 className="how-to-install-java-for-fabric-mods-text">
            How to Install Java for Fabric Mods
          </h2>
        </div>
      </div>
      <div className="how-to-install-java-for-fabric-mods-blog">
        <FeatureCard2
          title="Note to Prevent Issues:"
          image_src="Note to Prevent Issues:"
          description="It is EXTREMELY important that you follow these steps in this exact order. You WILL have issues if you don't."
          rootClassName="feature-card2-root-class-name4"
        ></FeatureCard2>
        <div className="how-to-install-java-for-fabric-mods-container2">
          <BlogPostCard3
            title="1. Uninstall old Java"
            image_src="https://i.imgur.com/MJGGjmv.png"
            description="It is imperative that you uninstall ANY AND ALL previous installations of Java. After doing so, restart your computer..."
            rootClassName="rootClassName1"
          ></BlogPostCard3>
        </div>
        <div className="how-to-install-java-for-fabric-mods-container3">
          <img
            alt="image"
            src="https://i.imgur.com/6wkHAAd.png"
            className="how-to-install-java-for-fabric-mods-image"
          />
          <div className="how-to-install-java-for-fabric-mods-container4">
            <h1 className="how-to-install-java-for-fabric-mods-text01">
              2. Install Java SDK 18
            </h1>
            <div className="how-to-install-java-for-fabric-mods-container5">
              <span className="how-to-install-java-for-fabric-mods-text02">
                <span>
                  Choose here the most appropriate version for your operating
                  system.
                </span>
                <br></br>
                <a
                  href="https://download.oracle.com/java/18/latest/jdk-18_windows-x64_bin.exe"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="how-to-install-java-for-fabric-mods-text05">
                    Download for Windows
                  </span>
                </a>
                <span></span>
                <br></br>
                <a
                  href="https://download.oracle.com/java/18/latest/jdk-18_macos-x64_bin.dmg"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="how-to-install-java-for-fabric-mods-text08">
                    Download for macOS x86
                  </span>
                </a>
                <span></span>
                <span></span>
                <br></br>
                <a
                  href="https://download.oracle.com/java/18/latest/jdk-18_macos-aarch64_bin.dmg"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="how-to-install-java-for-fabric-mods-text12">
                    Download for macOS Apple Silicon
                  </span>
                </a>
                <span></span>
                <br></br>
                <a
                  href="https://www.oracle.com/java/technologies/downloads/#jdk18-linux"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="how-to-install-java-for-fabric-mods-text15">
                    Choose and Download for Linux
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </a>
                <span></span>
                <br></br>
                <span></span>
                <br></br>
                <span>After that, install then restart.</span>
              </span>
            </div>
          </div>
        </div>
        <div className="how-to-install-java-for-fabric-mods-container6">
          <img
            alt="image"
            src="https://i.imgur.com/DiY0S5l.png"
            className="how-to-install-java-for-fabric-mods-image1"
          />
          <div className="how-to-install-java-for-fabric-mods-container7">
            <h1 className="how-to-install-java-for-fabric-mods-text21">
              (Optional) Install Java 8
            </h1>
            <div className="how-to-install-java-for-fabric-mods-container8">
              <span className="how-to-install-java-for-fabric-mods-text22">
                <span>
                  If you&apos;re playing using TLauncher, you also have to
                  install Java 8.
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
                <span></span>
                <a
                  href="https://www.java.com/en/download/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="how-to-install-java-for-fabric-mods-text26">
                    https://www.java.com/en/download/
                  </span>
                </a>
                <span></span>
                <span></span>
              </span>
            </div>
          </div>
        </div>
        <Link
          to="/setupandinstallation"
          className="how-to-install-java-for-fabric-mods-navlink"
        >
          <OutlineGrayButton
            button="Go Back"
            rootClassName="outline-gray-button-root-class-name1"
            className="how-to-install-java-for-fabric-mods-component3"
          ></OutlineGrayButton>
        </Link>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default HowToInstallJavaForFabricMods
