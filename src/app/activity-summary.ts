export class ActivitySummary {

  totalWord : number;
  successWord : number;
  errorList : string[] = [];

  constructor(totalWord : number) {
    this.totalWord = totalWord;
    this.successWord = totalWord;
  }

  addError(errorWord : string) {
    this.errorList.push(errorWord);
    this.successWord--;
  }

  getTotalWord() : number {
    return this.totalWord
  }
  getSuccessWord() : number {
    return this.successWord
  }
  getErrorList() : string[] {
    return this.errorList
  }

}
