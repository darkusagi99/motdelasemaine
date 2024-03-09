import {Component} from '@angular/core';

import {Auth, signInWithPopup} from "@angular/fire/auth";
import { GoogleAuthProvider } from "firebase/auth"
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {TextToSpeechService} from "../text-to-speech.service";
import {WordlistService} from "../wordlist.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatIcon,
    MatOption,
    MatSelect
  ],
  templateUrl: './login.component.html',
  styleUrl: '../common.css'
})
export class LoginComponent {
  private ttsService: TextToSpeechService;
  private wordService : WordlistService;

  constructor(
    private auth: Auth,
    ttsService : TextToSpeechService,
    wordService : WordlistService
  ) {
    this.ttsService = ttsService
    this.wordService = wordService
  }

  loginWithGoogle() {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(this.auth, googleProvider)
      .then(googleResponse => {
        // Successfully logged in
        console.log(googleResponse);
        // Add your logic here
        this.ttsService.loadCloudData();
        this.wordService.loadCloudData();

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

  }

}
