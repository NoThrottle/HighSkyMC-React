import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import BlogCard from '../components/blog-card'
import GalleryCard2 from '../components/gallery-card2'
import Footer from '../components/footer'
import './resources.css'

const Resources = (props) => {
  return (
    <div className="resources-container">
      <Helmet>
        <title>Resources - HighSky Minecraft</title>
        <meta
          name="description"
          content="The best minecraft server you don't even have to pay for. Only lasting 1.5 months! Join now."
        />
        <meta property="og:title" content="Resources - HighSky Minecraft" />
        <meta
          property="og:description"
          content="Who's idea was it even to run a Minecraft server on enterprise-grade hardware? Play Now!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f6f804de-9a2d-4d93-ac2f-e375dac31476/86ac1fa8-cebb-44d0-b58b-40a1789670be?org_if_sml=1"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="resources-banner">
        <div className="resources-container01">
          <h1 className="resources-text">New to the Server?</h1>
          <div className="resources-btn-group">
            <Link
              to="/setupandinstallation"
              className="resources-navlink button"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="resources-blog-posts">
        <h1 className="resources-text1 HeadingTwo">
          <span>Latest Articles</span>
        </h1>
        <div className="resources-container02">
          <BlogCard></BlogCard>
          <BlogCard
            image_src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-clock.jpg"
            description="Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, ate-stage financings"
          ></BlogCard>
          <BlogCard
            title="MateLabs machine learning"
            image_src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-wall.jpg"
            description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with"
          ></BlogCard>
          <div className="resources-container03">
            <div className="resources-card">
              <div className="resources-container04">
                <h1 className="resources-text3">Donations</h1>
                <span className="resources-text4">
                  <span className="resources-text5">
                    The server costs money to run, a LOT of money. Every bit of
                    money counts! 
                  </span>
                </span>
                <div className="resources-container05">
                  <button className="resources-button button">
                    <span className="resources-text6">Read more</span>
                    <svg viewBox="0 0 1024 1024" className="resources-icon">
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="resources-container06"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="resources-container07">
        <h1 className="resources-text7 HeadingTwo">Gallery</h1>
        <div className="resources-gallery">
          <div className="resources-container08">
            <div className="resources-container09">
              <div className="resources-container10">
                <GalleryCard2
                  image_src="https://i.imgur.com/wQ7nEch.jpg"
                  rootClassName="rootClassName2"
                ></GalleryCard2>
              </div>
              <div className="resources-container11">
                <GalleryCard2
                  image_src="https://i.imgur.com/gN3m9aV.png"
                  rootClassName="rootClassName3"
                ></GalleryCard2>
              </div>
            </div>
            <div className="resources-container12">
              <GalleryCard2
                image_src="https://i.imgur.com/v7NPtlk.png"
                rootClassName="rootClassName"
              ></GalleryCard2>
            </div>
          </div>
          <div className="resources-container13">
            <GalleryCard2
              title="Village in the Woods"
              image_src="https://i.imgur.com/gkqi2wY.png"
              description="by NoThrottle"
              rootClassName="rootClassName4"
            ></GalleryCard2>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Resources
