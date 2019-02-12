import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
//import 'rxjs/Rx';////
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
        ) { }

    storeRecipes() {
        const token = this.authService.getToken();
        console.log(`the recipe to write: ${this.recipeService.getRecipes()}`)
         return this.httpClient.put(
            'https://my-recipe-book-314be.firebaseio.com/recipes.json?auth=' + token,
            this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        console.log('Getting recipes from the server db........')
        this.httpClient.get('https://my-recipe-book-314be.firebaseio.com/recipes.json?auth=' + token)
        .subscribe(
            (recipes: Recipe[]) => {     
                console.log('Got some recipes after a get request from server .........')    
                console.log(recipes);
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}

//// Was working  so replace it back if needed....
/*
getRecipes() {
    const token = this.authService.getToken();
    //<Recipe[]>
    console.log('Getting recipes from the server db........')
   this.httpClient.get('https://my-recipe-book-314be.firebaseio.com/recipes.json?auth=' + token)
    .pipe(
        map(
            (recipes: Recipe[]) =>{
                for(let recipe of recipes) {
                    if(!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )
    )  
    .subscribe(
        (recipes: Recipe[]) => {     
            console.log('Got some recipes after a get request from server .........')           
            this.recipeService.setRecipes(recipes);
        }
    );
}
*/