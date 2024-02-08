import { Component } from '@angular/core';
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {WordlistService} from "../common/wordlist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {WordStatus} from "../word-status";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {WordActivityCommon} from "../word-activity-common";
import {MatDialog} from "@angular/material/dialog";
import {TextToSpeechService} from "../common/text-to-speech.service";
import {WordActivityEndComponent} from "../word-activity-end/word-activity-end.component";

@Component({
  selector: 'app-word-activity-build',
  standalone: true,
  imports: [
    MatFabButton,
    MatIcon,
    CdkDrag,
    CdkDropList,
    WordActivityEndComponent
  ],
  templateUrl: './word-activity-build.component.html',
  styleUrl: './word-activity-build.component.css'
})
export class WordActivityBuildComponent extends WordActivityCommon {

  currentWordLetters : string[] = [];
  builtWordLetters : string[] = [];

  constructor(wordListService : WordlistService, route : ActivatedRoute, router: Router, dialog: MatDialog, ttsService :TextToSpeechService) {

    super(wordListService, route, router, dialog, ttsService);
    this.activityFlag = WordStatus.BUILD;

    // Additionnal process for build activity
    this.extractWordToBuild();

  }

  override getCurrentWord() {
    return this.builtWordLetters.join("");
  }

  override resetInput() {
    // Do nothing on "basic" process.
    this.extractWordToBuild();
  }

  extractWordToBuild() {
    // Get current word letters
    let tmpWord : string = this.activityList[this.currentIdx].getWord();

    this.currentWordLetters = [];
    this.builtWordLetters = [];

    // Extract letters from word
    for(let idx = 0; idx < tmpWord.length; idx++) {
      let tmpLetter = tmpWord.at(idx);
      if (tmpLetter) {
        this.currentWordLetters.push(tmpLetter.toLowerCase());
      }
    }

    // Shuffle letters
    // Loop on elements and randomly switch elements
    let m = this.currentWordLetters.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [this.currentWordLetters[m], this.currentWordLetters[i]] = [this.currentWordLetters[i], this.currentWordLetters[m]];
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // Move inside the container - Just change order
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } else {
      // Move to the other container - Swap entries
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


}
