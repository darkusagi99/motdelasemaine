import {Word} from "./word";
import {v4 as uuid} from "uuid";

export class Wordlist {
  private readonly id : string
  private status = 0;
  private name : string = "";
  private wordlist : Word[] = [];

  constructor(name : string, status = 0, wordlist : Word[] = [], id = uuid() ) {
    this.id = id;
    this.status = status;
    this.name = name;
    this.wordlist = wordlist;
  }

  getStatus(): number {
    return this.status;
  }

  setStatus(value: number) {
    this.status = value;
  }

  getWordListDisplay() : string {
    let displayList = "";
    this.wordlist.forEach(
      w => displayList ? displayList += ", " + w.getWord() : displayList = w.getWord()
    )
    return displayList;
  }

  getWordlist(): Word[] {
    return this.wordlist ?? [];
  }

  getShuffledlist() : Word[] {

    // Clone the list of words
    let tempWordList  = [...this.wordlist];

    // Loop on elements and randomly switch elements
    let m = tempWordList.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [tempWordList[m], tempWordList[i]] = [tempWordList[i], tempWordList[m]];
    }
    return tempWordList;

  }

  setWordlist(value: Word[]) {
    this.wordlist = value;
  }

  getName() : string {
    return this.name ?? "";
  }

  setName(name : string) : void {
    this.name = name;
  }

  getId() : string {
    return this.id
  }

  addStatusFlag(statusFlag : number) {
    this.status = this.status | statusFlag;
  }

  hasStatusFlag(statusFlag : number) {
    return (this.status & statusFlag) > 0;
  }

}
