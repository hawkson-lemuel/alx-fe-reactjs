import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';


const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favoriteIds = useRecipeStore((state) => state.favorites);

  const favorites = recipes.filter(recipe => favoriteIds.includes(recipe.id));

  return (
    <div className="container">
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favorites.map((recipe) => (
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

export default FavoritesList;
