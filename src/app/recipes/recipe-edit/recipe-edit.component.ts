import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  // gives continues access to form
  @ViewChild('f') editRecipe: NgForm;
  name: string;

  constructor() { }

  ngOnInit(): void {

  }

  //method using form #f
  /**
   * This uses ngModel and control name=""
   * to retrieve data on the recipe object
   * @param form
   */
  onSubmit(form: NgForm) {
    console.log(form);
    this.name = form.value.name;
  }


  //method using @ViewChild()
  /*
  onSubmit() {
    console.log(this.editRecipe);
    this.isSaved = true;
  }
  */
}
