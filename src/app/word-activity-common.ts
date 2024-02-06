import {Wordlist} from "./wordlist";
import {WordStatus} from "./word-status";
import {Word} from "./word";
import {WordlistService} from "./common/wordlist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {WordCheckComponent} from "./dialog/word-check/word-check.component";

export class WordActivityCommon {
  wordlist : Wordlist;
  wordlistId : string = "";
  activityFlag = WordStatus.BUILD;

  activityList : Word[];
  currentIdx = 0;

  constructor(protected wordListService : WordlistService, route : ActivatedRoute, protected router: Router, protected dialog: MatDialog) {
    route.paramMap.subscribe( paramMap => {
      this.wordlistId = paramMap.get('id') ?? ""
    })
    this.wordlist = wordListService.getWordListById(this.wordlistId);
    this.activityList = this.wordlist.getShuffledlist();

  }

  // Go to next word
  nextWord() {

    // Check current Word
    // Validate Word status
    if(this.getCurrentWord().toLowerCase() === this.activityList[this.currentIdx].getWord().toLowerCase()) {
      // Mot correct
      this.activityList[this.currentIdx].addStatusFlag(this.activityFlag);

      // Affichage pop-up validation
      this.showValidationDialog();

    } else {
      // Mot erroné
      // Affichage pop-up erreur
      this.showErrorDialog(this.getCurrentWord().toLowerCase(), this.activityList[this.currentIdx].getWord().toLowerCase());

    }


    // Go to next Word / if end of list, close the activity and save status
    if (this.activityList.length > this.currentIdx + 1) {
      // Go to next word
      this.currentIdx++;
      // Reset input
      this.resetInput();
    } else {
      // Save results (status update)
      this.wordListService.updateListStatus(this.wordlist, this.activityList, this.activityFlag);
      // Redirect to main page
      this.router.navigate(['wordlist']);
    }
  }

  getCurrentWord() {
    return this.activityList[this.currentIdx].getWord();
  }

  resetInput() {
    // Do nothing on "basic" process.
  }

  showValidationDialog() {
    console.log('Validation dialog');
      const dialogRef = this.dialog.open(WordCheckComponent, {
        width: '90%',
        data: "Bravo !"
      });

  }

  showErrorDialog(writtenWord: string, correctWord : string) {
    console.log('ERROR dialog');
    let htmlData = "Dommage, le mot était : <b><span class='okText'>"
      + correctWord + "</span></b> - Tu as écrit : <b><span class='errText'>"
      + writtenWord + "</span></b>";

    const dialogRef = this.dialog.open(WordCheckComponent, {
      width: '90%',
      data: htmlData
    });

  }



  // Process for TTS
  hearWord(wordToSay : string) {

    // Extract word to say
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
