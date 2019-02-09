import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
//import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { Response } from '@angular/http';

import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService
        ) {

        }

    storeRecipes() {
        const token = this.authService.getToken();
         return this.httpClient.put(
            'https://https://my-recipe-book-314be.firebaseio.com/recipes.json?auth=' + token,
            this.recipeService.getRecipes());
    }
/* TODO: Fix the map issue ------*/
    getRecipes() {
        const token = this.authService.getToken();
        //<Recipe[]>
       this.httpClient.get('https://my-recipe-book-314be.firebaseio.com/recipes.json?auth=' + token)
        /*.pipe(
            map ( (response: Response) => {
            const recipes: Recipe[] = response;//.json();
            
            for(let recipe of recipes) {
                if(!recipe['ingredients']) {
                    // If no ingredients fetched from a recipe, add  an empty ingredients 
                    // property(justto maintain the structure) to be in sync with others.
                    console.log(recipe);

                    recipe['ingredients'] = [];
                }
            }
            return recipes;
          })
        )  */    
        .subscribe(
            (recipes: Recipe[]) => {                
                this.recipeService.setRecipes(recipes);
            }
        );
    }
    /*
    getRecipes() {
        //const token = this.authService.getToken();
        //this.httpClient.get<Recipe[]>('https://my-recipe-book-314be.firebaseio.com/recipes.json?auth=' + token)
        
        this.httpClient.get<Recipe[]>('https://my-recipe-book-314be.firebaseio.com/recipes.json')
        .map(
            (recipes) =>{
                for(let recipe of recipes) {
                    if(!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            recipes: Recipe[]) => {

            }
        )

    }*/
 
}
