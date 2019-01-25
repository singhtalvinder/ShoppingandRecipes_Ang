import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{
    // use subject instead of event emitter
    //ingredientsChanged = new EventEmitter<Ingredient[]> ();
    ingredientsChanged = new Subject<Ingredient[]> ();
    startedEditing = new Subject<number>();

    private ingredients : Ingredient[] = [ 
        new Ingredient('Apples', 5),
        new Ingredient('Mangoes', 10)
    ];

    getIngredients() {
        // share a copy only.
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingredient[]) {
        // for(let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        
        // better approach -add all ingredients in single cmd and then emit.
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
        
    }

    updateIngedient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}