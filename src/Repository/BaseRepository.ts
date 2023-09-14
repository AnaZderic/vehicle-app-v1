import { getFirestoreInstance } from '@/Common/Utils/Firebase/firebase.utils';
import { CollectionReference, collection } from "firebase/firestore";
import { Firestore } from 'firebase/firestore/lite';

abstract class BaseRepository {
     public firestore: Firestore;
     protected collectionRef: CollectionReference;

    constructor(collectionName: string) {
        this.firestore = getFirestoreInstance();
        this.collectionRef = collection(this.firestore, collectionName);
    }
}

export default BaseRepository;