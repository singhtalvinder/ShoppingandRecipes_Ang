import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false; // prop to check if we are edit mode or new.

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    // We need to do this cleanup incase we use our own observables, now Angular will hanlde on its own.
    this.route.params.subscribe( (params: Params) => {
      this.id = +params['id']; // + used to cast it into integer.
      this.editMode = params['id'] != null; // if params['id'] has an id, which will be string, otherwise it will be undefined.
      console.log(this.editMode);
    });
  }

}
