import {Word} from "./word";

export class Wordlist {
  private status = 0;
  private name : string = "";
  private wordlist : Word[] = [];

  constructor(name : string) {
    this.status = 0;
    this.name = name;
    this.wordlist = [];
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
    return this.wordlist;
  }

  setWordlist(value: Word[]) {
    this.wordlist = value;
  }

  getName() : string {
    return this.name;
  }

  setName(name : string) : void {
    this.name = name;
  }

}
