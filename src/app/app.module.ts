import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
   // Note: We must not declare components, directives and pipes in more than 1 module.
  imports: [
    BrowserModule, // contains the commonModules + other browser specific ones.Main app module should use this.
    //HttpModule,
   // RecipesModule, -- dont load it everytime on start, make it a lazy load, ie, load only when needed.
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule    
  ],
  providers: [ShoppingListService, RecipeService], // having recipeservice here means we have 1-service that
  //  is handling all the components here viz: Recipe and ShoppingList, so that editing/adding to one
  //  doesnot lead to issues.
  bootstrap: [AppComponent]
})
export class AppModule { }
