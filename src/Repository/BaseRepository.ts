import { getFirestoreInstance } from "@/Common/Utils/Firebase/firebase.utils";
import { CollectionReference, Query, QueryDocumentSnapshot, collection, getCountFromServer } from "firebase/firestore";
import { Firestore } from "firebase/firestore/lite";

abstract class BaseRepository {
    public firestore: Firestore;
    protected collectionRef: CollectionReference;

    // Pagination
    protected page: number;
    protected startAfter?: QueryDocumentSnapshot;

    constructor(collectionName: string, ) {
        this.firestore = getFirestoreInstance();
        this.collectionRef = collection(this.firestore, collectionName);

        // Pagination
        this.page = 0;
        this.startAfter = undefined;
    }

    public collectionLength = async (): Promise<number> => {
        const snapshot = await getCountFromServer(this.collectionRef);
        let collectionLength = snapshot.data().count;
        return collectionLength;
    }

    public pages = async (pageLength: number): Promise<number> => {
        let collectionLength = await this.collectionLength();
        let pages = Math.ceil(collectionLength/pageLength);
        return pages;
    }
}

export default BaseRepository;