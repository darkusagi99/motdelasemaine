import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordlistComponent } from "./wordlist/wordlist.component";
import {WordlistSetupComponent} from "./wordlist-setup/wordlist-setup.component";
import {WordActivitySeeComponent} from "./word-activity-see/word-activity-see.component";
import {WordActivityBuildComponent} from "./word-activity-build/word-activity-build.component";
import {WordActivityWriteComponent} from "./word-activity-write/word-activity-write.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WordlistComponent, WordlistSetupComponent,
    WordActivitySeeComponent, WordActivityBuildComponent, WordActivityWriteComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'motdelasemaine';
}
