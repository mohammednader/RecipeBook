import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/Recipe.service';
import { Recipe } from './recipe-list/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  Selectedrecipe: Recipe;

  constructor(private recipeService: RecipeService) {
    // console.log(this.Selectedrecipe);
  }


  ngOnInit() {
    this.recipeService.GetSelected().subscribe((recipe: Recipe)=>{
      this.Selectedrecipe = recipe;
    });

  }

}
