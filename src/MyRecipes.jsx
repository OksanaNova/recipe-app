import check from './assets/check.png';

function MyRecipes({label, image, calories, ingredients}) {

    return (

        <div>
            <div className="container">
                <h2>{label}</h2>
            </div>

            <div className="container">
                <img src={image} width="200px" alt="food" />
            </div>

           <ul className="container list">
            {ingredients.map(ingredient => (
                <li>
                    <img src={check} alt='check-mark' className='icon'/>
                    {ingredient}
                </li>
            ))}
           </ul>

            <div className="container">
                <p>{calories.toFixed()} calories</p>
            </div>
        </div>

        // ПЕРВЫЙ СПОСОБ
        // <div>
        //     {mySearchResults.map((element, index) => {
        //         console.log("🚀 ~ {mySearchResults.map ~ element:", element);
                
        //         // const calories = element.recipe.calories;
        //         // const label = element.recipe.label;
        //         const { recipe: {calories, label, image}} = element;
         
        //         return (
        //             <div key={index}>
        //                 <h2>{label}</h2>
        //                 <p>Calories: {Math.floor(calories)}</p>
        //                 <img src={image} width="250px" alt="food" />
        //             </div>
        //         )
        //     })}
        // </div>

    )
}

export default MyRecipes