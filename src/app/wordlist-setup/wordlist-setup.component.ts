import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";

//import {WORDLISTS} from "../mock-wordlist";
import {NgForOf} from "@angular/common";
import {Wordlist} from "../wordlist";
import {WordlistService} from "../common/wordlist.service";

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

  constructor(private wordListService : WordlistService) {
  }


  ngOnInit() : void {
    this.wordlists = this.wordListService.getWordList();
  }

}
