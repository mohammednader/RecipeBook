import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe-list/recipe.model';
import { RecipeService } from './Recipe.service';
import { map } from 'rxjs/operators';
import { AuthServiceService } from '../auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

   token: string;
   recipes: Recipe[];
  constructor(private http: HttpClient, private recipeService: RecipeService, private auth: AuthServiceService) {}

  storeRecipes() {
    return this.http.put('https://recipedb-634d3-default-rtdb.firebaseio.com/recipes.json?auth=' + this.token , this.recipeService.GetAllRecipe());
  }


  getRecipes() {
    this.token = this.auth.getToken();
    this.http.get('https://recipedb-634d3-default-rtdb.firebaseio.com/recipes.json?auth=' + this.token)
      .pipe(
        map((response: Recipe[]) => {
          console.log(response);
          this.recipes = response;
          for (let recipe of this.recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return this.recipes;
        })
      ).subscribe((recipes: Recipe[]) => {
            this.recipeService.setRecipes(recipes);
          });
  }

}
