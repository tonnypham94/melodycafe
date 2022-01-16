import React from 'react'
import useLoadingPage from '../../hooks/useLoadingPage'
import { useParams } from 'react-router-dom'
import { allBlogItems } from '../../data'
import './ProductDetail.scss'

function ProductDetail() {
  const { slugBlogId } = useParams()
  console.log('allBlogItems', allBlogItems[slugBlogId])
  const blogData = allBlogItems[slugBlogId - 1]
  useLoadingPage()

  return (
    <div className="product-detail">
      <div className="product-detail__content">
        <div className="product-detail__banner">
          <img src={blogData.image} alt='blog'/>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
