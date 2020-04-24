import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {AuthService} from '../../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

	signUpForm: FormGroup;
	errorMessage:string;

  constructor(private formBuilder: FormBuilder,
				private authService: AuthService,
				private router : Router) { }

  ngOnInit() {
	this.initForm(); 
  }

	initForm(){
		this.signUpForm = this.formBuilder.group( {
			email: ['',[ Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.pattern('/[0-9a-zA-Z]{6,}/')]]
		}); 
		
		
	}
	
	 onSubmit() {
		console.log('signUpForm' , this.signUpForm.value);
		
		const email = this.signUpForm.get('email').value;
		const password = this.signUpForm.get('password').value;
		this.authService.createNewUser(email, password).then(
			  () =>  {	this.router.navigate( ['/create-book']); },
			 (error) => { this.errorMessage = error; }
		);
	} 
	
	get email() { return this.signUpForm.get('email'); }
	get password() { return this.signUpForm.get('password');}

}
