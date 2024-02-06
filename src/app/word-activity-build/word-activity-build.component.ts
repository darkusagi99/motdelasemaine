import { Component } from '@angular/core';
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {Wordlist} from "../wordlist";
import {Word} from "../word";
import {WordlistService} from "../common/wordlist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {WordStatus} from "../word-status";
import {NgForOf} from "@angular/common";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-word-activity-build',
  standalone: true,
  imports: [
    MatFabButton,
    MatIcon,
    NgForOf,
    CdkDrag,
    CdkDropList
  ],
  templateUrl: './word-activity-build.component.html',
  styleUrl: './word-activity-build.component.css'
})
export class WordActivityBuildComponent {
  wordlist : Wordlist;
  wordlistId : string = "";
  activityFlag = WordStatus.BUILD;

  activityList : Word[];
  currentIdx = 0;

  currentWordLetters : string[] = [];
  builtWordLetters : string[] = [];

  testWordLetters : string[] = ["T", "E", "S", "T"];

  constructor(private wordListService : WordlistService, route : ActivatedRoute, private router: Router) {
    //let listId = route.snapshot.params['id'];
    route.paramMap.subscribe( paramMap => {
      this.wordlistId = paramMap.get('id') ?? ""
    })
    this.wordlist = wordListService.getWordListById(this.wordlistId);

    this.activityList = this.wordlist.getShuffledlist();

    this.extractWordToBuild();

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
      this.extractWordToBuild();
    } else {
      // Save results (status update)
      this.wordListService.updateListStatus(this.wordlist, this.activityList, this.activityFlag);

      // Redirect to main page
      this.router.navigate(['wordlist']);
    }
  }

  hearWord() {

    // Extract word to say
    let wordToSay = this.activityList[this.currentIdx].getWord();
    let tmpSelectedVoice = "Flo"
    let tmpLang = "fr-FR"
    let startPhrase = "Le mot est : "

    // Say word
    let synth = speechSynthesis;
    let utterance = new SpeechSynthesisUtterance(startPhrase + wordToSay);

    console.log(synth.getVoices());

    for(let voice of synth.getVoices()){
      if(voice.name === tmpSelectedVoice && voice.lang === tmpLang){
        console.log("Found");
        utterance.voice = voice;
      }
    }
    synth.speak(utterance);

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
        //this.builtWordLetters.push("");
      }
    }

    // Shuffle letters
    // Clone the list of words

    // Loop on elements and randomly switch elements
    let m = this.currentWordLetters.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [this.currentWordLetters[m], this.currentWordLetters[i]] = [this.currentWordLetters[i], this.currentWordLetters[m]];
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log("Drop event")
    console.log("Drop event : previousIndex " + event.previousIndex);
    console.log("Drop event : currentIndex " + event.currentIndex);
    console.log(event.container.data);
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

  resetCurrent() {
    this.extractWordToBuild();
  }

}
