import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/services/Recipe.service';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  // providers: [RecipeService]
})
export class RecipeItemComponent implements OnInit {

  // @Output () SelectedItem= new EventEmitter<void>();
  @Input() recipe: Recipe;
@Input() index: number;
  constructor(private recipeService: RecipeService) { }


  ngOnInit() {
  }

  // OnselectedItem() {
  //   // this.RecipeItem.emit(recipe);

  //   this.recipeService.selectedRecipe.emit(this.recipe);
  // }

}
