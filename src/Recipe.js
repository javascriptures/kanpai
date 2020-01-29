import React, { useState, useEffect} from 'react'

function Recipe(props) {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState('');
    const [image, setImage] = useState('');
    const id = props.match.params.id;

    useEffect(() => {
        getRecipe(id);
    })


    function getRecipe(id){
        const url = (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        console.log()      
        fetch(url)
            .then(response => response.json())
            .then(response => {
            setImage(response.drinks[0].strDrinkThumb)
            setRecipe(response.drinks[0].strInstructions)
                function countIng() {
                    for(let i = 0;i <= 15; i++){
                        if ((response.drinks[0].strIngredient(i) !== null)){
                            setIngredients(response.drinks[0].strIngredient(i))
                    }
                }
            }
                
                // setIngredients(response.drinks[0].strIngredient1)
                // setIngredients(response.drinks[0].strIngredient2)
                // setIngredients(response.drinks[0].strIngredient3)
        })
    .catch(console.error);
    }

    return(
        <div>
        <img src={image}/>

        <p>{recipe}</p>
        </div>
    )
}

export default Recipe