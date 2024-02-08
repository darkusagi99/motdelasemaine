import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {Wordlist} from "../wordlist";
import {WordlistService} from "../common/wordlist.service";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {WordStatus} from "../word-status";
import {ToolbarComponent} from "../toolbar/toolbar.component";

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
        RouterLink,
        ToolbarComponent
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

  protected readonly WordStatus = WordStatus;
}
