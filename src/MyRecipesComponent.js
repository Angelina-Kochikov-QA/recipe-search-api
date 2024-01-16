import iconCalories from './calorie_13195087.png'


function MyRecipesComponent({label, image, calories, ingredients}) {
    return (<div className="recipes recipe-card">

        <div className="recipes item">
            <h2>{label}</h2>

            <img className='recipe-image' src={image} width="340px" alt="recipe"/>
            </div>


            <div className="recipes item">
                
                <ul>
                    {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            </div>

            <div className="recipes item">

            <img src={iconCalories} width="50px" alt="calories" />
            <p>{calories.toFixed()} calories </p>
            </div>
            

        </div>

    )

}

export default MyRecipesComponent;