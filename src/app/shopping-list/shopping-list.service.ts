
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';


export class ShoppingListService {
  IngredientsChanged = new Subject<Ingredient[]>();
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
    this.IngredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.IngredientsChanged.next(this.ingredients.slice());
  }
}
