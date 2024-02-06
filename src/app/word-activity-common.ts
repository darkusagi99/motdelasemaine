import {Wordlist} from "./wordlist";
import {WordStatus} from "./word-status";
import {Word} from "./word";
import {WordlistService} from "./common/wordlist.service";
import {ActivatedRoute, Router} from "@angular/router";

export class WordActivityCommon {
  wordlist : Wordlist;
  wordlistId : string = "";
  activityFlag = WordStatus.BUILD;

  activityList : Word[];
  currentIdx = 0;

  constructor(protected wordListService : WordlistService, route : ActivatedRoute, protected router: Router) {
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
    if(this.getCurrentWord() === this.activityList[this.currentIdx].getWord()) {
      // Mot correct
      this.activityList[this.currentIdx].addStatusFlag(this.activityFlag);

      // Affichage pop-up validation
      this.showValidationDialog();

    } else {
      // Mot erroné
      // Affichage pop-up erreur
      this.showErrorDialog();

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


  }

  showErrorDialog() {


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
