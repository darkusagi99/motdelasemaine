import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {NgForOf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {TextToSpeechService} from "../common/text-to-speech.service";
import {FormsModule} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-text-to-speech-setup',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatIcon,
    NgForOf,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    MatSelect,
    MatOption
  ],
  templateUrl: './text-to-speech-setup.component.html',
  styleUrl: './text-to-speech-setup.component.css'
})
export class TextToSpeechSetupComponent {
  ttsService: TextToSpeechService;
  baseTestText = "Bonjour, je suis la voix ";
  selectedVoice = "";

  constructor(ttsService : TextToSpeechService) {
    this.ttsService = ttsService;
    this.selectedVoice = ttsService.getCurrentVoiceURI();
  }

  updateVoice() {
    for(let voice of this.ttsService.getAllVoices()){
      if(voice.voiceURI === this.selectedVoice){
        this.ttsService.saveSelectedVoice(this.selectedVoice);
      }
    }

  }

  testVoice() {
    // Extract word to say
    let notFound = true;

    // Say word
    for(let voice of this.ttsService.getAllVoices()){
      if(voice.voiceURI === this.selectedVoice){
        let textToTest = this.baseTestText + voice.name;
        this.ttsService.sayText(textToTest);
        notFound = false;
      }
    }

    if(notFound) {
      this.ttsService.sayText("Voix non trouvée");
    }
  }


}
