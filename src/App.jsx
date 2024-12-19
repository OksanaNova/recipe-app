import { useEffect } from 'react';
import './App.css'
import video from './food.mp4'

  // https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=28795faa&app_key=%20b0f423e5e26748cb2364b8517419fb1e


function App() {

  const MY_ID = "28795faa";
  const MY_KEY = "%20b0f423e5e26748cb2364b8517419fb1e";


  useEffect( () => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      console.log(data);
    }
    getRecipe()
  }, [])

  return (
    <div className='App'>
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type='video/mp4'/>
        </video>
        <h1>Find a Recipe</h1>
      </div>


    </div>
  )
}

export default App
