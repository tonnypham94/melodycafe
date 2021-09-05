import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
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

  const setHeightBanner = () => {
    // Fixing the jumping height of banner on the phone
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  useEffect(() => {
    setHeightBanner()
    !loadingPage && setIsRandomTitle(true)
  }, [loadingPage])

  return (
    <div className="banner">
      <div className="react-parallax">
        <div className="react-parallax-image" style={{ backgroundImage: `url(${Image.slider1})`}}></div>
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
      </div>
    </div>
  )
}

export default Banner
