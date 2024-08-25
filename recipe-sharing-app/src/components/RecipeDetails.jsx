// RecipeDetails.js
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

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <>
        <div onClick={handleBack} style={{ marginTop: '20px', marginBottom:'10px', cursor:'pointer' }}>← Back</div>
        <div className="container">
            <div style={{display:'flex',flexDirection:'row', justifyContent:'flex-end'}}>
                <DeleteRecipeButton recipeId={recipeId} />
            </div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <EditRecipeForm recipe={recipe} />
        </div>
    </>
  );
};

export default RecipeDetails;
