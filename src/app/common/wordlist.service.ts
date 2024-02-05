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
      let currentLst = new Wordlist(currentElt.name, currentElt.status, this.getWordsFromJson(currentElt.wordlist), currentElt.id);
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

  getWordListById(id : string) : Wordlist {
    let listIdx = this.findIndexById(id);

    if (listIdx >= 0) {
      return this.wordlists[listIdx];
    } else {
      return new Wordlist("");
    }

  }

  private findIndex(searchEntry: Wordlist) : number {
    return this.wordlists.findIndex((elt) =>
     elt.getId() === searchEntry.getId()
    )
  }

  private findIndexById(id: string) : number {
    return this.wordlists.findIndex((elt) =>
      elt.getId() === id
    )
  }

  private findWordById(listId : string, searchWord : string) {
    const listeIdx: number = this.findIndexById(listId);
    if (listeIdx >= 0) {
      let currentWordList = this.wordlists[listeIdx].getWordlist();

      return currentWordList.findIndex((elt) =>
        elt.getWord() == searchWord
      )

    }

    // Not found -> return -1;
    return listeIdx;
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

  public updateWordListName(listId : string, newName : string) {
    const listeIdx: number = this.findIndexById(listId);
    if (listeIdx >= 0) {
      if (this.wordlists[listeIdx].getName() !== newName) {
        this.wordlists[listeIdx].setName(newName);
        this.saveData();
      }
    }
  }

  public addWordInList(listId : string, newWord : string) {
    const listeIdx: number = this.findIndexById(listId);
    if (listeIdx >= 0) {
      this.wordlists[listeIdx].getWordlist().push(new Word(newWord));
      this.saveData();
    }
  }



  public updateWordInList(listId : string, newWord : string, oldWord : string) {
    const listeIdx: number = this.findIndexById(listId);
    if (listeIdx >= 0) {
      let wordIdx = this.findWordById(listId, oldWord);
      if (wordIdx >= 0) {
        if (this.wordlists[listeIdx].getWordlist()[wordIdx].getWord() !== newWord) {
          this.wordlists[listeIdx].getWordlist()[wordIdx].setWord(newWord);
          this.saveData();
        }
      }
    }
  }

  public deleteWordInList(listId : string, wordToDelete : string) {
      const listeIdx : number = this.findIndexById(listId);
      if (listeIdx >= 0) {
        let wordIdx = this.findWordById(listId, wordToDelete);
        if (wordIdx >= 0) {
          this.wordlists[listeIdx].getWordlist().splice(wordIdx, 1);
          this.saveData();
        }
      }
  }

}
