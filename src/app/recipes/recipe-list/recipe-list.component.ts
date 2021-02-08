import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/Recipe.service';
import {Recipe} from './recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  // providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {

  Recipes: Recipe [] ;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {


    this.recipeService.changedRecipe.subscribe((recipes) => {
       this.Recipes = recipes;
    });

    this.Recipes = this.recipeService.GetAllRecipe();
  }
  AddNewRecipe()
  {
    this.router.navigate(['new'], { relativeTo: this.route});
  }

}
