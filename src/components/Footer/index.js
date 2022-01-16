import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMinus, faCircle as faSolidCircle, faChevronUp, faPlay, faPlus,
  faStop, faMapMarkerAlt, faPhone, faEnvelope, faExternalLinkSquareAlt
} from '@fortawesome/free-solid-svg-icons'
import { faCircle, faSquare } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import './Footer.scss'

function Footer() {
  const addShape = () => {
    let html = []
    const shapes = [faCircle, faSquare, faMinus, faSolidCircle, faChevronUp, faPlay, faPlus, faStop]
    for (var i = 1; i <= 50; i ++) {
      html.push(
        <div key={i} className={`shape-container--${i} shape-animation`}>
          <FontAwesomeIcon className='random-shape' icon={shapes[Math.floor(Math.random()*shapes.length)]}/>
        </div>
      )
    }
    return html
  }

  return (
    <div className="footer">
      <div className="inner-footer">
        {/* Add Animation */}
        {/* <div className="shape">
          {addShape()}
        </div> */}
      </div>
      <div className="content-footer">
        {/* <div className="contact-us">
          <span className="fast-flicker">C</span>o<span className="flicker2">n</span>tac<span className="flicker">t</span><span className="text-space">us</span>
        </div> */}
        <div className="contact-us-title">Contact Us</div>
        <div className="social-network">
          <div className="social-network-item">
            <FontAwesomeIcon className='title' icon={faMapMarkerAlt}/>
            <a className="link" href="https://www.google.com/maps/place/Melody+cafe/@10.9836695,106.8697174,18z/data=!4m5!3m4!1s0x3174dd70da9cf03d:0x3247414cc607dc5f!8m2!3d10.9835677!4d106.870002?hl=vi-VN" target="_blank" rel="noreferrer">
              Hẻm 3, Nguyễn Khuyến, p.Trảng Dài, Biên Hoà, Đồng Nai<FontAwesomeIcon className='external-link' icon={faExternalLinkSquareAlt}/>
            </a>
          </div>
          <div className="social-network-item">
            <FontAwesomeIcon className='title' icon={faFacebookSquare}/>
            <a className="link" href="https://www.facebook.com/MelodyGardenCafe" target="_blank" rel="noreferrer">
              MelodyGardenCafe<FontAwesomeIcon className='external-link' icon={faExternalLinkSquareAlt}/>
            </a>
          </div>
          <div className="social-network-item">
            <FontAwesomeIcon className='title' icon={faPhone}/>
            <a className="link" href="tel:0977469479" target="_blank" rel="noreferrer">
              0977469479<FontAwesomeIcon className='external-link' icon={faExternalLinkSquareAlt}/>
            </a>
          </div>
          <div className="social-network-item">
            <FontAwesomeIcon className='title' icon={faEnvelope}/>
            <a className="link" href="mailto:melodygardencafe@gmail.com" target="_blank" rel="noreferrer">
              melodygardencafe@gmail.com<FontAwesomeIcon className='external-link' icon={faExternalLinkSquareAlt}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
