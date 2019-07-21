import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
  @Output() IngredientAdded=new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const ingname=this.nameInputRef.nativeElement.vlaue;
    const ingamount=this.amountInputRef.nativeElement.vlaue;
    const newIngredient=new Ingredient(ingname,ingamount);
    this.IngredientAdded.emit(newIngredient);
  }
}
