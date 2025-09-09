import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/products.json') 
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error loading data:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products List</h2>
     <div className='flex gap-4'>
{products.map(product => <ProductCard product={product}/>)}
     </div>
        
  
    </div>
  );
};

export default Products;
