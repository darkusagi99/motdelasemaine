import { Component } from '@angular/core';
import {Wordlist} from "../wordlist";
import {MatDialog} from "@angular/material/dialog";
import {WordlistService} from "../common/wordlist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatCardActions} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {Word} from "../word";
import {WordStatus} from "../word-status";

@Component({
  selector: 'app-word-activity-see',
  standalone: true,
  imports: [
    MatButton,
    MatCardActions,
    MatIcon,
    MatFabButton
  ],
  templateUrl: './word-activity-see.component.html',
  styleUrl: './word-activity-see.component.css'
})
export class WordActivitySeeComponent {
  wordlist : Wordlist;
  wordlistId : string = "";
  activityFlag = WordStatus.SEE;

  activityList : Word[];
  currentIdx = 0;

  constructor(private wordListService : WordlistService, route : ActivatedRoute, private router: Router) {
    //let listId = route.snapshot.params['id'];
    route.paramMap.subscribe( paramMap => {
      this.wordlistId = paramMap.get('id') ?? ""
    })
    this.wordlist = wordListService.getWordListById(this.wordlistId);

    this.activityList = this.wordlist.getShuffledlist();

  }

  nextWord() {

    // Check current Word
    // Nothing for "See" activity

    // Validate Word status
    this.activityList[this.currentIdx].addStatusFlag(this.activityFlag);

    // Go to next Word / if end of list, close the activity and save status
    if (this.activityList.length > this.currentIdx + 1) {
      // Go to next word
      this.currentIdx++;
    } else {
      // Save results (status update)
      this.wordListService.updateListStatus(this.wordlist, this.activityList, this.activityFlag);

      // Redirect to main page
      this.router.navigate(['wordlist']);
    }
  }

  hearWord() {

  }


}
