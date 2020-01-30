import React from 'react'
import {Link} from 'react-router-dom'
import './SearchResult.css'
import "./images/image1.png"

const SearchResult = ({drinks}) => {
    let cocktails = drinks.map((drink) => {
        const id = drink.idDrink
        return (
            <div className="container">
            <div className= "gallery" key={id}>
                    <Link to={`/drinks/${id}`} id={id}>
                        <div>
                            <img className = "cocktail"src={drink.strDrinkThumb}/>
                        <h2 className="title">{drink.strDrink}</h2>
                        <div className="frame">
                            <img src="./images/image1.png"/>
                            </div>
                        </div>
                    </Link>
            </div>
            </div>
        )
    })

    if (!drinks.length) {
        console.log(drinks)
        return <div className="noSearch"><img className="nothingHere" src = "https://media.giphy.com/media/l2SpRf55ejxqJ53UY/giphy.gif"/> </div>
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