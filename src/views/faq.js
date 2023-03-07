import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ListItem from '../components/list-item'
import Footer from '../components/footer'
import './faq.css'

const FAQ = (props) => {
  return (
    <div className="faq-container">
      <Helmet>
        <title>FAQ - HighSky Minecraft</title>
        <meta
          name="description"
          content="The best minecraft server you don't even have to pay for. Only lasting 1.5 months! Join now."
        />
        <meta property="og:title" content="FAQ - HighSky Minecraft" />
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
      <div className="faq-container1">
        <ListItem
          title="What devices can I use to play on the server?"
          new_prop="1. What devices can I use to play in this server?"
          description="Any device that can run:  Windows 10 or greater, macOS Mojave or greater, Any Linux distro that supports JDK 18. This assumes that the device can also run Minecraft 1.19 with at least 40 fps at render distance 10."
          rootClassName="list-item-root-class-name"
        ></ListItem>
        <ListItem
          title="What version of Java do I need?"
          new_prop="2. What Java version do I use?"
          description="You need to run specifically Java SE Development Kit 18.x.x.x"
          rootClassName="list-item-root-class-name1"
        ></ListItem>
        <ListItem
          title="Do I need to buy Minecraft Java to play on the server?"
          new_prop="3. Do I need to own a paid/premium Minecraft Account?"
          description="No. You can use cracked launchers like TLauncher, just like many of our current members. We do recommend you to buy the game though. It's worth the $28, and supports the developers."
          rootClassName="list-item-root-class-name2"
        ></ListItem>
        <ListItem
          title="Does it cost money to play in the server?"
          new_prop="4. Do I need to pay to join the server?"
          description="It won't cost you any money but it does cost me to run the server. Help me pay for the server by donating some of your change!"
          rootClassName="list-item-root-class-name3"
        ></ListItem>
        <ListItem
          title="I have Minecraft Bedrock, can I play on the server?"
          new_prop="5. Can I join using my phone/tablet/iPad?"
          description="No. There is no reliable crossplay feature for Java and Bedrock that supports the mod loader and mods. You have to be running Java to play on the server."
          rootClassName="list-item-root-class-name4"
        ></ListItem>
        <ListItem
          title='Can you add "this" mod?'
          new_prop="6. Can you add X mod?"
          description="Depends. We need to gauge how much it affects the game, server, gameplay, client, etc. We won't be adding generation mods mid-season as well. Take it as a no but I do take suggestions."
          rootClassName="list-item-root-class-name5"
        ></ListItem>
        <ListItem
          title='You advertised the server as "lag free" when it clearly isn&apos;t...'
          new_prop="7. You say the server never lags but it definitely does..."
          description="Well, that's Java for you. What we do guarantee is that more than 98% of the time, the server will be running at 20TPS under normal conditions."
          rootClassName="list-item-root-class-name7"
        ></ListItem>
        <ListItem
          title="I have a question that isn't answered here..."
          new_prop="8. I have a question not answered here"
          description="Well, hit me up on discord! If your question is not answer here, you're probably already a player in the server."
          rootClassName="list-item-root-class-name6"
        ></ListItem>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default FAQ
