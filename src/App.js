import './App.css';
import video from './food.mp4'
import icon from './leaf_2241933-removebg-preview.png'
import iconTwo from './glass_11477384-removebg-preview.png'
import { useState } from 'react';
import { useEffect } from 'react';
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const MY_ID = "2c0bac45";
  const MY_KEY = "54cb5ba4c4f288ce6b0cdc47973c01ac";


const [mySearch, setMySearch] = useState("");
const [myRecipes, setMyRecipes] = useState([]);
const [wordSubmitted, setWordSubmitted] = useState("");


  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits)
    }
    getRecipe()
  }, [wordSubmitted])


  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
  }




  return (<div>
    <div className="App">
    <div className="container">
      <video playsInline autoPlay muted loop>
        <source src={video} type="video/mp4" />
        </video>
        <h1>QuickMeal</h1>
        <img className="icon" src={icon} width="80px" height="80px" alt='icon'/>
        </div>
          </div>
          
          <div className='container'>
            <form onSubmit={finalSearch}>
            <input type="search" className='search' onChange={myRecipeSearch} value={mySearch} placeholder='Find a recipe...'></input>
            <button onClick={finalSearch}>
              <img src={iconTwo} width="30px" height="30px" alt='search'/>
              </button>
              </form>
              </div>

              <div className='recipes'>

              {myRecipes.map((element, index) => (
                <MyRecipesComponent key={index}
                label={element.recipe.label} 
                image={element.recipe.image} 
                calories={element.recipe.calories}
                ingredients={element.recipe.ingredientLines}/>
              ))}
              </div>



              </div>
  );
}

export default App;

