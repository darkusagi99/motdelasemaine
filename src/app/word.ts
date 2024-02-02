export class Word {
  private status: number;
  private word: string;

  constructor(word : string) {
    this.word = word;
    this.status = 0;
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
