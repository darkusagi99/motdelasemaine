import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {Wordlist} from "../wordlist";
import {NgForOf} from "@angular/common";
import {WordlistService} from "../common/wordlist.service";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-wordlist',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatIcon,
    NgForOf,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './wordlist.component.html',
  styleUrl: './wordlist.component.css'
})
export class WordlistComponent {
  wordlists : Wordlist[] = [];

  constructor(private wordListService : WordlistService) {

    this.wordlists = this.wordListService.getWordList();
    console.log(this.wordlists);
  }

}
