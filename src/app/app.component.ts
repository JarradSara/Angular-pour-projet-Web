import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lastUpdate = new Date();
  title = 'projetweb5-angular';

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBajlLBjc0sDV1-NvIXiJJ_VzDhY94l3_A',
      authDomain: 'authentification-db829.firebaseapp.com',
      databaseURL: 'https://authentification-db829.firebaseio.com',
      projectId: 'authentification-db829',
      storageBucket: 'authentification-db829.appspot.com',
      messagingSenderId: '869890421199',
      appId: '1:869890421199:web:074843efae422adb8762ba',
      measurementId: 'G-RGF9R476KQ'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

  }

}
