import React, { useEffect, useState } from 'react'
import LoadingPage from './components/LoadingPage'
import Banner from './components/Banner'
import Footer from './components/Footer'
import MainItem from './components/MainItem'
import OtherMenu from './components/OtherMenu'
import OurBlog from './components/OurBlog'
import 'animate.css'
import './LandingPage.scss'

function LandingPage() {
  let start = window.performance.now()
  const [loadingPage, setLoadingPage] = useState(true)

  const demoAsyncCall = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 3000))
  }

  useEffect(() => {
    demoAsyncCall().then(() => {
      setLoadingPage(false)
      let end2 = window.performance.now()
      console.log(`Execution time to rendered: ${end2 - start} ms`)
    })
  }, [])

  return (
    <div className="landing-page">
      {/* <LoadingPage loadingPage={loadingPage}/> */}
      <Banner loadingPage={loadingPage}/>
      <div className="wrap-page-content">
        <MainItem />
        <OtherMenu />
        <OurBlog />
        <div className="content">
          <h1>Banner Children123</h1>
          <h1>Banner HELLLLLLLO</h1>
          <h1>Banner HELLLLLLLO</h1>
          <h1>Banner HELLLLLLLO</h1>
          <h1>Banner HELLLLLLLO</h1>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default LandingPage
