import React, { useState} from 'react';
import { Link, Switch, Route} from 'react-router-dom'
import Recipe from './Recipe'
import Header from './Header';
import MenuBar from './MenuBar';
import SearchResult from './SearchResult'
import "./App.css"

function App() {

  const [drinks, setDrinks] = useState([]);
  const [searchString, setSearchString] = useState('');


  const getIng = ({searchString}) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchString}`;
    fetch(url)
    .then(response => response.json())
    .then(response => console.log(response.json()))
    .then(response => {
      setDrinks(response.drinks);
      setSearchString('')
    })
      .catch((error) => { return 0; });
  }

  const getDrinks = (searchString) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchString}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setDrinks(response.drinks);
        setSearchString('')
      })
      .catch((error)=> {return 0;});
  }

  function handleChange(event) {
    setSearchString(event.target.value);
    
  }

  function handleSubmit(event) {
    event.preventDefault();
    getIng(searchString);
    getDrinks(searchString)
    ;
  }
  return (
    <div>
    <div>
      <MenuBar/>
      <Header 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
        />
        <Link to="/"><button>Go Back To Home</button></Link>
  </div>
    <main>
      <Switch>
        <Route
          exact
            path={`/drinks/:id`}
            render={(routerProps) => {
                return (<Recipe
                  match={routerProps.match}/>
                )}}
        />
        <Route
          exact
            path="/"
            render={() => 
              <SearchResult
                drinks={drinks}
              />
            }
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
