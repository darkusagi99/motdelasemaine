import {Wordlist} from "./wordlist";
import {WordStatus} from "./word-status";
import {Word} from "./word";
import {WordlistService} from "./common/wordlist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {WordCheckComponent} from "./dialog/word-check/word-check.component";
import {TextToSpeechService} from "./common/text-to-speech.service";
import {WordCheckStatus} from "./word-check-status";

export class WordActivityCommon {
  wordlist : Wordlist;
  wordlistId : string = "";
  activityFlag = WordStatus.BUILD;
  ttsService : TextToSpeechService;

  activityList : Word[];
  currentIdx = 0;

  constructor(protected wordListService : WordlistService, route : ActivatedRoute, protected router: Router, protected dialog: MatDialog, ttsService :TextToSpeechService) {
    route.paramMap.subscribe( paramMap => {
      this.wordlistId = paramMap.get('id') ?? ""
    })
    this.wordlist = wordListService.getWordListById(this.wordlistId);
    this.activityList = this.wordlist.getShuffledlist();

    this.ttsService = ttsService;

  }

  // Go to next word
  nextWord() {

    // Check current Word
    // Validate Word status
    if(this.getCurrentWord().toLowerCase() === this.activityList[this.currentIdx].getWord().toLowerCase()) {
      // Mot correct
      this.activityList[this.currentIdx].addStatusFlag(this.activityFlag);

      // Show validation pop-up
      this.showValidationDialog();

    } else {
      // Incorrect word
      // Show error pop-up
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
    const dialogRef = this.dialog.open(WordCheckComponent, {
      width: '90%',
      data: new WordCheckStatus(true)
    });

  }


  showErrorDialog(writtenWord: string, correctWord : string) {
    const dialogRef = this.dialog.open(WordCheckComponent, {
      width: '90%',
      data: new WordCheckStatus(false, correctWord, writtenWord)
    });
  }


  // Process for TTS - Say the asked word
  hearWord(wordToSay : string) {
    const startPhrase = "Le mot est : "
    this.ttsService.sayText(startPhrase + wordToSay)

  }

}
