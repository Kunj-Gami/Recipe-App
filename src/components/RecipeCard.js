import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 p-6 mb-6 animate__animated animate__fadeIn">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
      <h3 className="text-2xl font-bold text-yellow-400 mb-2">{recipe.title}</h3>
      <h4 className="text-xl text-yellow-300 mb-2">Ingredients:</h4>
      <ul className="mt-2 text-gray-300 list-disc ml-5">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4 className="text-xl text-yellow-300 mb-2 mt-4">Instructions:</h4>
      <p className="text-gray-400">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeCard;
