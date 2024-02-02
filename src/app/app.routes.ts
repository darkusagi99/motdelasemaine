import { Routes } from '@angular/router';
import {WordlistComponent} from "./wordlist/wordlist.component";
import {WordlistSetupComponent} from "./wordlist-setup/wordlist-setup.component";

export const routes: Routes = [
  { path: 'wordlist', component: WordlistComponent },
  { path: 'wordlist-setup', component: WordlistSetupComponent },
  { path: '',   redirectTo: '/wordlist', pathMatch: 'full' },
];
