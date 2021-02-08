import { Component, ElementRef, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingService } from 'src/app/services/Shopping.service';

import { Ingredient } from '../ingediant.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f' , {static: false}) form: NgForm;
  editMode = false;
  selectedEditIndex: number;
  Ingredint: Ingredient;

  // @ViewChild('Name' , {static: false}) nameElementRef: ElementRef;
  // @ViewChild('Amount', {static: false}) AmountElementRef: ElementRef;
  // @Output() newIngredent = new EventEmitter<Ingredient>();
  constructor(private shoppingService: ShoppingService ) { }

  ngOnInit() {
    this.shoppingService.SelectedChanged.subscribe((index)=>{
      this.editMode = true;
      this.selectedEditIndex = index;
      this.Ingredint = this.shoppingService.GetIngredientById(index);

      this.form.setValue({
        name : this.Ingredint.name,
        amount: this.Ingredint.amount
      });

    });
  }

  OnSubmit(form: NgForm)
  {
    // console.log(form);
    // var name= this.nameElementRef.nativeElement.value;
    // var Amount= this.AmountElementRef.nativeElement.value;
    let newIngrendient = new Ingredient(form.value.name , form.value.amount);
    // this.newIngredent.emit(newIngrendient);
    if(this.editMode)
    {
      this.shoppingService.EditIngredientbyIndex(this.selectedEditIndex, newIngrendient);
    }
    else
    {
      this.shoppingService.AddingNewIngredent(newIngrendient);
    }
    this.editMode = false;
    this.form.reset();
  }
  onClear()
  {
       this.form.reset();
       this.editMode = false;
  }
  onDelete(){
this.shoppingService.DeleteIngredientIndex(this.selectedEditIndex);
  }
}
