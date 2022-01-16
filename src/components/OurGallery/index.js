import React from 'react'
import Gallery from 'react-grid-gallery'
import { galleryData } from '../../data'
import './OurGallery.scss'


function OurGallery() {
  return (
    <div className='gallery'>
      <div className='gallery__title'>Gallery</div>
      <Gallery
        images={galleryData}
        backdropClosesModal={true}
        showLightboxThumbnails={true}
        enableImageSelection={false}
      />
    </div>
  )
}

export default OurGallery
