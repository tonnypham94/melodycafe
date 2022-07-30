import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick"
import { allBlogItems } from '../../data'
import './OurBlog.scss'

function OurBlog() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    swipeToSlide: false,
    swipe: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const RenderItemsMenu = () => {
    return (
      <Slider {...settings}>
        {allBlogItems.map((e, index) => {
          return (
            <div key={index} className='wrap-blog'>
              <div className='blog'>
                <img src={e.image} alt={e.title}/>
                <div className='title'>{e.title}</div>
                <div className='date'>{e.date} <Link to={`/blog/${e.id}`}>Xem thêm</Link></div>
              </div>
            </div>
          )
        })}
      </Slider>
    )
  }

  return (
    <div className='our-blog'>
      <div className='container'>
        <div className='our-blog-title'>Our Blog</div>
        <RenderItemsMenu />
      </div>
    </div>
  )
}

export default OurBlog
