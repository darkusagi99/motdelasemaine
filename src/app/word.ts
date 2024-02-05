export class Word {
  private status: number;
  private word: string;

  constructor(word : string, status : number = 0) {
    this.word = word;
    this.status = status;
  }


  getStatus(): number {
    return this.status;
  }

  setStatus(value: number) {
    this.status = value;
  }

  addStatusFlag(statusFlag : number) {
    this.status = this.status | statusFlag;
  }

  hasStatusFlag(statusFlag : number) {
    return (this.status & statusFlag) > 0;
  }

  getWord(): string {
    return this.word;
  }

  setWord(value: string) {
    this.word = value;
  }
}
