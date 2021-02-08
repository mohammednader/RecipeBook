import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/Recipe.service';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
selected: Recipe;
id: number;


// expand:boolean =false;
  constructor(private recipeService: RecipeService, private router: ActivatedRoute,private route: Router) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) =>{
     this.id = +params['id'];
     this.selected = this.recipeService.GetRecipeById(this.id);
    });
  }

  // toggleExpand(){
  //   this.expand = !this.expand;
  // }

  AddIngedient()
  {
     this.recipeService.AddIngredientTospicificShoppting(this.selected.Ingredints);
  }

  EditRecipe()
  {
    this.route.navigate(['edit'], {relativeTo: this.router});
    //  this.route.navigate(['../', this.id , 'edit'], {relativeTo: this.router});

  }
  DeleteRecipe()
  {
    this.recipeService.DeleteRecipe(this.id);
    this.route.navigate(['Recipes']);
  }
}
