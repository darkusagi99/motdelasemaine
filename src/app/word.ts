export class Word {
  private _status: number;
  private _word: string;

  constructor(word : string) {
    this._word = word;
    this._status = 0;
  }


  get status(): number {
    return this._status;
  }

  set status(value: number) {
    this._status = value;
  }

  get word(): string {
    return this._word;
  }

  set word(value: string) {
    this._word = value;
  }
}
