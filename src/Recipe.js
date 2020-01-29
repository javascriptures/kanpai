import React, { useState, useEffect} from 'react'

function Recipe({id}) {
    const [ingredients, setIngredients] = useState('');
    const [recipe, setRecipe] = useState('');

    useEffect(() => {
        getRecipe(id);
        console.log(id)
    })


    function getRecipe(id){
        const url = (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        console.log()      
        fetch(url)
            .then(response => response.json())
            .then(response => {
            setRecipe(response.drinks[0].strInstructions)
            console.log(recipe)
        })
    .catch(console.error);
    }

    return(
//         <ul>
// <li>{ingredients}</li>
//         </ul>
    <p>done</p>
    )
}

export default Recipe