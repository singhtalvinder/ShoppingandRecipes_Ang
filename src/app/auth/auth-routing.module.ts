import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// TODO: Add these components later !! 
const authRoutes: Routes = [
   // {path: 'signup', component: SignupComponent},
   // {path: 'signin', component: SigninComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule {}