import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card2.css'

const GalleryCard2 = (props) => {
  return (
    <div className={`gallery-card2-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card2-image"
      />
    </div>
  )
}

GalleryCard2.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&h=1000',
  image_alt: 'image',
  rootClassName: '',
}

GalleryCard2.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default GalleryCard2
