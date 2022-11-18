import './App.css';

import React from 'react';
import {useState} from "react"
import {Products} from './Products';
import {Navbar} from "./Navbar.js"
import {PRODUCTS} from "./data.js"
import {Sidebar} from "./Sidebar.js"

function App() {
  const maxPrice = getMostExpensiveProduct()
  const productCategories = getProductCategories()

  const [activeCategory, setActiveCategory] = useState(null)
  const [productsInCart, setProductsInCart] = useState([])
  const [priceFilter, setPriceFilter] = useState(maxPrice)
  const [stockFilter, setStockFilter] = useState(false)
  const [sortByCheapest, setSortByCheapest] = useState(true)

  var filteredProducts = filterByPrice(PRODUCTS, priceFilter)
  filteredProducts = stockFilter ?  filterByStock(filteredProducts) : filteredProducts
  filteredProducts = sortProducts(filteredProducts, sortByCheapest)
  console.log(filteredProducts)
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
                 sortByCheapest={sortByCheapest}
                 setSortByCheapest={setSortByCheapest}
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

function filterByPrice(products, maxPrice){
  return products.filter((product) => product.price <= maxPrice)
}

function filterByStock(products){
  return products.filter((product) => product.stocked === true)
}

function sortProducts(products, sortByCheapest){
  console.log(sortByCheapest)
  if (sortByCheapest == 1)
    return products.sort((a, b)=> a["price"] - b["price"]);
  return products.sort((a, b)=> b["price"] - a["price"]);
}

export default App;



