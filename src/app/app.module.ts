import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
//import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,

   ],
   // Note: We must not declare components, directives and pipes in more than 1 module.
  imports: [
    BrowserModule, // contains the commonModules + other browser specific ones.Main app module should use this.
    //HttpModule,
   // RecipesModule, -- dont load it everytime on start, make it a lazy load, ie, load only when needed.
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule    
  ],
  providers: [ShoppingListService, RecipeService], // having recipeservice here means we have 1-service that
  //  is handling all the components here viz: Recipe and ShoppingList, so that editing/adding to one
  //  doesnot lead to issues.
  bootstrap: [AppComponent]
})
export class AppModule { }
