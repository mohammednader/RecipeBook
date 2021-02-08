import { Ingredient } from "src/app/shopping-list/ingediant.model";

export class Recipe
{
  public Name: string;
  public Description: string;
  public Image: string;
  public Ingredints: Ingredient[];

constructor(name: string, Desc: string, Image: string, ingredients: Ingredient[])
{
  this.Name = name;
  this.Description = Desc;
  this.Image = Image;
  this.Ingredints = ingredients;
}

}
