import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideFirebaseApp} from "@angular/fire/app";
import {initializeApp} from "firebase/app";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import firebaseConfig from "./common/firebase";
import {provideAuth} from "@angular/fire/auth";
import {getAuth} from "firebase/auth";
import {getStorage, provideStorage} from "@angular/fire/storage";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage())])
  ]
};
