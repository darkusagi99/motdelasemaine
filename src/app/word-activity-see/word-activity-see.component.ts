import { Component } from '@angular/core';
import {WordlistService} from "../common/wordlist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatCardActions} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {WordStatus} from "../word-status";
import {WordActivityCommon} from "../word-activity-common";
import {MatDialog} from "@angular/material/dialog";
import {TextToSpeechService} from "../common/text-to-speech.service";

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
  styleUrls: ['./word-activity-see.component.css', '../common/common.css']
})
export class WordActivitySeeComponent extends WordActivityCommon{

  constructor(wordListService : WordlistService, route : ActivatedRoute, router: Router, dialog: MatDialog, ttsService :TextToSpeechService) {
    super(wordListService, route, router, dialog, ttsService);
    this.activityFlag = WordStatus.SEE;
    this.showSummaryFlag = true;
  }

  override showValidationDialog() {
    // See activity - do nothing
  }

  override showErrorDialog() {
    // See activity - do nothing
  }

  override nextWord() {

    // Only process if something was written
    if (this.getCurrentWord().length != 0 || this.showSummaryFlag) {

      // Check current Word
      // Validate Word status
      // Mot correct
      this.activityList[this.currentIdx].addStatusFlag(this.activityFlag);

      // Go to next Word / if end of list, close the activity and save status
      if (this.activityList.length > this.currentIdx + 1) {
        // Go to next word
        this.currentIdx++;
        // Reset input
        this.resetInput();
      } else {
        if (this.showSummaryFlag) {
          // Save results (status update)
          this.wordListService.updateListStatus(this.wordlist, this.activityList, this.activityFlag);
          // Redirect to main page
          this.router.navigate(['wordlist']);
        } else {
          this.showSummaryFlag = true;
        }
      }
    }
  }

}
