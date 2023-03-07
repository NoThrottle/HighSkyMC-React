import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>HighSky Minecraft</title>
        <meta
          name="description"
          content="The best minecraft server you don't even have to pay for. Only lasting 1.5 months! Join now."
        />
        <meta property="og:title" content="HighSky Minecraft" />
        <meta
          property="og:description"
          content="Who's idea was it even to run a Minecraft server on enterprise-grade hardware? Play Now!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f6f804de-9a2d-4d93-ac2f-e375dac31476/86ac1fa8-cebb-44d0-b58b-40a1789670be?org_if_sml=1"
        />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text HeadingOne">HighSkyMinecraft</h1>
            <h1 className="home-text01 HeadingOne">Experience Better</h1>
            <span className="home-text02 Lead">
              Zero compromises Minecraft server running on enterprise-grade
              hardware with custom software. It can&apos;t get any better than
              this.
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <Link to="/rules-redirect-signup" className="home-navlink">
                  <PrimaryPinkButton
                    button="Join Now"
                    className="home-component01"
                  ></PrimaryPinkButton>
                </Link>
              </div>
              <a href="#start" className="home-link">
                <OutlineGrayButton
                  button="Learn More"
                  className="home-component02"
                ></OutlineGrayButton>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="Minecraft Village"
        src="https://i.imgur.com/UB7XYYJ.png"
        loading="eager"
        className="home-image"
      />
      <section id="start" className="home-features">
        <FeatureCard
          text="Discover 1.19 with more features tailored to you."
          title="Modded"
          image_src="https://i.imgur.com/F4gVowi.png"
        ></FeatureCard>
        <FeatureCard
          text="With proximity voice chat, you can talk to everyone as if you're actually there."
          title="Communicate"
          image_src="https://i.imgur.com/ph26pqR.png"
        ></FeatureCard>
        <FeatureCard
          text="With an average ping of 35ms, you can no longer blame lag for your death."
          title="Blazing Fast"
          image_src="https://i.imgur.com/indThxO.png"
        ></FeatureCard>
        <FeatureCard
          text="The server is continuously improved with better and new experiences."
          title="Updated"
          image_src="https://i.imgur.com/YglcGpL.png"
        ></FeatureCard>
      </section>
      <section className="home-container04">
        <div className="home-container05">
          <h1 className="home-text03 HeadingOne">Massively Multiplayer</h1>
          <span className="home-text04">
            Friends with an entire nation? Play with all of them here! There are
            no other server that is able to support 110 concurrent players with
            0 lag.
          </span>
        </div>
        <div className="home-container06">
          <div className="home-container07">
            <img
              alt="image"
              src="https://i.imgur.com/gUnVXPn.png"
              className="home-image1"
            />
            <span className="home-text05 Small">
              <span className="home-text06">
                &quot;I don&apos;t love Minecraft, I also don&apos;t hate it.
                I&apos;ve been playing for close to 9 years and it feels
                refreshing to play with friends and mods&quot;
              </span>
              <br></br>
              <span className="home-text08">-NoThrottle</span>
            </span>
            <div className="home-container08">
              <img
                alt="image"
                src="https://i.imgur.com/m2LThsd.png"
                className="home-image2"
              />
            </div>
          </div>
          <div className="home-container09">
            <img
              alt="image"
              src="https://i.imgur.com/YeBpLbx.png"
              className="home-image3"
            />
            <div className="home-container10">
              <h3 className="home-text09 HeadingTwo">The Culture of HSMC</h3>
              <p className="home-text10">
                <br></br>
                <span>
                  There is nothing more important than building in this server.
                  Nomadic as your life is, you have to build something.
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
                  The server started from a desire to build and socialize. To
                  create massive cities, villages, towers, and monoliths. To
                  start a community full of roleplay, action, and content.
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
                  When the vision first came into mind, the technology of the
                  time was unkind. There was no proximity voice chat. There were
                  no great mods. Servers were extremely expensive and there was
                  no one to play with. Now, here we are, back and better, the
                  SEVENTH season of HighSkyMC.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  NoThrottle expects from you the best you can give to this
                  Minecraft world. The stories you&apos;ll create, the legends
                  that people will tell. Without you, the server will not come
                  into fruition. The vision would have been lost.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>Are you ready, soldier?</span>
                <br></br>
                <span></span>
                <br></br>
                <br></br>
                <span></span>
                <br></br>
                <br></br>
                <span></span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-stats">
        <div className="home-stat">
          <h1 className="home-text37">
            <span>7th</span>
          </h1>
          <span className="home-text39">Season Experience</span>
          <span className="home-text40">
            We know what we&apos;re doing. Trust us and you&apos;ll be fine.
          </span>
        </div>
        <div className="home-stat1">
          <h1 className="home-text41">
            <span>60+</span>
          </h1>
          <span className="home-text43">Additional Features</span>
          <span className="home-text44">
            Making the game better and more stable, one mod at a time.
          </span>
        </div>
        <div className="home-stat2">
          <h1 className="home-text45">
            <span>85+</span>
          </h1>
          <span className="home-text47">Unique Experiences</span>
          <span className="home-text48">
            There are a lot of travelling you have to do to be able to travel to
            every biome.
          </span>
        </div>
        <div className="home-stat3">
          <h1 className="home-text49">
            <span>24/7</span>
          </h1>
          <span className="home-text51">Uptime</span>
          <span className="home-text52">
            Wake up and play at any time and the server will be up and running.
          </span>
        </div>
      </div>
      <section className="home-contaier">
        <div className="home-container11">
          <div className="home-container12">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
          </div>
          <h2 className="home-text53 HeadingTwo">
            <span className="home-text54">Why Choose Us?</span>
          </h2>
          <div className="home-container13">
            <span className="home-text55">
              <span className="home-text56">
                We’re constantly trying to express ourselves and actualize our
                dreams. Don&apos;t stop.
              </span>
            </span>
            <h3 className="home-text57 HeadingTwo">
              <br></br>
            </h3>
          </div>
        </div>
        <div className="home-container14">
          <div className="home-container15">
            <div className="home-container16"></div>
            <div className="home-container17">
              <svg viewBox="0 0 987.4285714285713 1024" className="home-icon2">
                <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <h1 className="home-text58 HeadingOne">Search and Discover!</h1>
              <span className="home-text59">Treasures are awaiting!</span>
              <Link to="/setupandinstallation" className="home-navlink1">
                <OutlineBlackButton
                  button="get started"
                  className="home-component07"
                ></OutlineBlackButton>
              </Link>
            </div>
          </div>
          <div className="home-container18">
            <ListItem
              title="1. Running the Latest Minecraft Version 1.19"
              description="HighSkyMC always updates to the latest patch! This ensures the server is fast and stable, with all the new features added."
            ></ListItem>
            <ListItem
              title="2. Custom Biomes that DONT Lag"
              description="Many custom biome mods negatively hit the performance of your computer and the server. We only use mods that don't."
            ></ListItem>
            <ListItem
              title="3.  Better and Livelier Ambience"
              description="Everything from torches, to leaves, to the bushes you see, are all made better. We also made sure to support shaders!"
            ></ListItem>
          </div>
        </div>
        <div className="home-divider"></div>
        <div className="home-container19">
          <div className="home-container20">
            <ListItem
              title="1. Proximity Voicechat"
              description="Is your friend too far away? Just shout. That is the more realistic way!"
            ></ListItem>
            <ListItem
              title="2. Well Moderated"
              description='While the rules are strictly enforced, the rules are very lenient. What ever you think a "good person" is will most likely pass. '
            ></ListItem>
            <ListItem
              title="3. Accommodates all your Friends"
              description="Literally bring all your friends. The server can handle it. All of them, your mom, your dad, your uncle's janitor's nephew, and your dog."
            ></ListItem>
          </div>
          <div className="home-container21">
            <div className="home-container22"></div>
            <div className="home-container23">
              <svg viewBox="0 0 1152 1024" className="home-icon4">
                <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
              </svg>
              <h1 className="home-text60 HeadingOne">Talk and Meet!</h1>
              <span className="home-text61">
                <span>Make new Friends!</span>
              </span>
              <Link to="/setupandinstallation" className="home-navlink2">
                <OutlineBlackButton
                  button="get started"
                  className="home-component14"
                ></OutlineBlackButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
