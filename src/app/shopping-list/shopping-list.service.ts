import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


export class ShoppingListService {
  IngredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] =[
    new Ingredient('Apples', 5),
    new Ingredient ('Tomatoes', 10),
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.IngredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.IngredientsChanged.emit(this.ingredients.slice());
  }
}
