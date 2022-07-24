import React from 'react'
import useLoadingPage from '../../hooks/useLoadingPage'
import { useParams } from 'react-router-dom'
import { allBlogItems } from '../../data'
import './ProductDetail.scss'

function ProductDetail() {
  const { slugBlogId } = useParams()
  const blogData = allBlogItems[slugBlogId - 1]
  useLoadingPage()

  return (
    <div className="product-detail">
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
