import React from 'react'
import Slider from "react-slick"
import Image from '../../assets/images'
import './OurBlog.scss'

function OurBlog() {
  const settings = {
    dots: true,
    infinite: true,
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

  const allItems = [
    {
      title: '1 Everyday Dinner Choices for a Healthier, Happier You',
      image: Image.blog1
    },
    {
      title: '2 Everyday Dinner Choices for a Healthier, Happier You',
      image: Image.blog2
    },
    {
      title: '3 Everyday Dinner Choices for a Healthier, Happier You',
      image: Image.blog3
    },
    {
      title: '4 Everyday Dinner Choices for a Healthier, Happier You',
      image: Image.blog4
    },
    {
      title: '5 Everyday Dinner Choices for a Healthier, Happier You',
      image: Image.blog5
    },
    {
      title: '6 Everyday Dinner Choices for a Healthier, Happier You',
      image: Image.blog3
    }
  ]

  const RenderItemsMenu = () => {
    return (
      <Slider {...settings}>
        {allItems.map((e, index) => {
          return (
            <div key={index} className='wrap-blog'>
              <div className='blog'>
                <img src={e.image} alt={e.title}/>
                <div className='title'>{e.title}</div>
                <div className='date'>December 6, 2018</div>
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
