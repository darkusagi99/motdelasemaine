import { Routes } from '@angular/router';
import {WordlistComponent} from "./wordlist/wordlist.component";
import {WordlistSetupComponent} from "./wordlist-setup/wordlist-setup.component";
import {WordlistElementSetupComponent} from "./wordlist-element-setup/wordlist-element-setup.component";
import {WordActivitySeeComponent} from "./word-activity-see/word-activity-see.component";
import {WordActivityBuildComponent} from "./word-activity-build/word-activity-build.component";
import {WordActivityWriteComponent} from "./word-activity-write/word-activity-write.component";

export const routes: Routes = [
  { path: 'wordlist', component: WordlistComponent },
  { path: 'wordlist/see/:id', component: WordActivitySeeComponent },
  { path: 'wordlist/build/:id', component: WordActivityBuildComponent },
  { path: 'wordlist/write/:id', component: WordActivityWriteComponent },
  { path: 'wordlist-setup', component: WordlistSetupComponent },
  { path: 'wordlist-setup/:id', component: WordlistElementSetupComponent },
  { path: '',   redirectTo: '/wordlist', pathMatch: 'full' },
];
