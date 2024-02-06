import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {Wordlist} from "../wordlist";
import {WordlistService} from "../common/wordlist.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateListComponent} from "../dialog/create-list/create-list.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ToolbarComponent} from "../toolbar/toolbar.component";

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
        NgForOf,
        RouterLink,
        RouterLinkActive,
        ToolbarComponent
    ],
  templateUrl: './wordlist-setup.component.html',
  styleUrl: './wordlist-setup.component.css'
})
export class WordlistSetupComponent {
  wordlists : Wordlist[] = [];

  constructor(public dialog: MatDialog, private wordListService : WordlistService) {
    this.wordlists = this.wordListService.getWordList();
  }

  deleteList(listToDelete: Wordlist) {
    this.wordListService.deleteList(listToDelete);
  }

  resetListStatus(currentList: Wordlist) {
    this.wordListService.resetListStatus(currentList);

  }

  createWordlist() {
    // Open Dialog
    const dialogRef = this.dialog.open(CreateListComponent, {
      width: '90%',
      data: ""
    });

    // Manage return value
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result.trim().length > 0) {
        // Add new Wordlist
        this.wordListService.addWordlist(result);
      }
    });
  }

}
