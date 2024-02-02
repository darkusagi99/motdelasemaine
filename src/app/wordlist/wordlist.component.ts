import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {Wordlist} from "../wordlist";
import {NgForOf} from "@angular/common";
import {Word} from "../word";

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

  ngOnInit() : void {
    const localWl : Word[] = [];
    localWl.push(new Word("TestWord1"));
    localWl.push(new Word("TestWord2"));
    localWl.push(new Word("TestWord3"));

    const wordlist1 = new Wordlist("Liste 1 - consult");
    wordlist1.setWordlist(localWl);
    const wordlist2 = new Wordlist("Liste 2 - consult");
    const wordlist3 = new Wordlist("Liste 3 - consult");
    const wordlist4 = new Wordlist("Liste 4 - consult");
    this.wordlists.push(wordlist1, wordlist2, wordlist3, wordlist4);
  }
}
