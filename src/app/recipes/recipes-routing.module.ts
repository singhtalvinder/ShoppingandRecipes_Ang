import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';


//Recipes related routes.
const recipesRoutes: Routes = [
    { path: '',  component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent},
        { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
        { path: ':id', component: RecipeDetailComponent},
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},
    ]}    
];


@NgModule({
    imports: [
        // Must registry only as child in any module(as we ar enot at root anymore in the child modules) other
        // than app module(where it is : root).
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule] ,
    providers: [
        AuthGuard
    ]
})

export class RecipesRoutingModule{

}