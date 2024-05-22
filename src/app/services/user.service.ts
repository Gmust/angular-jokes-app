import {Injectable} from '@angular/core';
import {getFirestore, collection, getDocs, Firestore} from 'firebase/firestore';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../firebase.config';
import {addDoc} from "@angular/fire/firestore";
import {Joke} from "../../@types/jokes";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private db: Firestore;

  constructor() {
    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);
  }

  async getCollection(collectionName: string) {
    try {
      const colRef = collection(this.db, collectionName);
      const snapshot = await getDocs(colRef);
      console.log(snapshot.docs.map(doc => doc.data()));
    } catch (error) {
      console.error('Error getting documents: ', error);
      throw error;
    }
  }

  async addJokeToUserCollection(collectionName: string, jokeData: Joke) {
    try {
      const colRef = collection(this.db, collectionName);
      await addDoc(colRef, jokeData);
      console.log('Joke added successfully');
    } catch (error) {
      console.error('Error adding joke: ', error);
      throw error;
    }
  }
}
