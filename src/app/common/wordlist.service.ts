import { Injectable } from '@angular/core';
import {Word} from "../word";
import {Wordlist} from "../wordlist";

@Injectable({
  providedIn: 'root'
})
export class WordlistService {
  wordlists : Wordlist[] = [];

  constructor() {
    const localWl : Word[] = [];
    localWl.push(new Word("TestWord1"));
    localWl.push(new Word("TestWord2"));
    localWl.push(new Word("TestWord3"));

    const wordlist1 = new Wordlist("Liste 1 - consult");
    wordlist1.setWordlist(localWl);
    const wordlist2 = new Wordlist("Liste 2 - consult");
    const wordlist3 = new Wordlist("Liste 3 - consult");
    const wordlist4 = new Wordlist("Liste 4 - consult");
    this.wordlists.push(wordlist1, wordlist2, wordlist3, wordlist4);
  }

  getWordList() : Wordlist[] {
    return this.wordlists;
  }

  // Delete the list
  deleteList() {}

  // Reset the status of the list to 0
  resetListStatus(){}

  // Update the status of the list
  updateStatus() {}

}
