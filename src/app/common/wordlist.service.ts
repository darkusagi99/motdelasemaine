import { Injectable } from '@angular/core';
import {Word} from "../word";
import {Wordlist} from "../wordlist";
import {W} from "@angular/cdk/keycodes";

@Injectable({
  providedIn: 'root'
})
export class WordlistService {
  private wordlists : Wordlist[] = [];
  private storageKey : string = "WORDLISTS";

  constructor() {

    this.loadData();

    if (this.wordlists.length == 0) {
      const localWl: Word[] = [];
      localWl.push(new Word("TestWord1"));
      localWl.push(new Word("TestWord2"));
      localWl.push(new Word("TestWord3"));

      const wordlist1 = new Wordlist("Liste 1 - consult");
      wordlist1.setWordlist(localWl);
      const wordlist2 = new Wordlist("Liste 2 - consult");
      const wordlist3 = new Wordlist("Liste 3 - consult");
      const wordlist4 = new Wordlist("Liste 4 - consult");
      this.wordlists.push(wordlist1, wordlist2, wordlist3, wordlist4);
      this.saveData();
    }
  }

  /** Manage Wordlist save */
  private saveData() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.wordlists));
  }

  private loadData() {
    let tempStorage = localStorage.getItem(this.storageKey);
    if (tempStorage != null) {
      this.wordlists = this.getWordListFromJson(tempStorage);
    }
  }

  private getWordListFromJson(tempStorageJson : string) {

    const tmpwordlists : Wordlist[] = [];
    let tmpwordlistsParsed = JSON.parse(tempStorageJson);

    for(let currentElt of tmpwordlistsParsed) {
      // Load "main" infos
      let currentLst = new Wordlist(currentElt.name, currentElt.status, this.getWordsFromJson(currentElt.wordlist));
      tmpwordlists.push(currentLst);
    }

    return tmpwordlists;

  }

  private getWordsFromJson(encodedWords : any) : Word[] {
    let tmpWords : Word[] = [];

    for(let currentword of encodedWords) {
      let currentElt = new Word(currentword.word, currentword.status);
      tmpWords.push(currentElt);
    }
    return tmpWords;
  }

  getWordList() : Wordlist[] {
    return this.wordlists;
  }

  private findIndex(searchEntry: Wordlist) : number {
    return this.wordlists.findIndex((elt) =>
     elt.getId() === searchEntry.getId()
    )
  }

  // Delete the list
  public deleteList(listToDelete: Wordlist) {
    const deleteIdx : number = this.findIndex(listToDelete);
    if (deleteIdx >= 0) {
      this.wordlists.splice(deleteIdx, 1);
    }
  }

  // Reset the status of the list to 0
  public resetListStatus(currentList: Wordlist){
    const resetIdx : number = this.findIndex(currentList);
    if (resetIdx >= 0) {
      this.wordlists[resetIdx].setStatus(0);
    }
  }

  // Update the status of the list
  public updateStatus() {}

  // Create new Wrodlist entry
  public addWordlist(name : string) {
    let newList = new Wordlist(name);
     this.wordlists.push(newList);
     this.saveData();
  }

}
