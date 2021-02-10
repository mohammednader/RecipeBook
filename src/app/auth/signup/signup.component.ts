import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform: FormGroup;
  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
    let email = '';
    let password = '';
    this.signupform = new FormGroup({
      'email' : new FormControl(email, Validators.required),
      'password' : new FormControl(password, Validators.required),
    });
  }

  OnSubmit()
  {
    this.authService.SignUpUser(this.signupform.value.email, this.signupform.value.password);
  }

}
