import React, { useState, useEffect} from 'react'

function Recipe(props) {
    // const [ing, setIng] = useState([])
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState('');
    const [image, setImage] = useState('');
    const id = props.match.params.id;

    useEffect(() => {
        getRecipe(id);
        console.log(ingredients)
    }, [id])


    function getRecipe(id){
        const url = (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        console.log()      
        fetch(url)
            .then(response => response.json())
            .then(response => {
            const data = response.drinks[0]
            setImage(data.strDrinkThumb)
            setRecipe(data.strInstructions)

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
        <img src={image}/>
        <h4>Ingredients:</h4>
        <ul>
            {ingredients.map(item => (
                <li key={item.replace(/\s/g, "")}>{item}</li>
            ))}
        </ul>
        <p>{recipe}</p>
        </div>
    )
}

export default Recipe