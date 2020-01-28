import React from 'react'

const SearchResult = ({drinks}) => {
    if (!drinks.length) {
        console.log(drinks)
    return <h2>not found</h2>
    }
    return(
        <div className="gallery">
            {drinks.map(drink => (
                <div key={drink.idDrink}>
                <img src = {drink.strDrinkThumb}/>
                <h2>{drink.strDrink}</h2>
                </div>
            ))
            }
        </div>
    )
}
export default SearchResult