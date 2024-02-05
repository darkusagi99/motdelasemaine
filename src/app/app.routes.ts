import { Routes } from '@angular/router';
import {WordlistComponent} from "./wordlist/wordlist.component";
import {WordlistSetupComponent} from "./wordlist-setup/wordlist-setup.component";
import {WordlistElementSetupComponent} from "./wordlist-element-setup/wordlist-element-setup.component";

export const routes: Routes = [
  { path: 'wordlist', component: WordlistComponent },
  { path: 'wordlist-setup', component: WordlistSetupComponent },
  { path: 'wordlist-setup/:id', component: WordlistElementSetupComponent },
  { path: '',   redirectTo: '/wordlist', pathMatch: 'full' },
];
