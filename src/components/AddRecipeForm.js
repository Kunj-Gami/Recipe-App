import React, { useState } from 'react';

const AddRecipeForm = ({ addRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      ingredients: ingredients.split(',').map((item) => item.trim()),
      instructions,
      image,
    };
    addRecipe(newRecipe);
    setTitle('');
    setIngredients('');
    setInstructions('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8 animate__animated animate__fadeIn">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">Add Your Own Recipe</h2>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full p-2 mb-4 bg-gray-700 text-white rounded"
        required
      />
      <input
        type="text"
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="block w-full p-2 mb-4 bg-gray-700 text-white rounded"
        required
      />
      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        className="block w-full p-2 mb-4 bg-gray-700 text-white rounded"
        required
      />
      <input
        type="url"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="block w-full p-2 mb-4 bg-gray-700 text-white rounded"
        required
      />
      <button type="submit" className="bg-yellow-400 w-[100%] text-gray-900 px-4 py-2 rounded hover:bg-yellow-500 transition duration-300">Add Now</button>
    </form>
  );
};

export default AddRecipeForm;
