import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  dummyIngredient: Ingredient = new Ingredient('Test', 2);
  ingredients: Ingredient[] = [this.dummyIngredient, this.dummyIngredient];

  constructor() {
  }

  ngOnInit() {
  }

}
