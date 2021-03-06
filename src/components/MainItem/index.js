import React, { useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Image from '../../assets/images'
import './MainItem.scss'

function MainItem() {

  useEffect(() => {
    document.getElementById('video-new-cafe').play()
  }, [])

  return (
    <div className="main-item container">
      <div className="block">
        <div className="item">
          <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
            <div className="image">
              <video id="video-new-cafe" autoPlay muted src={Image.newcafe} loop type="video/mp4"/>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true}>
            <div className="description">
              <div className="title">Coffee</div>
              <div className="content">Phụ nữ rất giống cà phê, bởi nếu là loại ngon sẽ làm bạn mất ngủ.</div>
              <div className="author">- Anonymous -</div>
              <a className="button-google-maps" href="https://www.google.com/maps/place/Melody+cafe/@10.9836695,106.8697174,18z/data=!4m5!3m4!1s0x3174dd70da9cf03d:0x3247414cc607dc5f!8m2!3d10.9835677!4d106.870002?hl=vi-VN" target="_blank" rel="noreferrer">
                <span>Đi nào!</span>
                <div className="liquid"></div>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

export default MainItem
