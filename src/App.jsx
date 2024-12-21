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

  useEffect( () => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      console.log(data.hits);
      setSearchResult(data.hits)
    }
    getRecipe()
  }, [])


  const myRecipeSearch = (e) => {
    console.log(e.target.value)
    setUserSearch(e.target.value)
  }

  console.log('searchResult', searchResult)

  return (
    <div className='App'>

      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type='video/mp4'/>
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className='container'>
         <form>
            <input className='search' onChange={myRecipeSearch} value={userSearch}/>
         </form>
      </div>

      <div className='container'>
        <button>
           <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
        </button>
      </div>

      {searchResult.map(element => (
        <MyRecipes />
      ))}

  


    </div>
  )
}

export default App
