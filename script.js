document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('add-recipe-form');
    const recipeList = document.getElementById('recipes');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const recipeName = document.getElementById('recipe-name').value;
      const ingredients = document.getElementById('ingredients').value;
  
      if (recipeName && ingredients) {
        const recipeItem = document.createElement('li');
        recipeItem.innerHTML = `
          <strong>${recipeName}</strong>
          <br>
          <em>Ingredients:</em>
          <p>${ingredients}</p>
        `;
        recipeList.appendChild(recipeItem);
        
        form.reset();
      } else {
        alert('Please fill out all fields');
      }
    });
  });
  