import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginform: FormGroup;
  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
    let email = '';
    let password = '';
    this.loginform = new FormGroup({
      'email' : new FormControl(email, Validators.required),
      'password' : new FormControl(password, Validators.required),
    });
  }

  OnSubmit()
  {
    this.authService.SignInUser(this.loginform.value.email , this.loginform.value.password);
  }

}
