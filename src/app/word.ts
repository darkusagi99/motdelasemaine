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

  getWord(): string {
    return this.word;
  }

  setWord(value: string) {
    this.word = value;
  }
}
