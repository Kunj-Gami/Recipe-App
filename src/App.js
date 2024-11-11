import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';

const initialRecipes = [
  {
    title: 'Dhokla',
    ingredients: ['Chickpea flour', 'Yogurt', 'Mustard seeds', 'Turmeric', 'Coriander'],
    instructions: 'Mix chickpea flour, yogurt, and water. Add turmeric and mustard seeds. Steam the batter until cooked and garnish with coriander.',
    image: 'https://www.goanobserver.in/wp-content/uploads/2018/10/dhokla-825x510.jpg',
  },
  {
    title: 'Khandvi',
    ingredients: ['Chickpea flour', 'Yogurt', 'Turmeric', 'Spices', 'Coconut'],
    instructions: 'Make a smooth batter of chickpea flour and yogurt. Cook until thick, spread on a flat surface, and roll into thin strips. Garnish with coconut.',
    image: 'https://i0.wp.com/bhavnaskitchen.com/wp-content/uploads/2016/02/KhandviPressureCooker-copy.jpg?fit=1200%2C828&ssl=1',
  },
  {
    title: 'Undhiyu',
    ingredients: ['Mixed vegetables', 'Surti papdi', 'Eggplant', 'Spices', 'Peanuts'],
    instructions: 'Mix vegetables with spices and cook in a pot with water until tender. Garnish with peanuts and serve hot.',
    image: 'https://www.bitensip.com/wp-content/uploads/2022/12/kathiyawadi-undhiyu.jpg',
  },
  {
    title: 'Thepla',
    ingredients: ['Whole wheat flour', 'Fenugreek leaves', 'Yogurt', 'Spices', 'Oil'],
    instructions: 'Knead dough with flour, fenugreek, yogurt, and spices. Roll into thin circles and cook on a skillet with oil.',
    image: 'https://c.ndtvimg.com/2020-11/caho1u28_thepla_625x300_18_November_20.jpg',
  },
  {
    title: 'Kadhi',
    ingredients: ['Yogurt', 'Chickpea flour', 'Spices', 'Coriander', 'Rice'],
    instructions: 'Mix yogurt and chickpea flour with water. Cook with spices until thick. Serve hot with rice.',
    image: 'https://static.toiimg.com/thumb/92950871.cms?imgsize=68608&width=800&height=800',
  },
  {
    title: 'Shrikhand',
    ingredients: ['Yogurt', 'Sugar', 'Saffron', 'Cardamom', 'Nuts'],
    instructions: 'Strain yogurt to make it thick. Mix with sugar, saffron, and cardamom. Garnish with nuts.',
    image: 'https://img-global.cpcdn.com/recipes/ffdeb4687ab4de23/680x482cq70/mango-shrikhand-aamrakhand-recipe-main-photo.jpg',
  },
  {
    title: 'Bhakri',
    ingredients: ['Whole wheat flour', 'Millet flour', 'Water', 'Salt', 'Ghee'],
    instructions: 'Knead flour with water and salt. Roll into thick circles and cook on a skillet with ghee.',
    image: 'https://i0.wp.com/myvegetarianroots.com/wp-content/uploads/2020/03/DSC_0022-1.jpeg?fit=1920%2C1204&ssl=1',
  },
  {
    title: 'Fafda',
    ingredients: ['Chickpea flour', 'Carom seeds', 'Turmeric', 'Salt', 'Oil'],
    instructions: 'Make a dough with chickpea flour and spices. Roll out and fry until crispy.',
    image: 'https://www.chefajaychopra.com/assets/img/recipe/1-1688725339gujrati-fafda-recipejpg.jpg',
  },
  {
    title: 'Sev Usal',
    ingredients: ['Sprouts', 'Onions', 'Tomatoes', 'Spices', 'Sev'],
    instructions: 'Cook sprouts with onions and spices. Serve topped with sev.',
    image: 'https://i0.wp.com/cupspoonandspatula.com/wp-content/uploads/2021/01/Sev-Usal-All.jpg?fit=2048%2C1365&ssl=1',
  },
];


function App() {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [searchTerm, setSearchTerm] = useState('');

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold text-yellow-400 text-center mb-8 animate__animated animate__fadeIn">GUJARTI DELIGHT</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AddRecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()))} />
    </div>
  );
}

export default App;
