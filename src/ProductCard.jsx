import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
    console.log(product)
  return (
   <div className="card bg-base-100 w-96 shadow-sm ">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product.title}</h2>
    <p>{product.des}</p>
    <div className="card-actions justify-end">
     <Link to={`/products/${product.id}`} className="btn btn-primary">
            see Details
          </Link>
    </div>
  </div>
</div>
  )
}

export default ProductCard
