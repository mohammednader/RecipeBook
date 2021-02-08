import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurd } from './auth/auth-gaurd.service';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { StartRecipeComponent } from './recipes/start-recipe/start-recipe.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const routes: Routes = [

  {path: '' , redirectTo: 'Recipes', pathMatch: 'full'},
  {path: 'Recipes' , component: RecipesComponent ,
  children:[
    {path: '' , component: StartRecipeComponent},
    {path: 'new' , component: RecipeEditComponent , canActivate:[AuthGaurd]},
    {path: ':id' , component: RecipeDetailComponent},
    {path: ':id/edit' , component: RecipeEditComponent,canActivate:[AuthGaurd]},

  ]
  },
  {path: 'ShoppingList' , component: ShoppingListComponent,
  children:[
    {path: 'shoppingEdit' , component: ShoppingEditComponent},
  ]},
  {path: 'SignUp' , component: SignupComponent},
  {path: 'SignIn' , component: SignInComponent},
  {path: '**' , component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
