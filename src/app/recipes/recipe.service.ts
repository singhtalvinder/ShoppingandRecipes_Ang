import { Recipe} from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test recipe',
         'https://upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg'),

         new Recipe('Second Test Recipe', 'This is test recipe no. 2',
         'https://upload.wikimedia.org/wikipedia/commons/f/f5/Handi-chicken-recipe.jpg')
      ];


      getRecipes() {
          // to use only the copy instead of the original.
          return this.recipes.slice(); 
      }

}