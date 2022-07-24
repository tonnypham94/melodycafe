import React, { useEffect } from 'react'
import useLoadingPage from '../../hooks/useLoadingPage'
import { useHistory, useParams } from 'react-router-dom'
import { allBlogItems } from '../../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'
import './ProductDetail.scss'

function ProductDetail() {
  useLoadingPage()
  const { slugBlogId } = useParams()
  const history = useHistory()
  const blogData = allBlogItems[slugBlogId - 1]

  const handleBackButton = () => {
    history.goBack()
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="product-detail">
      <FontAwesomeIcon className='back-arrow' icon={faArrowAltCircleLeft} size='3x' color='white' onClick={handleBackButton} />
      <div className="product-detail__page">
        <div className="product-detail__banner">
          <img src={blogData.image} alt='blog'/>
          <div className="product-detail__title">{blogData.title}</div>
        </div>
        {blogData?.content?.paragraphs?.map((item, index) => {
          return (
            <div className="product-detail__content">
              {item?.title && <div className="product-detail__content--title">{index + 1}. {item.title}</div>}
              {item?.text && <div className="product-detail__content--text">{item.text}</div>}
              {item?.image && <div className="product-detail__content--img">
                <img src={item.image} alt='blog'/>
              </div>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductDetail
