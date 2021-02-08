import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/Recipe.service';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  id: number;
  editMode = false;
  recipeForm: FormGroup;

  subscription: Subscription;

  constructor(private router: ActivatedRoute, private recipeService: RecipeService, private route:Router) { }

  ngOnInit() {

   this.subscription = this.router.params.subscribe((_params) =>{
      this.id = + _params['id'];
      this.editMode = _params['id'] != null;
      this.InitForm();
      // console.log("this.editMode"+this.editMode);
    });
  }

  AddIngredient()
  {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/) ])
      })
    );
  }

  DeleteIngredient(index: number)
  {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);

  }

  onSubmit()
  {
   const formmodel = new Recipe(this.recipeForm.value['name'],this.recipeForm.value['description'],this.recipeForm.value['imagePath'],this.recipeForm.value['ingredients']);
    if(this.editMode)
    {
       this.recipeService.updateRecipe(this.id, formmodel);
    }
    else
    {
      this.recipeService.AddRecipe(formmodel);
    }
    this.onCancel();
  }

 private InitForm()
{
    let name = '';
    let description = '';
    let imagePath = '';
    let ingredients = new FormArray([]);
    if (this.editMode) {

      let selectedRecipe = this.recipeService.GetRecipeById(this.id);
      name = selectedRecipe.Name;
      imagePath = selectedRecipe.Image;
      description = selectedRecipe.Description;
      if (selectedRecipe.Ingredints)
      {
        for (const item of selectedRecipe.Ingredints) {
          ingredients.push(new FormGroup({
            'name': new FormControl(item.name, Validators.required),
            'amount': new FormControl(item.amount,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/) ])
          }));
        }

      }

    }


    this.recipeForm = new FormGroup({
      'name' : new FormControl(name, Validators.required),
      'imagePath' : new FormControl(imagePath, Validators.required),
      'description': new FormControl(description , Validators.required),
      'ingredients': ingredients
    });
  }

onCancel()
{
  this.route.navigate(['../'],{relativeTo:this.router});
}
ngOnDestroy(){
  this.subscription.unsubscribe();
}

}
