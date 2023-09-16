import { getFirestoreInstance, getStorageInstance } from "@/Common/Utils/Firebase/firebase.utils";
import { CollectionReference, QueryDocumentSnapshot, collection, getCountFromServer } from "firebase/firestore";
import { Firestore } from "firebase/firestore/lite";
import { FirebaseStorage, StorageReference, ref } from "firebase/storage";

abstract class BaseRepository {
    public firestore: Firestore;
    public storage: FirebaseStorage;
    protected collectionRef: CollectionReference;

    // Pagination
    protected page: number;
    protected startAfter?: QueryDocumentSnapshot;

    constructor(collectionName: string) {
        this.firestore = getFirestoreInstance();
        this.storage = getStorageInstance();
        this.collectionRef = collection(this.firestore, collectionName);

        // Pagination
        this.page = 0;
        this.startAfter = undefined;
    }

    public getStorageRef = async (path: string): Promise<IResponse> =>  {
        try {
            let reference = ref(this.storage, path);
            const response: IResponse<StorageReference> = {
                result: reference,
                success: true
            };
            return response;
        } catch {
            const response = {
                success: false
            };
            return response;
        }
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