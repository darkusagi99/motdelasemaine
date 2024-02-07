import { Component } from '@angular/core';
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {WordlistService} from "../common/wordlist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {WordStatus} from "../word-status";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {WordActivityCommon} from "../word-activity-common";
import {MatDialog} from "@angular/material/dialog";
import {TextToSpeechService} from "../common/text-to-speech.service";

@Component({
  selector: 'app-word-activity-write',
  standalone: true,
  imports: [
    MatFabButton,
    MatIcon,
    MatFormField,
    MatInput,
    MatLabel,
    MatHint,
    FormsModule
  ],
  templateUrl: './word-activity-write.component.html',
  styleUrl: './word-activity-write.component.css'
})
export class WordActivityWriteComponent extends WordActivityCommon{
  currentWord : string = "";

  constructor(wordListService : WordlistService, route : ActivatedRoute, router: Router, dialog: MatDialog, ttsService :TextToSpeechService) {
    super(wordListService, route, router, dialog, ttsService);
    this.activityFlag = WordStatus.WRITE;
  }

  override getCurrentWord() {
    return this.currentWord;
  }

  override resetInput() {
    // Do nothing on "basic" process.
    this.currentWord = "";
  }


}
