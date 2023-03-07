import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card3.css'

const BlogPostCard3 = (props) => {
  return (
    <div className={`blog-post-card3-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card3-image"
      />
      <div className="blog-post-card3-container">
        <h1 className="blog-post-card3-text">{props.new_prop}</h1>
        <div className="blog-post-card3-container1">
          <span className="blog-post-card3-text1">{props.description}</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard3.defaultProps = {
  new_prop: 'Lorem ipsum dolor sit amet',
  image_src:
    'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&h=1200',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  rootClassName: '',
  image_alt: 'image',
}

BlogPostCard3.propTypes = {
  new_prop: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
}

export default BlogPostCard3
