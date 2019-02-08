import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        // Todo: Add both of these later !! 
       // SigninComponent,
       //SignupComponent
    ],
    imports: [
        FormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule{}