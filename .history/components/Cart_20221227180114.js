import React from 'react'

function Cart(items) {
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

export default Cart