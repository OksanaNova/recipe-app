import { useEffect, useState } from 'react';
import './App.css'
import video from './food.mp4'
import MyRecipes from './MyRecipes';

  // https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=28795faa&app_key=%20b0f423e5e26748cb2364b8517419fb1e

function App() {

  const MY_ID = "28795faa";
  const MY_KEY = "%20b0f423e5e26748cb2364b8517419fb1e";

  const [userSearch, setUserSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("");

  useEffect( () => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      console.log(data.hits);
      setSearchResult(data.hits)
    }
    getRecipe()
  }, [wordSubmitted])


  const myRecipeSearch = (e) => {
    console.log(e.target.value)
    setUserSearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(userSearch)
  }

  return (
    <div className='App'>

      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type='video/mp4'/>
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className='container'>
         <form onSubmit={finalSearch}> 
            <input className='search' onChange={myRecipeSearch} value={userSearch}/>
         </form>
      </div>

      <div className='container'>
        <button onClick={finalSearch}>
           <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
        </button>
      </div>

        {searchResult.map((element, index) => (
          <MyRecipes key={index}
          label={element.recipe.label} 
          image={element.recipe.image} 
          calories={element.recipe.calories} 
          ingredients={element.recipe.ingredientLines} />
        ))}


  


    </div>
  )
}

export default App
