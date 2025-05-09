import { inject, Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Step } from '../models/step';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  constructor() {}

  private firestore = inject(Firestore);
  private stepCollection = collection(this.firestore, 'steps');

  getSteps(): Observable<Step[]> {
    return collectionData(this.stepCollection, { idField: 'id' }) as Observable<
      Step[]
    >;
  }

  addStep(newStep: Step) {
    const stepRef = doc(this.stepCollection);
    const newId = stepRef.id;
    newStep.id = newId;
    setDoc(stepRef, newStep);
  }

  deleteStep(step: Step) {
    const stepRef = doc(this.firestore, `steps/${step.id}`);
    deleteDoc(stepRef);
  }

  updateStep(step: Step) {
    const stepRef = doc(this.firestore, `steps/${step.id}`);
    updateDoc(stepRef, { ...step });
  }
}
