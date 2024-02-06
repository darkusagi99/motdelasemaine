import { Component } from '@angular/core';
import {Wordlist} from "../wordlist";
import {MatDialog} from "@angular/material/dialog";
import {WordlistService} from "../common/wordlist.service";
import {ActivatedRoute, RouterLink, RouterLinkActive} from "@angular/router";
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {NgForOf} from "@angular/common";
import {CreateWordComponent} from "../dialog/create-word/create-word.component";
import {CreateListComponent} from "../dialog/create-list/create-list.component";
import {ToolbarComponent} from "../toolbar/toolbar.component";

@Component({
  selector: 'app-wordlist-element-setup',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatFabButton,
    MatIcon,
    NgForOf,
    RouterLink,
    RouterLinkActive,
    ToolbarComponent
  ],
  templateUrl: './wordlist-element-setup.component.html',
  styleUrl: './wordlist-element-setup.component.css'
})
export class WordlistElementSetupComponent {
  wordlist : Wordlist;
  wordlistId : string = "";


  constructor(public dialog: MatDialog, private wordListService : WordlistService, route : ActivatedRoute) {
    //let listId = route.snapshot.params['id'];
    route.paramMap.subscribe( paramMap => {
      this.wordlistId = paramMap.get('id') ?? ""
    })
    this.wordlist = wordListService.getWordListById(this.wordlistId);
  }


  editListName() {
// Open Dialog
    const dialogRef = this.dialog.open(CreateListComponent, {
      width: '90%',
      data: this.wordlist.getName()
    });

    // Manage return value
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result.trim().length > 0) {
        // Add new Wordlist
        this.wordListService.updateWordListName(this.wordlistId, result);
      }
    });
  }

  editWord(wordToEdit : string) {

    let oldWord = wordToEdit;

    // Open Dialog
    const dialogRef = this.dialog.open(CreateWordComponent, {
      width: '90%',
      data: wordToEdit
    });

    // Manage return value
    dialogRef.afterClosed().subscribe(result => {
      console.log("Edit Word")
      if (result != undefined && result.trim().length > 0) {
        // Add new Wordlist
        this.wordListService.updateWordInList(this.wordlistId, result, oldWord);
      }
    });

  }

  deleteWord(wordToDelete : string) {
    this.wordListService.deleteWordInList(this.wordlistId, wordToDelete);
  }

  createWord() {

    console.log("Create Word");

    // Open Dialog
    const dialogRef = this.dialog.open(CreateWordComponent, {
      width: '90%',
      data: ""
    });

    // Manage return value
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result.trim().length > 0) {
        // Add new Wordlist
        this.wordListService.addWordInList(this.wordlistId, result);
      }
    });
  }




}
