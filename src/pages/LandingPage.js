import React, { useEffect, useState } from 'react'
// import LoadingPage from './components/LoadingPage'
import Banner from './components/Banner'
import Footer from './components/Footer'
import MainItem from './components/MainItem'
import OtherMenu from './components/OtherMenu'
import OurBlog from './components/OurBlog'
import 'animate.css'
import './LandingPage.scss'

function LandingPage() {
  const [loadingPage, setLoadingPage] = useState(true)

  useEffect(() => {
    setLoadingPage(false)
  }, [])

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
