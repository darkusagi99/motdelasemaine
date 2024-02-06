import { Component } from '@angular/core';
import {WordlistService} from "../common/wordlist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatCardActions} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {WordStatus} from "../word-status";
import {WordActivityCommon} from "../word-activity-common";

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
export class WordActivitySeeComponent extends WordActivityCommon{

  constructor(wordListService : WordlistService, route : ActivatedRoute, router: Router) {
    super(wordListService, route, router);
    this.activityFlag = WordStatus.SEE;

  }

}
