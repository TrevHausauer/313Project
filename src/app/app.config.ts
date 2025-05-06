import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Import the functions you need from the SDKs you need
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBsC59p4S2lerFyzMYxcAlDRW5h9zY4fAM',
  authDomain: 'to-do-list-application-26a09.firebaseapp.com',
  projectId: 'to-do-list-application-26a09',
  storageBucket: 'to-do-list-application-26a09.firebasestorage.app',
  messagingSenderId: '386175913071',
  appId: '1:386175913071:web:fab24b4c7aa5fc2e19519a',
  measurementId: 'G-1QCS584BRN',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
};
