import { EventEmitter, Injectable, Output } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
// import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Subject } from "rxjs";
import { Recipe } from "../recipes/recipe-list/recipe.model";
import { Ingredient } from "../shopping-list/ingediant.model";
import { ShoppingService } from "./Shopping.service";

@Injectable()
export class RecipeService {

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Access-Control-Allow-Credentials' : 'true',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
  //     'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  //   })
  // };

  changedRecipe = new Subject<Recipe[]>();
  selectedRecipe  = new EventEmitter<Recipe>();

  private Recipes: Recipe [] = [
    new Recipe('new recipes pasta 1 ','Pho Bo Soup (Vietnamese Beef Noodle Soup)‏','https://www.thespruceeats.com/thmb/G7Scmv34y6p4i7h2RvHtAHQn-NQ=/700x500/filters:fill(auto,1)/cdn.cliqueinc.com__cache__posts__269930__comfort-in-an-instant-cookbook-recipes-269930-1539295160608-main.700x0c-cabc20cd59254a0ab09c1fe6790b9d73.jpg',[new Ingredient("Meat",2),new Ingredient("Pasta",1)]),
    new Recipe('new recipes pasta 2','Pho Bo Soup (Vietnamese Beef Noodle Soup)','https://blog.thermoworks.com/wp-content/uploads/2020/01/Chicken_Potatoes_Compressed-59.jpg',[new Ingredient("Meat",1),new Ingredient("Pasta",5)])

  ];

  private PublishData: [] = [];
  private ingredients: Ingredient[];

  /**
   *
   */
  constructor(private shoppingService: ShoppingService, private firestore: AngularFirestore) {


  }
  GetAllRecipe()
  {
    return this.Recipes.slice();
  }

  GetSelected(){
    return this.selectedRecipe;
  }

  AddIngredientTospicificShoppting(ingredients: Ingredient[]){
    this.shoppingService.AddIngredientsToShoppingList(ingredients);
  }

  GetRecipeById(id: number){
    return this.Recipes.slice()[id];
  }

  updateRecipe(index: number , recipe: Recipe)
  {
    this.Recipes[index] = recipe;
    this.changedRecipe.next(this.Recipes.slice());
  }

  AddRecipe(recipe: Recipe)
  {
    this.Recipes.push(recipe);
    this.changedRecipe.next(this.Recipes.slice());

  }
  DeleteRecipe(index: number){
  this.Recipes.splice(index, 1);
  this.changedRecipe.next(this.Recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.Recipes = recipes;
    this.changedRecipe.next(this.Recipes.slice());
  }
  // const baseUrl="gs://recipedb-634d3.appspot.com/Recipes/recipe.json";

  // SaveDate()
  // {
  //   return this.http.post(this.baseUrl, this.Recipes , this.httpOptions);
  // }

  // SaveDate() {
  //   // return new Promise<any>((resolve, reject) =>{
  //     for (const item of this.Recipes) {

  //       // item.Ingredints.forEach(element => {
  //       //   this.firestore.collection('Ingredient').add(
  //       //     {
  //       //       name: element.name,
  //       //       amount: element.amount
  //       //     }
  //       //   )
  //       //   });

  //       this.firestore.collection('recipes').add({
  //         Name : item.Name,
  //         Description: item.Description,
  //         Image: item.Image,
  //         // Ingredints: item.Ingredints
  //     }) .then(res => {
  //       console.log(res);

  //       // this.form.reset();
  //   })
  //   .catch(e => {
  //       console.log(e);
  //   });
  //   //   }
  //   // });

  //       }
  //     }

  //     GetData()
  //     {


  //       this.firestore
  //                .collection('recipes')
  //                .get()
  //                .subscribe((ss) => {
  //                   ss.docs.forEach((doc) => {
  //                     const customObject = new Recipe(doc.data().Name, doc.data().Description,doc.data().Image,[]);
  //                     customObject.Ingredints = [new Ingredient("Pasta",5)];
  //                     this.Recipes.push(customObject);

  //                   });
  //                   this.changedRecipe.next(this.Recipes.slice());

  //                 });
  //     }

}
