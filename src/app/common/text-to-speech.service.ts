import {inject, Injectable} from '@angular/core';
import firebase from "./firebase";
import {collection, doc, Firestore, getDoc, setDoc,} from '@angular/fire/firestore';
import {Auth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  ttsSynth = speechSynthesis;
  private storageKey : string = "VOICE";
  private voiceUri = "";
  private currentVoice : SpeechSynthesisVoice | undefined;
  firestore: Firestore = inject(Firestore);

  private getConnectedCollection() {
    return "user/" + this.auth.currentUser?.uid + "/voice"
  }

  constructor(private auth: Auth) {
    this.loadData();
  }

  private saveData() {
    if (this.currentVoice) {
      // Sauvegarde en local
      localStorage.setItem(this.storageKey, this.currentVoice.voiceURI);

      // Si connecté - Sauvegarde vers firestore
      if(!!this.auth.currentUser) {
        const itemDocument = doc(this.firestore, this.getConnectedCollection(), this.storageKey);
        setDoc(itemDocument, {voiceUri : this.currentVoice.voiceURI})
      }
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

  loadCloudData() {

    if(!!this.auth.currentUser) {
      const itemDocument = doc(this.firestore, this.getConnectedCollection(), this.storageKey);
      getDoc(itemDocument).then((storage) => {

        let tempStorage = storage.data()?.['voiceUri'];

        // Handle cloud feedback
        if (tempStorage != null) {
          this.voiceUri = tempStorage;

          for (let voice of this.ttsSynth.getVoices()) {
            if (voice.voiceURI === this.voiceUri) {
              this.currentVoice = voice;
              // And align local storage
              localStorage.setItem(this.storageKey, tempStorage);
            }
          }
        }
      });
    }

  }

  // Get the list of available voices
  getAllVoices() {
    return this.ttsSynth.getVoices();
  }

  getCurrentVoiceURI() {
    return this.voiceUri;
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
