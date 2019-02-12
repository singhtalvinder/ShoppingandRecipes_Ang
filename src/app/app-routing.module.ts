import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

// dynamic parameters should be the last ones.
const appRoutes : Routes = [
    // added a home route for '' ,instead of having it redirected to '/recipes'
    //{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    // // lazy loading. for recipes.
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
                                          //, canLoad: [AuthGuard]}, //Protecting lazy loaded routes
                                          // provided  AuthGuard implements CanLoad interface!!
    { path: 'shopping-list',  component: ShoppingListComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent}
];

@NgModule({                                   //Preloading is used to do lazyloading but in a pre load manner.
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {
// NOTE: For ourting its not important that you declare the component in the 
//       same file as the routes live.It's just important that you just declare these 
//       anywhere in your application before you get a change of visiting the route, which
//       inlcudes before a link to that route get rendered somewhere(which presents a chance
//       of going there, may be !! ).
//       But its different for a selector:
//       For a selected you need to declare it in the module  where you plan to use this selector 
//       or, you need to import another module that exports this selector
}