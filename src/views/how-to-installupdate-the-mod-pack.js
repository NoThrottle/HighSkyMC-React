import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import OutlineGrayButton from '../components/outline-gray-button'
import Footer from '../components/footer'
import './how-to-installupdate-the-mod-pack.css'

const HowToInstallupdateTheModPack = (props) => {
  return (
    <div className="how-to-installupdate-the-mod-pack-container">
      <Helmet>
        <title>How-to-installupdate-the-Mod-Pack - HighSky Minecraft</title>
        <meta
          name="description"
          content="The best minecraft server you don't even have to pay for. Only lasting 1.5 months! Join now."
        />
        <meta
          property="og:title"
          content="How-to-installupdate-the-Mod-Pack - HighSky Minecraft"
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
      <HeaderFull rootClassName="header-full-root-class-name3"></HeaderFull>
      <div className="how-to-installupdate-the-mod-pack-container01">
        <div className="how-to-installupdate-the-mod-pack-banner">
          <h2 className="how-to-installupdate-the-mod-pack-text">
            How to Install/Update the ModPack
          </h2>
        </div>
      </div>
      <div className="how-to-installupdate-the-mod-pack-blog">
        <div className="how-to-installupdate-the-mod-pack-container02">
          <img
            alt="image"
            src="https://i.imgur.com/6uzTYPl.png"
            className="how-to-installupdate-the-mod-pack-image"
          />
          <div className="how-to-installupdate-the-mod-pack-container03">
            <h1 className="how-to-installupdate-the-mod-pack-text01">
              1. Download the Global Mod Installer
            </h1>
            <div className="how-to-installupdate-the-mod-pack-container04">
              <span className="how-to-installupdate-the-mod-pack-text02">
                <span>
                  If you&apos;re using Windows,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://www.highskymc.com/cdn/GMI_WindowsOnly_1.1.2.bat"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="how-to-installupdate-the-mod-pack-text04">
                    press here
                  </span>
                </a>
                <span>
                  {' '}
                  to download a runnable .bat.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://www.highskymc.com/cdn/GMI_WindowsOnly_1.1.2.ps1"
                  target="_blank"
                  rel="noreferrer noopener"
                ></a>
                <span>
                  If you&apos;re prompted by a SmartScreen saying that it
                  &quot;protected you&quot;, press &quot;More Info&quot;, then
                  &quot;Run Anyway&quot;.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  If you&apos;re on any other platform (even Windows),
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://www.highskymc.com/cdn/mods-1.1.2-b4.jar"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="how-to-installupdate-the-mod-pack-text10">
                    press here
                  </span>
                </a>
                <span>
                  {' '}
                  to download the universal jar. (Possible issues with MacOS)
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  If you have issues, scroll down to &quot;Alternate
                  Instructions&quot;
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="how-to-installupdate-the-mod-pack-container05">
          <img
            alt="image"
            src="https://i.imgur.com/gSxQEnd.png"
            className="how-to-installupdate-the-mod-pack-image01"
          />
          <div className="how-to-installupdate-the-mod-pack-container06">
            <h1 className="how-to-installupdate-the-mod-pack-text16">
              2. Press Download
            </h1>
            <div className="how-to-installupdate-the-mod-pack-container07">
              <span className="how-to-installupdate-the-mod-pack-text17">
                <span>
                  Make sure you have launched fabric-minecraft first.
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
        <Link
          to="/setupandinstallation"
          className="how-to-installupdate-the-mod-pack-navlink"
        >
          <OutlineGrayButton
            button="Go Back"
            rootClassName="outline-gray-button-root-class-name3"
            className="how-to-installupdate-the-mod-pack-component1"
          ></OutlineGrayButton>
        </Link>
      </div>
      <div className="how-to-installupdate-the-mod-pack-blog1">
        <h2
          id="alternateinstructions"
          className="how-to-installupdate-the-mod-pack-text25"
        >
          -Alternate Instructions-
        </h2>
        <div className="how-to-installupdate-the-mod-pack-container08">
          <div className="how-to-installupdate-the-mod-pack-container09">
            <h1 className="how-to-installupdate-the-mod-pack-text26">
              1. Download GMI Headless
            </h1>
            <div className="how-to-installupdate-the-mod-pack-container10">
              <span className="how-to-installupdate-the-mod-pack-text27">
                <span>
                  If you&apos;re using Windows,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://www.highskymc.com/cdn/mods-2.0.0-headless-a5.jar"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="how-to-installupdate-the-mod-pack-text29">
                    press here
                  </span>
                </a>
                <span className="how-to-installupdate-the-mod-pack-text30"></span>
                <span> to download a headless version of GMI.</span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  After that, if you&apos;re on Windows, just scroll a tiny bit
                  down. If you&apos;re on macOS,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a href="#alternate_macos">
                  <span className="how-to-installupdate-the-mod-pack-text36">
                    press here
                  </span>
                </a>
                <span>
                  . If you&apos;re on Linux, just follow the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a href="#alternate_macos">
                  <span className="how-to-installupdate-the-mod-pack-text38">
                    macOS instructions
                  </span>
                </a>
                <span>.</span>
                <a
                  href="https://www.highskymc.com/cdn/GMI_WindowsOnly_1.1.2.ps1"
                  target="_blank"
                  rel="noreferrer noopener"
                ></a>
                <a
                  href="https://www.highskymc.com/cdn/mods-1.1.2-b4.jar"
                  target="_blank"
                  rel="noreferrer noopener"
                ></a>
              </span>
            </div>
          </div>
        </div>
        <div className="how-to-installupdate-the-mod-pack-container11">
          <h2 className="how-to-installupdate-the-mod-pack-text40 HeadingTwo">
            Alternate Windows Instructions
          </h2>
          <div className="how-to-installupdate-the-mod-pack-container12">
            <img
              alt="image"
              src="https://i.imgur.com/4kv6XHd.png"
              className="how-to-installupdate-the-mod-pack-image02"
            />
            <div className="how-to-installupdate-the-mod-pack-container13">
              <h1 className="how-to-installupdate-the-mod-pack-text41">
                2. Locate the File
              </h1>
              <div className="how-to-installupdate-the-mod-pack-container14">
                <span className="how-to-installupdate-the-mod-pack-text42">
                  <span>
                    The file should be in your Downloads folder. Open up
                    Explorer and see if it is there.
                  </span>
                  <a
                    href="https://www.highskymc.com/cdn/GMI_WindowsOnly_1.1.2.bat"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></a>
                  <a
                    href="https://www.highskymc.com/cdn/GMI_WindowsOnly_1.1.2.ps1"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></a>
                  <a
                    href="https://www.highskymc.com/cdn/mods-1.1.2-b4.jar"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></a>
                </span>
              </div>
            </div>
          </div>
          <div className="how-to-installupdate-the-mod-pack-container15">
            <img
              alt="image"
              src="https://i.imgur.com/7LOAEc8.png"
              className="how-to-installupdate-the-mod-pack-image03"
            />
            <div className="how-to-installupdate-the-mod-pack-container16">
              <h1 className="how-to-installupdate-the-mod-pack-text44">
                3. Get the Directory
              </h1>
              <div className="how-to-installupdate-the-mod-pack-container17">
                <span className="how-to-installupdate-the-mod-pack-text45">
                  <span>
                    Right click the file, go to properties (last in the list).
                    The path should look something like the one on the image. It
                    will NOT be like that exactly. Copy the path. (Highlight the
                    text, then ctrl+c)
                  </span>
                  <a
                    href="https://www.highskymc.com/cdn/GMI_WindowsOnly_1.1.2.bat"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></a>
                  <a
                    href="https://www.highskymc.com/cdn/GMI_WindowsOnly_1.1.2.ps1"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></a>
                  <a
                    href="https://www.highskymc.com/cdn/mods-1.1.2-b4.jar"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></a>
                </span>
              </div>
            </div>
          </div>
          <div className="how-to-installupdate-the-mod-pack-container18">
            <img
              alt="image"
              src="https://i.imgur.com/n1Xkc1e.png"
              className="how-to-installupdate-the-mod-pack-image04"
            />
            <div className="how-to-installupdate-the-mod-pack-container19">
              <h1 className="how-to-installupdate-the-mod-pack-text47">
                4. Open CMD
              </h1>
              <div className="how-to-installupdate-the-mod-pack-container20">
                <span className="how-to-installupdate-the-mod-pack-text48">
                  <span>
                    Press the Windows Key + R. The window on the image should
                    pop up on the bottom left of your display. Type
                    &quot;cmd&quot; without the quotation marks then press
                    enter.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="how-to-installupdate-the-mod-pack-container21">
            <img
              alt="image"
              src="https://i.imgur.com/QAhYxsp.png"
              className="how-to-installupdate-the-mod-pack-image05"
            />
            <div className="how-to-installupdate-the-mod-pack-container22">
              <h1 className="how-to-installupdate-the-mod-pack-text50">
                5. Navigate to your Downloads Folder
              </h1>
              <div className="how-to-installupdate-the-mod-pack-container23">
                <span className="how-to-installupdate-the-mod-pack-text51">
                  <span>
                    Type &quot;cd /d&quot;, space, then paste the path you just
                    copied. It should look like the one on the left.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="how-to-installupdate-the-mod-pack-container24">
            <img
              alt="image"
              src="https://i.imgur.com/1hnTEo5.png"
              className="how-to-installupdate-the-mod-pack-image06"
            />
            <div className="how-to-installupdate-the-mod-pack-container25">
              <h1 className="how-to-installupdate-the-mod-pack-text53">
                6. Run the Jar File
              </h1>
              <div className="how-to-installupdate-the-mod-pack-container26">
                <span className="how-to-installupdate-the-mod-pack-text54">
                  <span>
                    Type &quot;java -jar mods-2.0.0-headless-a5.jar&quot;
                    without quotations in cmd, then press enter.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="how-to-installupdate-the-mod-pack-container27">
            <img
              alt="image"
              src="https://i.imgur.com/HYBvZJk.png"
              className="how-to-installupdate-the-mod-pack-image07"
            />
            <div className="how-to-installupdate-the-mod-pack-container28">
              <h1 className="how-to-installupdate-the-mod-pack-text56">
                7. Proceed with the Installation
              </h1>
              <div className="how-to-installupdate-the-mod-pack-container29">
                <span className="how-to-installupdate-the-mod-pack-text57">
                  <span>
                    Simply type Y or N and then enter to the prompts given to
                    you. After that you should be done and you can close CMD.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <Link
            to="/setupandinstallation"
            className="how-to-installupdate-the-mod-pack-navlink1"
          >
            <OutlineGrayButton
              button="Go Back"
              rootClassName="outline-gray-button-root-class-name4"
              className="how-to-installupdate-the-mod-pack-component2"
            ></OutlineGrayButton>
          </Link>
        </div>
        <div className="how-to-installupdate-the-mod-pack-container30">
          <h2
            id="alternate_macos"
            className="how-to-installupdate-the-mod-pack-text59 HeadingTwo"
          >
            Alternate MacOS Instructions
          </h2>
          <div className="how-to-installupdate-the-mod-pack-container31">
            <img
              alt="image"
              src="https://i.imgur.com/4kv6XHd.png"
              className="how-to-installupdate-the-mod-pack-image08"
            />
            <div className="how-to-installupdate-the-mod-pack-container32">
              <h1 className="how-to-installupdate-the-mod-pack-text60">
                2. Some things to note
              </h1>
              <div className="how-to-installupdate-the-mod-pack-container33">
                <span className="how-to-installupdate-the-mod-pack-text61">
                  <span>
                    This tutorial ASSUMES that your downloads folder is still
                    the default one. More likely than not, it is.
                  </span>
                  <a
                    href="https://www.highskymc.com/cdn/GMI_WindowsOnly_1.1.2.bat"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></a>
                  <a
                    href="https://www.highskymc.com/cdn/GMI_WindowsOnly_1.1.2.ps1"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></a>
                  <a
                    href="https://www.highskymc.com/cdn/mods-1.1.2-b4.jar"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></a>
                </span>
              </div>
            </div>
          </div>
          <div className="how-to-installupdate-the-mod-pack-container34">
            <img
              alt="image"
              src="https://i.imgur.com/1Rh3URK.png?1"
              className="how-to-installupdate-the-mod-pack-image09"
            />
            <div className="how-to-installupdate-the-mod-pack-container35">
              <h1 className="how-to-installupdate-the-mod-pack-text63">
                3. Open Spotlight
              </h1>
              <div className="how-to-installupdate-the-mod-pack-container36">
                <span className="how-to-installupdate-the-mod-pack-text64">
                  <span>
                    On the upper right of your screen, press the magnifying
                    glass.
                  </span>
                  <a
                    href="https://www.highskymc.com/cdn/GMI_WindowsOnly_1.1.2.bat"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></a>
                  <a
                    href="https://www.highskymc.com/cdn/GMI_WindowsOnly_1.1.2.ps1"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></a>
                  <a
                    href="https://www.highskymc.com/cdn/mods-1.1.2-b4.jar"
                    target="_blank"
                    rel="noreferrer noopener"
                  ></a>
                </span>
              </div>
            </div>
          </div>
          <div className="how-to-installupdate-the-mod-pack-container37">
            <img
              alt="image"
              src="https://i.imgur.com/HEOrPZ3.png"
              className="how-to-installupdate-the-mod-pack-image10"
            />
            <div className="how-to-installupdate-the-mod-pack-container38">
              <h1 className="how-to-installupdate-the-mod-pack-text66">
                4. Open Terminal
              </h1>
              <div className="how-to-installupdate-the-mod-pack-container39">
                <span className="how-to-installupdate-the-mod-pack-text67">
                  <span>
                    In the search bar, type Terminal, then press enter.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="how-to-installupdate-the-mod-pack-container40">
            <img
              alt="image"
              src="https://i.imgur.com/NzQD1pZ.png"
              className="how-to-installupdate-the-mod-pack-image11"
            />
            <div className="how-to-installupdate-the-mod-pack-container41">
              <h1 className="how-to-installupdate-the-mod-pack-text69">
                5. Navigate to your Downloads Folder
              </h1>
              <div className="how-to-installupdate-the-mod-pack-container42">
                <span className="how-to-installupdate-the-mod-pack-text70">
                  Type &quot;cd Downloads&quot; without the quotation marks,
                  then press enter.
                </span>
              </div>
            </div>
          </div>
          <div className="how-to-installupdate-the-mod-pack-container43">
            <img
              alt="image"
              src="https://i.imgur.com/6ospMti.png"
              className="how-to-installupdate-the-mod-pack-image12"
            />
            <div className="how-to-installupdate-the-mod-pack-container44">
              <h1 className="how-to-installupdate-the-mod-pack-text71">
                6. Run the Jar File
              </h1>
              <div className="how-to-installupdate-the-mod-pack-container45">
                <span className="how-to-installupdate-the-mod-pack-text72">
                  <span>
                    Type &quot;java -jar mods-2.0.0-headless-a5.jar&quot;
                    without quotations in the terminal, then press enter.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="how-to-installupdate-the-mod-pack-container46">
            <img
              alt="image"
              src="https://i.imgur.com/CfpqlMt.png"
              className="how-to-installupdate-the-mod-pack-image13"
            />
            <div className="how-to-installupdate-the-mod-pack-container47">
              <h1 className="how-to-installupdate-the-mod-pack-text74">
                7. Proceed with the Installation
              </h1>
              <div className="how-to-installupdate-the-mod-pack-container48">
                <span className="how-to-installupdate-the-mod-pack-text75">
                  <span>
                    Simply type Y or N and then enter to the prompts given to
                    you. After that you should be done and you can close the
                    terminal.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <Link
            to="/setupandinstallation"
            className="how-to-installupdate-the-mod-pack-navlink2"
          >
            <OutlineGrayButton
              button="Go Back"
              rootClassName="outline-gray-button-root-class-name5"
              className="how-to-installupdate-the-mod-pack-component3"
            ></OutlineGrayButton>
          </Link>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name6"></Footer>
    </div>
  )
}

export default HowToInstallupdateTheModPack
