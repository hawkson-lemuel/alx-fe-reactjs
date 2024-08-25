// RecipeList.js
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="container">
      <h3 style={{ marginTop: '0px' }}>Recipes</h3>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe">
          <h3 style={{ textTransform: 'capitalize' }}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
