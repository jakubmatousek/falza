import React from 'react';
import big_logo from "./img/falza_logo_2_wh.png"
import {CartQuickView} from "./CartQuickView"

export function Navbar({ productCategories, activeCategory, setActiveCategory, productsInCart, setProductsInCart}) {
    return (
        <div className='Navbar'>
            <BigLogo/>
            <NavbarOptions productCategories={productCategories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <CartQuickView productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>
        </div>
    );
}


function NavbarOptions({ productCategories, activeCategory, setActiveCategory }) {
    const categoryOptions = []
    productCategories.forEach(category => {
        categoryOptions.push(
            <span onClick={() => { setActiveCategory(category) }}
                className={activeCategory === category ? "active" : "notActive"}>{category}</span>
        )
    });
    return (
        <div className='NavbarOptions'>
            <span onClick={() => { setActiveCategory(null) }}
                className={activeCategory == null ? "active" : "notActive"}>Všechen sortiment</span>
            {categoryOptions}
        </div>
    )
}

function BigLogo() {
    return (
        <div className='bigLogo'>
            <a href=''>
                <img className="bigLogoImg" src={big_logo}></img>
            </a>
        </div>
    )
}

