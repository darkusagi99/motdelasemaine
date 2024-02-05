import { Component } from '@angular/core';
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {Wordlist} from "../wordlist";
import {Word} from "../word";
import {WordlistService} from "../common/wordlist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {WordStatus} from "../word-status";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

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
export class WordActivityWriteComponent {
  wordlist : Wordlist;
  wordlistId : string = "";
  activityFlag = WordStatus.WRITE;

  activityList : Word[];
  currentIdx = 0;
  currentWord : string = "";

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
    // Nothing for "Write" activity
    console.log("Current Word : " + this.currentWord);

    // Validate Word status
    if(this.currentWord.trim() === this.activityList[this.currentIdx].getWord()) {
      // Mot correct
      this.activityList[this.currentIdx].addStatusFlag(this.activityFlag);

      // Affichage pop-up validation

    } else {
      // Mot erroné
      // Affichage pop-up erreur

    }


    // Go to next Word / if end of list, close the activity and save status
    if (this.activityList.length > this.currentIdx + 1) {
      // Go to next word
      this.currentIdx++;
      // Reset input
      this.currentWord = "";
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
}
