import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 isAuth: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
	firebase.auth().onAuthStateChanged(
		(user) => {
			if(user){
				this.isAuth = true;
				
			} else {
				this.isAuth = false ;
			}
		}
	);
  }

	onsignOut(){
		this.authService.signOutUser();
	}

}
