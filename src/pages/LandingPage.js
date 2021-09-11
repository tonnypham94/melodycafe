import React, { useEffect, useState } from 'react'
// import LoadingPage from './components/LoadingPage'
import Banner from './components/Banner'
import Footer from './components/Footer'
import MainItem from './components/MainItem'
import OtherMenu from './components/OtherMenu'
import OurBlog from './components/OurBlog'
import 'animate.css'
import './LandingPage.scss'

function LandingPage({ hideLoader }) {
  const [loadingPage, setLoadingPage] = useState(true)

  useEffect(() => {
    // Waiting for loading page at least 2s
    setTimeout(() => {
      hideLoader()
      setLoadingPage(false)
    }, 2000)
  }, [hideLoader])

  return (
    <div className="landing-page">
      {/* <LoadingPage loadingPage={loadingPage}/> */}
      <Banner loadingPage={loadingPage}/>
      <div className="wrap-page-content">
        <MainItem />
        <OtherMenu />
        <OurBlog />
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage
