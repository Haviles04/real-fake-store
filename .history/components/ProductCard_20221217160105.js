import React from 'react'

function ProductCard({item}) {
  return (
    <div key={item.id}>
        <p>{item.title}</p>
        <p>{item.price}</p>
    </div>
  )
}

export default ProductCard