import {Word} from "./word";

export class Wordlist {
  private status = 0;
  private wordlist : Word[] = [];

  constructor() {
    this.status = 0;
    this.wordlist = [];
  }

}
