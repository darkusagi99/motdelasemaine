import {Word} from "./word";

export class Wordlist {
  private _status = 0;
  private _wordlist : Word[] = [];

  constructor() {
    this._status = 0;
    this._wordlist = [];
  }


  get status(): number {
    return this._status;
  }

  set status(value: number) {
    this._status = value;
  }

  get wordlist(): Word[] {
    return this._wordlist;
  }

  set wordlist(value: Word[]) {
    this._wordlist = value;
  }
}
