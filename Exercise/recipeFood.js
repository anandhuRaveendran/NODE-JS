const predefinedRecipes = [
    { name: "Spaghetti Bolognese", ingredients: ["spaghetti", "meat", "tomato sauce"], prepTime: 30, complexity: 2, ratings: [] },
    { name: "Chicken Salad", ingredients: ["chicken", "lettuce", "tomato", "cucumber"], prepTime: 15, complexity: 1, ratings: [] },
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const ingredientForm = document.getElementById('ingredient-form');
    const recipeList = document.getElementById('recipe-list');
    const favoriteList = document.getElementById('favorite-list');
    const addRecipeForm = document.getElementById('add-recipe-form');
  
    let favoriteRecipes = JSON.parse(localStorage.getItem('favorites')) || [];
  
    const saveFavorites = () => {
      localStorage.setItem('favorites', JSON.stringify(favoriteRecipes));
    };
  
    const displayRecipes = (recipes) => {
      recipeList.innerHTML = '';
      recipes.forEach(recipe => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>${recipe.name}</strong><br>
          Ingredients: ${recipe.ingredients.join(', ')}<br>
          Prep Time: ${recipe.prepTime} minutes<br>
          Complexity: ${recipe.complexity}<br>
          Rating: ${calculateAverageRating(recipe.ratings)}<br>
          <button onclick="addToFavorites('${recipe.name}')">Add to Favorites</button>
        `;
        recipeList.appendChild(li);
      });
    };
  
    const displayFavorites = () => {
      favoriteList.innerHTML = '';
      favoriteRecipes.forEach(recipe => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>${recipe.name}</strong><br>
          <button onclick="removeFromFavorites('${recipe.name}')">Remove from Favorites</button>
        `;
        favoriteList.appendChild(li);
      });
    };
  
    ingredientForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const ingredients = document.getElementById('ingredients').value.split(',').map(ing => ing.trim().toLowerCase());
      const filteredRecipes = predefinedRecipes.filter(recipe => ingredients.every(ing => recipe.ingredients.includes(ing)));
      displayRecipes(filteredRecipes);
    });
  
    addRecipeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('recipe-name').value;
      const ingredients = document.getElementById('recipe-ingredients').value.split(',').map(ing => ing.trim().toLowerCase());
      const prepTime = parseInt(document.getElementById('preparation-time').value);
      const complexity = parseInt(document.getElementById('complexity').value);
      predefinedRecipes.push({ name, ingredients, prepTime, complexity, ratings: [] });
      alert('Recipe added successfully!');
    });
  
    window.addToFavorites = (name) => {
      const recipe = predefinedRecipes.find(r => r.name === name);
      if (!favoriteRecipes.some(r => r.name === name)) {
        favoriteRecipes.push(recipe);
        saveFavorites();
        displayFavorites();
      }
    };
  
    window.removeFromFavorites = (name) => {
      favoriteRecipes = favoriteRecipes.filter(r => r.name !== name);
      saveFavorites();
      displayFavorites();
    };
  
    const calculateAverageRating = (ratings) => {
      if (ratings.length === 0) return "No ratings yet";
      const sum = ratings.reduce((a, b) => a + b, 0);
      return (sum / ratings.length).toFixed(2);
    };
  
    displayFavorites();
  });
  