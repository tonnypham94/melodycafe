import React from 'react'
import Slider from "react-slick"
// import Tilt from '../Tilt'
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

  const allItems = [
    {
      name: 'Sinh tố dâu',
      image: Image.dau1
    },
    {
      name: 'Trà gừng',
      image: Image.traGung
    },
    {
      name: 'Nước ép cam cà rốt',
      image: Image.camCarot
    },
    {
      name: 'Nước ép dứa',
      image: Image.dua
    },
    {
      name: 'Yogurt dâu',
      image: Image.yogurtDau
    },
    {
      name: 'Nước ép cam',
      image: Image.cam1
    },
    {
      name: 'Trà Lipton',
      image: Image.traLipton
    },
    {
      name: 'Yogurt việt quất',
      image: Image.yogurtVietQuat
    },
    {
      name: 'Và còn rất nhiều thức uống khác',
      image: Image.thucUongKhac
    },
  ]

  const RenderItemsMenu = () => {
    return (
      <Slider {...settings}>
        {allItems.map((e, index) => {
          return (
            <div key={index} className='wrap-item'>
              {/* TODO: Remove Till for the performance */}
              {/* <Tilt> */}
                <div className='item-menu'>
                  <img src={e.image} alt={e.name}/>
                  <div className='title'>{e.name}</div>
                </div>
              {/* </Tilt> */}
            </div>
          )
        })}
      </Slider>
    )
  }

  return (
    <div className='other-item'>
      <div className='other-item-background' style={{backgroundImage: `url(${Image.otherMenuBG})`}}>
      {/* <div className='other-item-background'>
        <img src={Image.otherMenuBG} alt='other menu background' /> */}
        <div className='wrap-content'>
          <div className='container'>
            <div className='other-menu'>Other Menu</div>
            <RenderItemsMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherMenu
