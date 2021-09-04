import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Parallax, Background } from 'react-parallax'
import Image from '../../assets/images'
import './Banner.scss'

function Banner({ loadingPage }) {
  const [isRandomTitle, setIsRandomTitle] = useState(false)

  const RandomTitle = classNames('text--random', {
    'active': isRandomTitle,
  })

  const RandomCoffee = classNames('text--random-coffee', {
    'active': isRandomTitle,
  })

  useEffect(() => {
    !loadingPage && setIsRandomTitle(true)
  }, [loadingPage])

  return (
    <div className="banner">
      <Parallax strength={500}>
        <Background className="custom-bg">
          <img src={Image.slider1} alt="loading-page" />
        </Background>
        <div className="melody-title">
          <div className="page">
            <ul className={RandomTitle}>
              <li>M</li>
              <li>e</li>
              <li>l</li>
              <li>o</li>
              <li>d</li>
              <li>y</li>
            </ul>
            <div className="high-quality">High Quality</div>
            <ul className={RandomCoffee}>
              <li>C</li>
              <li>o</li>
              <li>f</li>
              <li>f</li>
              <li>e</li>
              <li>e</li>
            </ul>
            <div className="organic"><span>100</span>% Organic</div>
          </div>
        </div>
      </Parallax>
      {/* <ParallaxBanner
        className="parallax"
        layers={[
          {
            image: Image.slider1,
            amount: 0.7,
            expanded: false
          }
        ]}
        style={{
          height: "100vh",
        }}
      >
        <div className="melody-title">
          <div className="page">
            <ul className={RandomTitle}>
              <li>M</li>
              <li>E</li>
              <li>L</li>
              <li>O</li>
              <li>D</li>
              <li>Y</li>
              <li> </li>
              <li>C</li>
              <li>O</li>
              <li>F</li>
              <li>F</li>
              <li>E</li>
              <li>E</li>
            </ul>
          </div>
        </div>
      </ParallaxBanner> */}
    </div>
  )
}

export default Banner
