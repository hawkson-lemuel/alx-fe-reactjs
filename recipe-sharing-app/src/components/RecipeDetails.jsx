import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = parseInt(id, 10);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const isFavorite = favorites.includes(recipe?.id);

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <>
        <div onClick={handleBack} style={{ marginTop: '20px', marginBottom:'10px', cursor:'pointer' }}>← Back</div>
        {
          recipe?(
            <div className="container">
                <div style={{display:'flex',flexDirection:'row', justifyContent:'flex-end'}}>
                  <button onClick={handleFavoriteToggle} style={{marginRight:'5px'}}>
                    {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                  </button>
                    <DeleteRecipeButton recipeId={recipe.id} />
                </div>
                <h1>{recipe.title}</h1>
                <p>{recipe.description}</p>
                <EditRecipeForm recipe={recipe} />
            </div>
          ):(
            <p>Recipe not found</p>
          )
        }
    </>
  );
};

export default RecipeDetails;
