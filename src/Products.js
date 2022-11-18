import React from 'react';
import koupitImg from "./img/btn.png"

export function Products({products, activeCategory, productsInCart, setProductsInCart}) {
  const filteredProducts = []
  products.forEach(product => {
    if(product.category == activeCategory || activeCategory == null){
      var inCart = false
      if(productsInCart.includes(product.id)){
        inCart = true
      }
      filteredProducts.push(<Product
                             id={product.id}
                             price={product.price}
                             stocked={product.stocked}
                             name={product.name}
                             img={"./img/"+product.img}
                             productsInCart={productsInCart}
                             setProductsInCart={setProductsInCart}
                             inCart={inCart}/>
                             )
    }
  });
    return (
      <div className='productsContainer'>
        <div className="Products" key="Products">
          {filteredProducts}
        </div>
      </div>
    );
  }
  

  function Product({id, price, stocked, name, img, productsInCart, setProductsInCart, inCart}) {
   var inCartElement = inCart ? <img className="inCartElement" src="./img/kosik_red.png"/> : ""
    return (
      <div className="Product" key={id}>
        {inCartElement}
        <img className="productImg" src={img}/>
        <div className='productInfo'>
          <div className='name'>{name}</div>
          <div className='buyPriceCombo'>
            <div className='price'>{price} CZK</div>
            <button className='buyButton'
             onClick={()=>{
              if(productsInCart===null){
                setProductsInCart([id])
              }else{
                setProductsInCart([...productsInCart, id])
              }
              }}></button>
          </div>
          <div className='stocked'>{stocked ? "skladem" : "momentálně nedostupné"}</div>
        </div>
      </div>
    );
  }
  
