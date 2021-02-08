import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
  }

  OnSubmit(form: NgForm)
  {

    this.authService.SignUpUser(form.value.email, form.value.password);
  }

}
