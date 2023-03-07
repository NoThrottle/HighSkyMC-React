import React from 'react'

import PropTypes from 'prop-types'

import './main-rules.css'

const MainRules = (props) => {
  return (
    <div className="main-rules-container">
      <article className="main-rules-sidebar">
        <div className="main-rules-nav-item">
          <a href="#tldr" className="main-rules-link">
            <span className="main-rules-text">TL;DR</span>
          </a>
        </div>
        <div className="main-rules-nav-item1">
          <a href="#punishment" className="main-rules-link1">
            <span className="main-rules-text001">Punishments</span>
          </a>
          <div className="main-rules-options">
            <a href="#minorrv" className="main-rules-link2">
              {props.text}
            </a>
            <a href="#majorrv" className="main-rules-link3">
              {props.text1}
            </a>
          </div>
        </div>
        <div className="main-rules-nav-item2">
          <a href="#rag" className="main-rules-link4">
            <span className="main-rules-text002">Rules and GuidElines</span>
          </a>
          <div className="main-rules-options1">
            <a href="#sr" className="main-rules-link5">
              {props.text2}
            </a>
            <a href="#gr" className="main-rules-link6">
              {props.text3}
            </a>
            <span className="main-rules-text003">{props.text4}</span>
            <span className="main-rules-text004">{props.text5}</span>
          </div>
        </div>
      </article>
      <div className="main-rules-container1">
        <div className="main-rules-container2">
          <span id="tldr" className="main-rules-text005 HeadingOne">
            <span>TL;DR</span>
          </span>
          <span className="main-rules-text007">
            <span>No Hacking or Cheating.</span>
            <br></br>
            <span>Be respectful and courteous.</span>
            <br></br>
            <span>
              Respect everyone&apos;s possessions, property, and privacy.
            </span>
            <br></br>
            <span>No PVP, Don&apos;t use Global Chat.</span>
            <br></br>
            <span>Be down to earth and humble.</span>
            <br></br>
            <span>
              Be artistic with your builds, don&apos;t be pretentious.
            </span>
            <br></br>
            <span>Everything must be safe for work.</span>
            <br></br>
            <span>Follow Twitch Terms of Service.</span>
          </span>
        </div>
        <div className="main-rules-container3">
          <span id="punishment" className="main-rules-text016 HeadingOne">
            <span>PUNISHMENTS</span>
          </span>
          <span id="minorrv" className="main-rules-text018">
            <span className="main-rules-text019">
              Minor Rule Violation(mRV):
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span> First Offense: Kicked on the Spot</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span> Second Offense: Banned for 10 minutes</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span> Third Offense: Banned for 30 minutes</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span> Succeeding Offenses: Use Major Rule Violation tiers.</span>
          </span>
          <span id="majorrv" className="main-rules-text032">
            <span className="main-rules-text033">
              Major Rule Violation(MRV):
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span> First Offense: Banned for 1 Hour (pardonable)</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span> Second Offense: Banned for 1 Day (pardonable)</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span> Third Offense: Banned for 1 Week (non-pardonable)</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span> Succeeding Offenses: Permanently Banned</span>
          </span>
        </div>
        <div className="main-rules-container4">
          <span id="rag" className="main-rules-text046 HeadingOne">
            <span>RULES AND GUIDELINES</span>
          </span>
          <span id="sr" className="main-rules-text048">
            <span className="main-rules-text049">Server Rules:</span>
            <br></br>
            <span>
              1.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              No using of Exploits, Hacking, or using of any mods that give a
              player unfair advantage over any aspect of the game besides
              personal stats already available to the player. Macros and Bots
              are not allowed. MRV
            </span>
            <br></br>
            <span className="main-rules-text054">
                   a. This includes autoclickers, macros, or hardware features
              which give you unfair advantages.
            </span>
            <br></br>
            <span className="main-rules-text056">
                   b. Only accepted Mods are those in the modpack. (exceptions)
            </span>
            <span className="main-rules-text057">
              {' '}
              - Client performance improvement mods (such as FPS improvement
              mods). Optifine is allowed.
            </span>
            <span className="main-rules-text058">
              {' '}
              - Aesthetic modifications (such as shaders mods).
            </span>
            <span className="main-rules-text059">
              {' '}
              - Armor and Effect Status HUD mods which do not indicate player
              locations.
            </span>
            <span className="main-rules-text060">
              {' '}
              - Brightness and gamma adjustment mods.
            </span>
            <span className="main-rules-text061">
              c. Strictly no mods, texture packs, shaders, or world downloading
              that allow players to see behind things they should not be able to
              see through.
            </span>
            <br></br>
            <br></br>
            <span>
              2. Using Discriminatory Language related to Sexism and Racism is
              NOT allowed. MRV
            </span>
            <br></br>
            <br></br>
            <span>
              3. Excessive rudeness, and bringing in-game conflicts outside the
              game is NOT allowed. mRV
            </span>
            <br></br>
            <br></br>
            <span>
              4. Leaking any server information (IP address, server location,
              server details, equipment) is NOT allowed.
            </span>
            <br></br>
            <span className="main-rules-text072">
                   ​a. Leaking this information might cause a surge of unwanted
              traffic. MRV
            </span>
            <br></br>
            <br></br>
            <span>
              5.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              All players must update when necessary. Players must follow orders
              from Admins and Moderators. mRV
            </span>
            <br></br>
            <br></br>
            <span>
              6. Not every rule is enforced and the server runs on an Honesty
              System. We trust that you will follow these rules.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span className="main-rules-text081">
                   a. You will be banned, as with any and every person you have
              interacted with for more than 6 hours who does not come forward
              with information about you. (outside RP) MRV
            </span>
            <br></br>
            <br></br>
            <span>
              7. No griefing, unnecessary destruction of original server builds,
              and anything that inhibits the ability of other players to play
              the game properly. MRV
            </span>
            <br></br>
            <br></br>
            <span>
              8. You must have a decent microphone and a quiet environment. mRV
            </span>
            <br></br>
            <br></br>
            <span>
              9. Follow Twitch’s Terms of Service at all times. Link:
              https://www.twitch.tv/p/en/legal/terms-of-service/ MRV
            </span>
            <br></br>
            <br></br>
            <span>
              10. Minimum of 10hrs of play time per week. You will be banned if
              you don’t play. mRV
            </span>
            <br></br>
            <br></br>
            <span>
              11. While the server is NOT pay to win, donors will get some
              privileges.
            </span>
            <br></br>
            <span className="main-rules-text098">     </span>
            <span className="main-rules-text099">
              a. 3 Free ‘QuickTravel’ every Php50. TP to any public or unclaimed
              land with the assistance of a mod.
            </span>
            <br className="main-rules-text100"></br>
            <span className="main-rules-text101">
                   b. 1 Free ‘Deathscape’ every Php100. KeepInv is on until the
              next time you die.
            </span>
            <br></br>
            <br></br>
            <span>
              12. Use original, clean usernames. Do not attempt to impersonate
              anyone, including Youtubers, celebrities, etc. mRV
            </span>
          </span>
          <span id="gr" className="main-rules-text105">
            <span className="main-rules-text106">Gameplay Rules:</span>
            <br></br>
            <span>
              1.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>No Automatic and Inhumane Farms (with exceptions) mRV</span>
            <br className="main-rules-text110"></br>
            <span className="main-rules-text111">
                   a. This includes inhumane farms that take advantage of entity
              cramming.
            </span>
            <span className="main-rules-text112">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="main-rules-text113"></br>
            <span className="main-rules-text114">
                   b. Spawner farms that direct mobs to a killing chamber are
              considered inhumane farms.
            </span>
            <span className="main-rules-text115">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="main-rules-text116"></br>
            <span className="main-rules-text117">
                   c. Farms that use TNT to obtain and destroy blocks are not
              allowed.
            </span>
            <span className="main-rules-text118">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="main-rules-text119"></br>
            <span className="main-rules-text120">
                   d. Farms that use Water to destroy blocks are not allowed.
            </span>
            <span className="main-rules-text121">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="main-rules-text122"></br>
            <span className="main-rules-text123">
                   e. Farms that directly contribute to the supply of food are
              not allowed
            </span>
            <span className="main-rules-text124">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="main-rules-text125"></br>
            <span className="main-rules-text126">
                         - Making a cane farm for cake is allowed. Making a pig
              farm for porkchop is NOT allowed and is against 1.a
            </span>
            <span className="main-rules-text127">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="main-rules-text128"></br>
            <span className="main-rules-text129">
                         - Making an egg farm for cake is NOT allowed. This is
              against 1.a/b
            </span>
            <span className="main-rules-text130">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="main-rules-text131"></br>
            <span className="main-rules-text132">
                   f. Farms that don’t use TNT are allowed.
            </span>
            <span className="main-rules-text133">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="main-rules-text134"></br>
            <span className="main-rules-text135">
                   g. Farms that output less than 500 items per hour are
              allowed.
            </span>
            <span className="main-rules-text136">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="main-rules-text137"></br>
            <span className="main-rules-text138">
                   h. Farms that contribute less than 20 item types are allowed.
            </span>
            <br></br>
            <br></br>
            <span>
              2. No unsolicited/non-consensual PVP (Player versus Player). You
              will be kicked/banned. mRV
            </span>
            <br></br>
            <br></br>
            <span>
              3. No Griefing. This is a very broad topic, here are some of which
              are considered griefing:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span className="main-rules-text146">
                   a. Tricking someone into causing their own death. MRV
            </span>
            <span className="main-rules-text147">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="main-rules-text148"></br>
            <span className="main-rules-text149">
                   b. Not fixing creeper holes you see. mRV
            </span>
            <span className="main-rules-text150">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="main-rules-text151"></br>
            <span className="main-rules-text152">
                   c. Causing creeper explosion and damage MRV
            </span>
            <span className="main-rules-text153">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="main-rules-text154"></br>
            <span className="main-rules-text155">
                   d. Partially cutting up trees. mRV
            </span>
            <span className="main-rules-text156">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="main-rules-text157"></br>
            <span className="main-rules-text158">
                   e. Obtaining someone else’s items, goods, and property. MRV
            </span>
            <span className="main-rules-text159">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="main-rules-text160"></br>
            <span className="main-rules-text161">
                   f. Damaging someone else’s tools, items, goods and property.
              MRV
            </span>
            <span className="main-rules-text162">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="main-rules-text163"></br>
            <span className="main-rules-text164">
                   g. This is a bannable offence.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              4. No-one is allowed to build significant structures past x3000
              z3000 and x-3000 and z-3000.
            </span>
            <br></br>
            <span>
                   a.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="main-rules-text170">
              Significant structures contain either any storage device, bed, or
              contiguous structure larger than 5x5x5.
            </span>
            <br className="main-rules-text171"></br>
            <span className="main-rules-text172">
                   b. Structures outside this region will be deleted as chunks
              are reset semi-frequently
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

MainRules.defaultProps = {
  text5: 'Gameplay Rules',
  text2: 'Server Rules',
  text3: 'Gameplay Rules',
  text4: 'Building Rules',
  text: 'Minor Rule Violations (mRV)',
  text1: 'Major Rule Violations (MRV)',
}

MainRules.propTypes = {
  text5: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default MainRules
