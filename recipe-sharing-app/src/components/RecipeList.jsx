import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h3 style={{ marginTop: '0px' }}>Recipes</h3>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe">
              <h3 style={{ textTransform: 'capitalize' }}>
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
