import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {Wordlist} from "../wordlist";
import {NgForOf} from "@angular/common";
import {Word} from "../word";
import {WordlistService} from "../common/wordlist.service";

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
    NgForOf
  ],
  templateUrl: './wordlist.component.html',
  styleUrl: './wordlist.component.css'
})
export class WordlistComponent {
  wordlists : Wordlist[] = [];

  constructor(private wordListService : WordlistService) {

  }

  ngOnInit() : void {

    this.wordlists = this.wordListService.getWordList();
  }
}
