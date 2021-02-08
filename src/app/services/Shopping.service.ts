import { Subject } from "rxjs";
import { Ingredient } from "../shopping-list/ingediant.model";


export class ShoppingService
{
 private Ingredients: Ingredient[] = [new Ingredient('Apple',5),new Ingredient('Tomatos',10)];

  Ingredientchanged = new Subject<Ingredient[]>();
  SelectedChanged = new Subject<number>();

  /**
   *
   */
  GetIngredientById(index: number){
    return this.Ingredients[index];
  }

  GetAllIngredient(){
    return this.Ingredients.slice();
  }

  AddingNewIngredent(ingredent: Ingredient)
  {
    this.Ingredients.push(ingredent);
    this.Ingredientchanged.next(this.Ingredients.slice());
  }

  AddIngredientsToShoppingList(ingredients: Ingredient[])
  {
    this.Ingredients.push(...ingredients);
    this.Ingredientchanged.next(this.Ingredients.slice());
  }

  EditIngredientbyIndex(index: number,ingrident: Ingredient)
  {
    this.Ingredients[index] = ingrident;
    this.Ingredientchanged.next(this.Ingredients.slice());
  }
  DeleteIngredientIndex(index: number){
        this.Ingredients.splice(index);
        this.Ingredientchanged.next(this.Ingredients.slice());

  }

}
