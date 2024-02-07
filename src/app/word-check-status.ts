export class WordCheckStatus {

  private readonly _successFlag : boolean;
  private readonly _correctWord : string;
  private readonly _writtenWord : string;


  constructor(successFlag: boolean, correctWord: string = "", writtenWord: string = "") {
    this._successFlag = successFlag;
    this._correctWord = correctWord;
    this._writtenWord = writtenWord;
  }

  get successFlag(): boolean {
    return this._successFlag;
  }

  get correctWord(): string {
    return this._correctWord;
  }

  get writtenWord(): string {
    return this._writtenWord;
  }
}
