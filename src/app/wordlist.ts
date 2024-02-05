import {Word} from "./word";
import {v4 as uuid} from "uuid";

export class Wordlist {
  private id : string
  private status = 0;
  private name : string = "";
  private wordlist : Word[] = [];

  constructor(name : string, status = 0, wordlist : Word[] = [], id = uuid() ) {
    this.id = uuid();
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

}
