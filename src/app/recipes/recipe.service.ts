import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
            'Yummy Chicken', 
            'This is Handi Chicken recipe',
            '//upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg',
            [
                new Ingredient('Chicken', 100),
                new Ingredient('Onions', 10),
                new Ingredient('Tomato sauce', 10),
                new Ingredient('Spices', 25)
            ]),

         new Recipe(
             'Tasty Spaghetti', 
             'This is spaghetti recipe',
             '//pixnio.com/free-images/2017/03/25/2017-03-25-09-34-43-725x483.jpg',
             [
                new Ingredient('Spaghetti', 125),
                new Ingredient('Spices', 15),
                new Ingredient('Wheat Flour', 25),
                new Ingredient('Eggs', 3),
                new Ingredient('Cheese', 2)
            ])
    ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        // to use only the copy instead of the original.
        return this.recipes.slice(); 
    }

    getRecipe(index: number) {
        return this.recipes.slice()[index] ;// get a copy of the array.

    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);

    }

}