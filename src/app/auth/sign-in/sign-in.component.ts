import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
  }

  OnSubmit(form: NgForm)
  {
    this.authService.SignInUser(form.value.email, form.value.password);
  }

}
