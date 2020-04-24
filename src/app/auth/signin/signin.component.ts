import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {AuthService} from '../../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

	signInForm: FormGroup;
	errorMessage:string;

  constructor(private formBuilder: FormBuilder,
			  private authService: AuthService,
			 private router : Router) { }

  ngOnInit() {
	 this.initForm(); 
  }

	initForm(){
		  this.signInForm = this.formBuilder.group({
			email: ['',[ Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.pattern('/[0-9a-zA-Z]{6,}/')]]
		}); 
		
						
	}
	
	 onSubmit() {
		
  console.log('signInForm' , this.signInForm.value);

		const email = this.signInForm.get('email').value;
		const password = this.signInForm.get('password').value;
		this.authService.signInUser(email, password).then(
					() => {	this.router.navigate( ['/create-book']); },
					(error) => {this.errorMessage = error; }
		);
}

get email() { return this.signInForm.get('email'); }
get password() { return this.signInForm.get('password');}
		
		
		
}
