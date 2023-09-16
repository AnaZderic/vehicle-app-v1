import { doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc, query, orderBy, startAt, limit, QueryConstraint, startAfter } from "firebase/firestore";
import { StorageReference, uploadBytes, getDownloadURL } from "firebase/storage";
import BaseRepository from "./BaseRepository";
import MakeModel from "@/Models/Entities/make";


class MakeRepository extends BaseRepository {
    
    constructor() {
        super("makes");
    }
    
    public createMake = async (partialMakeFile: IPartialMakeFile): Promise<IResponse> => {
        try {
            let storageRef: StorageReference;
            let potentialStorageRef = await this.getStorageRef(partialMakeFile.img);
            
            if (potentialStorageRef.success) {
                storageRef = potentialStorageRef.result as StorageReference;
                const newMetadata = {
                    contentType: `image/${storageRef.name.split(".")[1]}`
                }; 
                await uploadBytes(storageRef, partialMakeFile.file, newMetadata);

                let partialMake: IPartialMake = {
                    name: partialMakeFile.name,
                    abrv: partialMakeFile.abrv,
                    img: partialMakeFile.img
                };
                
                let downloadURL = await getDownloadURL(storageRef);
                partialMake.img = downloadURL;

                await addDoc(this.collectionRef, partialMake);
                const response = {
                    success: true
                };
                return response;
            }
            else throw "Unknown error.";
        } catch(err) {
            console.log(err);
            const response = {
                errors: ["Unknown error."],
                success: false
            };
            return response;
        }
    }

    public readMake = async (id: string): Promise<IResponse> => {
        try {
            let docRef = doc(this.collectionRef, id);
            const snapshot = await getDoc(docRef);
            if (snapshot.exists()) {
                const ipm: IPartialMake = {...snapshot.data()} as IPartialMake;
                const makeModel = new MakeModel(ipm.name, ipm.abrv, ipm.img, id);
                const response: IResponse<MakeModel> =
                {
                    result: makeModel,
                    success: true
                };
                return response;
            } else {
                console.log("No such document!");
                const response: IResponse = {
                    errors: ["No such document!"],
                    success: true
                };
                return response;
            }
            
        } catch(err) {
            console.log(err);
            const response: IResponse = {
                errors: ["Unknown error."],
                success: true
            };
            return response;
        }
    }

    public readMakes = async (): Promise<IResponse> => {   
        try {
            const snapshot = await getDocs(this.collectionRef);
            let makes: MakeModel[] = [];

            snapshot.docs.forEach((doc) => {
                const ipm: IPartialMake = {...doc.data()} as IPartialMake;

                let makeModel: MakeModel = new MakeModel(ipm.name, ipm.abrv, ipm.img, doc.id);
                makes.push(makeModel);
            });

            const response: IResponse<MakeModel[]> = {
                result: makes,
                success: true
            };
            return response;
        } catch (err) {
            console.log(err);
            const response: IResponse = {
                errors: ["Unknown error."],
                success: false
            };
            return response;
        }
    }

    public readMakesPaginated = async (page: number, pageLength?: number): Promise<void> /*Promise<IPaginatedResponse>*/ => {
        let q;
        if (this.startAfter) {
            q = query(this.collectionRef, orderBy("name"), startAfter(this.startAfter), limit(pageLength as number));
        } else {
            q = query(this.collectionRef, orderBy("name"), limit(pageLength as number));
        }

        const documentSnapshots = await getDocs(q);

        this.startAfter = documentSnapshots.docs[documentSnapshots.docs.length-1];

        let collen = await this.collectionLength(); console.log(collen);
        let pages = await this.pages(8); console.log(pages);

        // return {} as IPaginatedResponse;
    }
    
    public updateMake = async (makeModel: MakeModel): Promise<IResponse> => {
        try {
            const updatedMake: IPartialMake = {...makeModel};
            let docRef = doc(this.collectionRef, makeModel.id);
            await updateDoc(docRef, {updatedMake});
            const response: IResponse = {
                success: true
            };
            return response; 
        } catch(err) {
            console.log(err);
            const response: IResponse = {
                errors: ["Unknown error."],
                success: false
            };
            return response;
        }
    }

    public deleteMake = async (id: string): Promise<IResponse> => {
        try {
            let docRef = doc(this.collectionRef, id);
            await deleteDoc(docRef);
            const response: IResponse = {
                success: true
            };
            return response;
        } catch(err) {
            console.log(err);
            const response: IResponse = {
                errors: ["Unknown error."],
                success: false
            };
            return response;
        }
    }

}

export default MakeRepository;
function startBefore(): import("@firebase/firestore").QueryConstraint {
    throw new Error("Function not implemented.");
}

