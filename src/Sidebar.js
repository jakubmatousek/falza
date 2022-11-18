import React from 'react';


export function Sidebar({priceFilter, setPriceFilter,
                         stockFilter, setStockFilter,
                         maxPrice,
                         sortByCheapest, setSortByCheapest}){

    return (
        <div className="Sidebar">
            <PriceFilter  priceFilter={priceFilter} setPriceFilter={setPriceFilter} maxPrice={maxPrice}/>
            <StockFilter  stockFilter={stockFilter} setStockFilter={setStockFilter}/>           
            <Sorting sortByCheapest={sortByCheapest} setSortByCheapest={setSortByCheapest}/>
        </div>    
    )
}

function PriceFilter({priceFilter, setPriceFilter, maxPrice}){
    return(
        <div className='priceFilter'>
            <div className="filterLabel">Cena</div>
            <div className="slidecontainer">
                <input type="range" min="1" max="100" value={parseInt(100*(priceFilter/maxPrice))} class="slider"
                       onInput={e =>{
                        setPriceFilter(parseInt((e.target.value/100)*maxPrice))}}/>
                <div>Od 0 do {priceFilter} kč</div>
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


function Sorting({sortByCheapest, setSortByCheapest}){
    return(
        <div className='Sorting'>
            
            <div className="filterLabel">Řazení</div>
            <label for="availible">Seřadit od </label>
            <select className="sortByDropdown"
                    onChange={e=>{setSortByCheapest(e.target.value)}}
                    defaultValue={sortByCheapest}>
                <option value={1} >nejlevnějšího</option>
                <option value={0} >nejdražšího</option>
            </select>
        </div>
    )

}

function SortingOptions(sortByCheapest){
    if(sortByCheapest){
        return(
            <>
            <option value='1' >nejlevnějšího</option>
            <option value='0' >nejdražšího</option>
            </>
        )
    }else{
        return(
            <>
            <option value='1' >nejlevnějšího</option>
            <option value='0' selected="selected" >nejdražšího</option>
            </>
        )
    }
}