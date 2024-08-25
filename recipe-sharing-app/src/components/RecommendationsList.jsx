import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';


const RecommendationsList = () => {
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);
  const recommendations = useRecipeStore((state) => state.recommendations);

  useEffect(() => {
    generateRecommendations(); // Generate recommendations on component mount
  }, [generateRecommendations]);

  return (
    <div className="container">
      <h2>Recommendations</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        recommendations.map((recipe) => (
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

export default RecommendationsList;
