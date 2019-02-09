// Authentication service for sign-in or register users. 
// This is currently using firebase and its sdk for these operations.
// Would be different for other db or other kind of implementation.

import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

// Allow injection of other services into this.
@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) { }

    signupUser(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(error => console.log(error))
    }

    // Sign-in user.
    signinUser(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response =>{
                // navigate to root page on successful login.
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken()
                .then( (receivedToken: string ) =>  this.token = receivedToken       
                )

            }
        )
        .catch(
            error => console.log(error)
        );
    }

    //Logout user.
    logout() {
        firebase.auth().signOut();
        this.token = null;
    }

    // get authentication token.
    getToken() {
        firebase.auth().currentUser.getIdToken()
        .then((receivedToken: string) => this.token = receivedToken);
        return this.token;
    }
    
    // Is user authenticated.
    isAuthenticated() {
        return this.token != null;
    }

}

