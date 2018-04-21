import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  dummyRecipe: Recipe = new Recipe('Test Recipe',
    'this is a test',
    'https://c.pxhere.com/images/27/a9/a14aa7cd465889e332c6f4b9336c-1418589.jpg!d');

  recipes: Recipe[] = [this.dummyRecipe, this.dummyRecipe];

  constructor() {
  }

  ngOnInit() {
  }

}
