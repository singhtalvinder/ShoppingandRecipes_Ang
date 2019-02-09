import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';
  title = 'ShoppingListAndRecipes';
  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyB76yKT-D5ByMpyJbE1b-R2SzQ1Wh_jAF0",
      authDomain: "my-recipe-book-314be.firebaseapp.com"
    });
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

}
