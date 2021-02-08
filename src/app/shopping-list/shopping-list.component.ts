import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingService } from '../services/Shopping.service';
import {Ingredient} from './ingediant.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  private subscription: Subscription;
  Ingredients: Ingredient[] = [];
  constructor(private shoppingServive: ShoppingService) {
   }

  ngOnInit() {




   this.Ingredients = this.shoppingServive.GetAllIngredient();
   this.subscription =  this.shoppingServive.Ingredientchanged.subscribe((ingredents: Ingredient[])=>{
      this.Ingredients = ingredents;
  });
  }

ngOnDestroy(){
  this.subscription.unsubscribe();
}

EditIngredient(index: number)
{
 this.shoppingServive.SelectedChanged.next(index);
}

}
