import React from 'react'

function CartComponent(items) {
  return (
    <>
        {items.map(item => {
             <div>
             <h4>item.title</h4>
             <p>item.price</p>
             <p>item.qty</p>
         </div>
        })}
    </>
  )
}

export default CartComponent