import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import classNames from 'classnames'
import Image from '../../assets/images'
import './OtherMenu.scss'

function OtherMenu() {
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

  return (
    <div className='other-item'>
      <Slider {...settings}>
        <div className='wrap-item'>
          <div className='item-menu'>
            <img src={Image.coffeeItem} alt='item menu'/>
            <div className='title'>Hello</div>
            <div className='title'>Hello</div>
            <div className='title'>Hello</div>
            <div className='title'>Hello</div>
          </div>
        </div>
        <div className='wrap-item'>
          <div className='item-menu'>
            <img src={Image.coffeeItem} alt='item menu'/>
            <div className='title'>Hello</div>
            <div className='title'>Hello</div>
            <div className='title'>Hello</div>
            <div className='title'>Hello</div>
          </div>
        </div>
        <div className='wrap-item'>
          <div className='item-menu'>
            <img src={Image.coffeeItem} alt='item menu'/>
            <div className='title'>Hello</div>
            <div className='title'>Hello</div>
            <div className='title'>Hello</div>
            <div className='title'>Hello</div>
          </div>
        </div>
        <div className='wrap-item'>
          <div className='item-menu'>
            <img src={Image.coffeeItem} alt='item menu'/>
            <div className='title'>Hello</div>
            <div className='title'>Hello</div>
            <div className='title'>Hello</div>
            <div className='title'>Hello</div>
          </div>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  )
}

export default OtherMenu
