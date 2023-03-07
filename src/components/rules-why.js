import React from 'react'

import PropTypes from 'prop-types'

import FeatureCard2 from './feature-card2'
import './rules-why.css'

const RulesWhy = (props) => {
  return (
    <div className="rules-why-features">
      <h1 className="rules-why-text">{props.heading}</h1>
      <div className="rules-why-container">
        <FeatureCard2
          title="Organization and Structure"
          new_prop="Reference and Guide"
          description="Managing a server and community is not easy. Rules are here to guide everyone, including the staff."
          rootClassName="rootClassName"
        ></FeatureCard2>
        <FeatureCard2
          title="Ambience and Consistency"
          new_prop="Civility"
          description="The rules are in place to keep the server fun, exciting, and stable. Many rules prevent deliberate attempts of griefing."
          rootClassName="rootClassName3"
        ></FeatureCard2>
        <FeatureCard2
          title="Fairplay and Sportsmanship"
          new_prop="Respect and Safety"
          description="It is important that everyone is able to understand the boundaries of what they can do. It is also important for them to realize the existence of these boundaries."
          rootClassName="rootClassName2"
        ></FeatureCard2>
        <FeatureCard2
          title="Server Performance"
          new_prop="Less Lag"
          description="Some of the rules are written out to prevent the server from lagging. While we're running on very good servers, these are not NASA supercomputers."
          rootClassName="rootClassName1"
        ></FeatureCard2>
      </div>
    </div>
  )
}

RulesWhy.defaultProps = {
  heading: 'Why are there rules...',
}

RulesWhy.propTypes = {
  heading: PropTypes.string,
}

export default RulesWhy
