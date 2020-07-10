import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Components/Recipe'

const App = () => {

  const AppId = "f2f4d2e5";
  const AppKey = 'd1cf23f2b74e0d71650c142dbd5a5b0f';


  const [recipes, setRecipes] = useState([]);//create state
  const [search, setSearch] = useState("");//create state
  const [query, setQuery] = useState("carrot") //only when I click the button i want it to search


  useEffect( () => {
    getRecipes();
  }, [query]); // is only going to run only when we click the button

const getRecipes = async () => {
  const response = await fetch
  (`https://api.edamam.com/search?q=${query}&app_id=${AppId}&app_key=${AppKey}&limit=4`)
  const data = await response.json()
  setRecipes(data.hits); // setting setRecipes to data.hits
  console.log(data.hits)
}

const updateSearch = e => {
  setSearch(e.target.value)
}

//When I want to submit that form I want to run this getSearch
const getSearch = e => {
e.preventDefault();//stop that page refresh
setQuery(search); // the finish updated value in our input
setSearch("");
}

  return (
    <div className='App'>
      <h1>Write the main ingredient and enjoy the recipes</h1>
      <form onSubmit={getSearch} className='searchForm'>
        <input onChange={updateSearch} className='searchBar' type='text' value={search}/>
        <button className='searchButton' type='submit'>Search</button>
      </form>

      <div className='recipe'>
      {recipes.map( recipe => (
        <Recipe 
        key={recipe.recipe.label} 
        title={recipe.recipe.label} 
        image={recipe.recipe.image}
        ingredients ={recipe.recipe.ingredients}
        />
        ))}
      </div>
      
    </div>
  )
}


export default App;
