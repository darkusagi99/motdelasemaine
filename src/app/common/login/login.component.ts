import {Component, inject} from '@angular/core';
import firebase from "firebase/compat";
import Firestore = firebase.firestore.Firestore;
import {Auth, signInWithPopup} from "@angular/fire/auth";
import { GoogleAuthProvider } from "firebase/auth"
import {NgForOf, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
//import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
//import {AngularFireAuth} from "@angular/fire/compat/auth";
//import firebase from "firebase/compat";
//import auth = firebase.auth;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatIcon,
    MatOption,
    MatSelect,
    NgForOf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private auth: Auth
  ) { }

  loginWithGoogle() {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(this.auth, googleProvider)
      .then(googleResponse => {
        // Successfully logged in
        console.log(googleResponse);
        // Add your logic here

      }).catch(err => {
      // Login error
      console.log(err);
    });
  }

  logout() {
    this.auth.signOut();
  }

  displayConnectedUser() {
    return this.auth.currentUser?.email ?? ""
  }

  isLogged() {
    return !!this.auth.currentUser;

    //return (this.auth.currentUser !== undefined)
  }

}
