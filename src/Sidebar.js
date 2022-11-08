import React from 'react';


export function Sidebar({priceFilter, setPriceFilter, stockFilter, setStockFilter, maxPrice}){

    return (
        <div className="Sidebar">
            <PriceFilter  priceFilter={priceFilter} setPriceFilter={setPriceFilter} maxPrice={maxPrice}/>
            <StockFilter  stockFilter={stockFilter} setStockFilter={setStockFilter}/>
        </div>    
    )
}

function PriceFilter({priceFilter, setPriceFilter, maxPrice}){
    return(
        <div className='priceFilter'>
            <div class="filterLabel">Cena</div>
            <div class="slidecontainer">
                {console.log(100*parseInt(priceFilter/maxPrice), priceFilter, maxPrice)}
                <input type="range" min="1" max="100" value={parseInt(100*(priceFilter/maxPrice))} class="slider"
                       onInput={e =>{
                        setPriceFilter(parseInt((e.target.value/100)*maxPrice))}}/>
                <p>Od 0 do {priceFilter} kč</p>
            </div>
        </div>
    )
}

function StockFilter({stockFilter, setStockFilter}){
    return(
        <div className='stockFilter'>
            <div className="filterLabel">Dostupnost</div>
            <div className='stockFilterContainer'>
                <label for="availible">Pouze skladem </label>
                <input id="availible" type="checkbox" value="0"
                 onChange={()=>{setStockFilter(!stockFilter)}}/>
            </div>
        </div>
    )
}