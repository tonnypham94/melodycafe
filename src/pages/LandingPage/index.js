import React from 'react'
// import LoadingPage from './components/LoadingPage'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import MainItem from '../../components/MainItem'
import OtherMenu from '../../components/OtherMenu'
import OurBlog from '../../components/OurBlog'
import OurGallery from '../../components/OurGallery'
import useLoadingPage from '../../hooks/useLoadingPage'
import 'animate.css'
import './LandingPage.scss'

function LandingPage() {
  const loading = useLoadingPage(true)

  return (
    <div className="landing-page">
      {/* <LoadingPage loadingPage={loadingPage}/> */}
      <Banner loadingPage={loading}/>
      <div className="wrap-page-content">
        <MainItem />
        <OtherMenu />
        <OurGallery />
        <OurBlog />
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage
