import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import Image from '../../assets/images'
import './LoadingPage.scss'

function LoadingPage({ loadingPage }) {
  const [isDisplayNone, setIsDisplayNone] = useState(false)
  const LoadingImage = classNames('loading-page', {
    'disable': !loadingPage,
    'displayNone': isDisplayNone,
  })

  useEffect(() => {
    // when loading page is done, display none this one
    !loadingPage && setTimeout(() => {
      setIsDisplayNone(true)
    }, 250)
  }, [loadingPage])

  return (
    <div className={LoadingImage}>
      <div className='animation-image'>
        <img src={Image.loadingPage} alt='loading-page-img'/>
      </div>
    </div>
  )
}

export default LoadingPage
