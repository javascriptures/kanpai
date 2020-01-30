import React, { useState, useEffect} from 'react'

function Recipe(props) {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState('');
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const id = props.match.params.id;

    useEffect(() => {
        getRecipe(id);
    }, [id])


    function getRecipe(id){
        const url = (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)     
        fetch(url)
            .then(response => response.json())
            .then(response => {
            const data = response.drinks[0]
            setImage(data.strDrinkThumb)
            setRecipe(data.strInstructions)
            setName(data.strDrink)
        //The following code was borrowed from Jennifer Meade and refactored to fit my code here
            function getIng(){
                const ingredients = [];
                let i = 1;
                while (data["strIngredient" + i]) {
                    const name = data["strIngredient" + i];
                    const measurement = data["strMeasure" + i];
                    ingredients.push(measurement + " " + name);
                    i++;
            }
            
                setIngredients(ingredients)
        }
            getIng();

            
        })
    .catch(console.error);
    }

    return(
        
        <div>
            <link href="https://fonts.googleapis.com/css?family=Cabin+Sketch&display=swap" rel="stylesheet"></link>
        <h1 className="recipeTitle">{name}</h1>
        <div className="imageContainer">
        <img className="recipeImage"src={image} alt="cocktail"/>
        </div>
        <div className="recipe">
        <h4>Ingredients:</h4>
        <ul> 
            {ingredients.map(item => (
                <li key={item.replace(/\s/g, "")}>{item}</li>
            ))}
        </ul>
        <p>{recipe}</p>
        </div>
        </div>
    )
}

export default Recipe