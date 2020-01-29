import React from 'react'
import {Link} from 'react-router-dom'

const SearchResult = ({drinks}) => {
    let cocktails = drinks.map((drink) => {
        const id = drink.idDrink
        return (
            <div key={id}>
                <div>
                    <Link to={`/drinks/${id}`} id={id}>
                        <img src={drink.strDrinkThumb}/>
                        <h2>{drink.strDrink}</h2>
                    </Link>
                </div>
            </div>
        )
    })

    if (!drinks.length) {
        console.log(drinks)
    return <h2>not found</h2>
    }
    return(
        <div>
        <div>
        {cocktails}         
        </div>
    </div>
    )
}
export default SearchResult