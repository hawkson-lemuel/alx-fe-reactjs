import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  // Validation function to handle form validation
  const validate = () => {
    let tempErrors = {};

    if (!title) tempErrors.title = 'Title is required.';
    if (!ingredients) tempErrors.ingredients = 'Ingredients are required.';
    else if (ingredients.split('\n').filter(item => item.trim() !== '').length < 2) {
      tempErrors.ingredients = 'Please include at least two ingredients.';
    }
    if (!steps) tempErrors.steps = 'Steps are required.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const ingredientList = ingredients.split('\n').filter(item => item.trim() !== '');
    console.log({ title, ingredients: ingredientList, steps });

    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Add New Recipe</h1>
      {Object.keys(errors).length > 0 && (
        <div className="bg-red-200 text-red-800 p-3 rounded mb-4">
          {Object.keys(errors).map((key, index) => (
            <p key={index}>{errors[key]}</p>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border border-gray-300 rounded-lg p-2 ${errors.title ? 'border-red-500' : ''}`}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-lg font-medium mb-2">Ingredients (one per line)</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="5"
            className={`w-full border border-gray-300 rounded-lg p-2 ${errors.ingredients ? 'border-red-500' : ''}`}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="steps" className="block text-lg font-medium mb-2">Steps</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="5"
            className={`w-full border border-gray-300 rounded-lg p-2 ${errors.steps ? 'border-red-500' : ''}`}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full md:w-auto"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
