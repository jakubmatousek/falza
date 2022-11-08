import './App.css';

import React from 'react';
import {useState} from "react"
import {Products} from './Products';
import {Navbar} from "./Navbar.js"
import {PRODUCTS} from "./data.js"
import {Sidebar} from "./Sidebar.js"

function App() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [productsInCart, setProductsInCart] = useState([])
  const maxPrice = getMostExpensiveProduct()
  const [priceFilter, setPriceFilter] = useState(maxPrice)
  const [stockFilter, setStockFilter] = useState(false)
  const productCategories = getProductCategories()

  var filteredProducts = PRODUCTS.filter((p)=>p.price<=priceFilter)
  if(stockFilter){
    filteredProducts = filteredProducts.filter((p)=>p.stocked === true)
  }

  return (
    <div className="App">
      <Navbar productCategories={productCategories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              productsInCart={productsInCart}
              setProductsInCart={setProductsInCart}/>
      <div className='gridContainer'>        
        <Sidebar priceFilter={priceFilter}
                 setPriceFilter={setPriceFilter}
                 stockFilter={stockFilter}
                 setStockFilter={setStockFilter}
                 maxPrice={maxPrice}
                 />
        <Products products={filteredProducts}
                  activeCategory={activeCategory}
                  productsInCart={productsInCart}
                  setProductsInCart={setProductsInCart}
                  />
      </div>          
    </div>
  );
}

function getProductCategories(){
  return[...new Set(PRODUCTS.map((p)=>p.category))]
}

function getMostExpensiveProduct(){
  return Math.max(...PRODUCTS.map((p)=>p.price))
}
export default App;



