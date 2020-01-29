import React, { useState, useEffect } from 'react';
import { Link, Switch, Route, Redirect} from 'react-router-dom'
import Recipe from './Recipe'
import Header from './Header';
import SearchResult from './SearchResult'

function App() {

  const [drinks, setDrinks] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    // Pass the searchString to getImages
    getIng(searchString);
    getDrinks(searchString);
  }, []);


  function getIng (searchString) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchString}`
    fetch(url)
    .then(response => response.json())
    .then(response => {
      setDrinks(response.drinks);
      console.log(drinks)
      setSearchString('')
    })
    .catch(console.error);
  }

  function getDrinks(searchString) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchString}`
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setDrinks(response.drinks);
        console.log(drinks)
        setSearchString('')
      })
      .catch(console.error);
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
      <Header 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
        />
      <SearchResult 
      drinks={drinks}
      />
    </div>
    <main>
                    <Switch>
                        <Route
                            path={`/drinks/:id`}
                            render={(routerProps) => {
                                return (<Recipe 
                                  
                                  match={routerProps.match}/>
                                )}}
                        />
                        <Route
                        path="/currency"
                        render={() => <Redirect to="/drinks"/>}/>
                    </Switch>
                </main>
                </div>
  );
}

export default App;
