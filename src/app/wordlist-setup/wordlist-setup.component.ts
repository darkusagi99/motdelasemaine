import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-wordlist-setup',
  standalone: true,
  imports: [
    MatIcon,
    MatFabButton,
    MatCard,
    MatCardHeader,
    MatCardActions,
    MatButton,
    MatCardSubtitle,
    MatCardTitle
  ],
  templateUrl: './wordlist-setup.component.html',
  styleUrl: './wordlist-setup.component.css'
})
export class WordlistSetupComponent {

}
