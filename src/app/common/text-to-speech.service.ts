import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  ttsSynth = speechSynthesis;
  private storageKey : string = "VOICE";
  private voiceUri = "";
  private currentVoice : SpeechSynthesisVoice | undefined;

  constructor() {
    //ttsSynth.get
    this.loadData();
  }

  private saveData() {
    if (this.currentVoice) {
      localStorage.setItem(this.storageKey, this.currentVoice.voiceURI);
    }
  }

  private loadData() {
    let tempStorage = localStorage.getItem(this.storageKey);
    if (tempStorage != null) {
      this.voiceUri = tempStorage;

      for (let voice of this.ttsSynth.getVoices()) {
        if (voice.voiceURI === this.voiceUri) {
          this.currentVoice = voice;
        }
      }
    }
  }

  // Get the list of available voices
  getAllVoices() {
    return this.ttsSynth.getVoices();
  }

  // Save the voice for future use
  saveSelectedVoice(newVoice : string) {

    // Loop on voice list
    for (let voice of this.ttsSynth.getVoices()) {
      if (voice.voiceURI === newVoice) {
        // Update if found
        this.currentVoice = voice;
        // Apply voice
        this.voiceUri = newVoice;
        this.saveData();
      }
    }
  }

  // TextToSpeech
  sayText(textToSay : string) {
    let utterance = new SpeechSynthesisUtterance(textToSay);

    console.log("Current voice");
    console.log(this.currentVoice);

    // Select voice if defined
    if (this.currentVoice) {
      utterance.voice = this.currentVoice;
    }
    this.ttsSynth.speak(utterance);

  }



}
