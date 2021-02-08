import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { IsOpen } from './appShared/IsOpen.directive';
import { IsShow } from './appShared/IsShow.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RecipeService} from './services/Recipe.service';
import { ShoppingService } from './services/Shopping.service';
import { ErrorComponent } from './error/error.component';
import { StartRecipeComponent } from './recipes/start-recipe/start-recipe.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SignupComponent } from './auth/signup/signup.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthServiceService } from './auth/auth-service.service';
import { DataStorageService } from './services/data-storage.service';
import { AuthGaurd } from './auth/auth-gaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesComponent,
    IsOpen,
    IsShow,
    ErrorComponent,
    StartRecipeComponent,
    RecipeEditComponent,
    SignupComponent,
    SignInComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule

  ],
  providers: [RecipeService, ShoppingService, DataStorageService, AuthServiceService, AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
