import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams();  // url থেকে id ধরবে
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => {
        const selected = data.find(p => p.id === parseInt(id));
        setProduct(selected);
      })
      .catch(err => console.error("Error loading data:", err));
  }, [id]);

  if (!product) {
    return <p className="p-6">Loading product details...</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
      <p className="mb-2">{product.des}</p>
      <img 
        className="w-96 rounded shadow"
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" 
        alt={product.title} 
      />
      <button className="btn btn-primary mt-4">Confirm Purchase</button>
    </div>
  )
}

export default ProductDetails
