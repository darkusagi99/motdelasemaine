import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";

//import {WORDLISTS} from "../mock-wordlist";
import {NgForOf} from "@angular/common";
import {Wordlist} from "../wordlist";

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
    MatCardTitle,
    NgForOf
  ],
  templateUrl: './wordlist-setup.component.html',
  styleUrl: './wordlist-setup.component.css'
})
export class WordlistSetupComponent {
  wordlists : Wordlist[] = [];

  ngOnInit() : void {
    const wordlist1 = new Wordlist("Liste 1");
    const wordlist2 = new Wordlist("Liste 2");
    const wordlist3 = new Wordlist("Liste 3");
    const wordlist4 = new Wordlist("Liste 4");
    this.wordlists.push(wordlist1, wordlist2, wordlist3, wordlist4);
  }

}
