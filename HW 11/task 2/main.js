let divRecipes = document.getElementById('recipes');
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipesObject => {
        let {recipes} = recipesObject;

        let div = document.createElement('div');
        div.classList.add('div-container');

        for (const recipe of recipes) {
            let divElement = document.createElement('div');
            divElement.classList.add('recipe-container');
            let nameOfRecipe = document.createElement('p');
            nameOfRecipe.innerText = `"name": ${recipe.name}`;
            let image = document.createElement('img');
            image.src = recipe.image;
            let recipeInfo = document.createElement('div');
            recipeInfo.innerText = `  
             "prepTimeMinutes": ${recipe.prepTimeMinutes},
             "cookTimeMinutes": ${recipe.cookTimeMinutes},
             "servings": ${recipe.servings},
             "difficulty": ${recipe.difficulty},
             "cuisine": ${recipe.cuisine},
             "caloriesPerServing": ${recipe.caloriesPerServing},
             "tags": ${recipe.tags},
             "userId": ${recipe.userId},
             "rating": ${recipe.rating},
             "reviewCount": ${recipe.reviewCount},
             "mealType": ${recipe.mealType}`

            let ingredientsInfo = document.createElement('p');
            ingredientsInfo.innerText = ` "ingredients":`
            let olIngr = document.createElement('ol');
            for (const ingredient of recipe.ingredients) {
                let allIngredients = document.createElement('li');
                allIngredients.innerText = ingredient;
                olIngr.appendChild(allIngredients);
            }

            let instructionsInfo = document.createElement('p');
            instructionsInfo.innerText = ` "instruction":`
            let olInstr = document.createElement('ol');
            for (const instruction of recipe.instructions) {
                let allInstructions = document.createElement('li');
                allInstructions.innerText = instruction;
                olInstr.appendChild(allInstructions);
            }
            divElement.append(nameOfRecipe, image, recipeInfo, ingredientsInfo, olIngr, instructionsInfo, olInstr);
            divRecipes.appendChild(divElement);
        }
    });