import React from 'react';
import {useState} from "react"
import {PRODUCTS} from "./data.js"

import cartImg from "./img/kosik.png"
import nicImg from "./img/nic.png"

export function CartQuickView({productsInCart, setProductsInCart}) {
  const [cartOpen, setCartOpen] = useState(false)
    return (
      <>
      <div className="CartQuickView" onClick={()=>{setCartOpen(!cartOpen)}}>
        <div className='productCount'>&nbsp;{Object.keys(productsInCart).length}&nbsp;</div>
        <img src={cartImg} alt=""></img>
      </div>
      {cartOpen ? <OpenCart productsInCart={productsInCart} setProductsInCart={setProductsInCart}></OpenCart> : ""}
      </>
    );
  }
  

function OpenCart({productsInCart, setProductsInCart}){
  var uniqueProductIDs = [...new Set(productsInCart)]
  var uniqueProducts = PRODUCTS.filter(p=>uniqueProductIDs.includes(p.id) ? p : false)
  var totalAmount = 0
  var cartRows = []
  uniqueProducts.forEach(product=>{
    let amountOfThisProduct = productsInCart.filter(p=>p===product.id).length
    let productPriceForQuantity = amountOfThisProduct*product.price
    totalAmount += productPriceForQuantity
    cartRows.push(
      <div className="productInCart">
        <span className="name">{product.name}</span>
        <span className="prodAmountInCart">
        <button onClick={()=>{
                    let productsInCartCopy = [...productsInCart]
                    deleteFromList(productsInCartCopy, product.id)
                    setProductsInCart(productsInCartCopy)
                  }}>-</button>
          <span className="amount">{amountOfThisProduct}</span>
          <button onClick={()=>{setProductsInCart([...productsInCart, product.id])}}>+</button>
          </span>
          <span className='productInCartPrice'>{productPriceForQuantity} kč</span>
      </div>
    )
  })
  cartRows.push(
    <div className="total">Celkem: {totalAmount} kč</div>
  )
  return(
    <div className="OpenCart">
      {productsInCart.length > 0 ? cartRows : <img className="nic" src={nicImg} alt=""/>}
    </div>
  )
}


function deleteFromList(list, deletedElement){
  let delIndex = list.indexOf(deletedElement)
  list.splice(delIndex, 1); ; // delete element with index 4return 
}
  