import { addDoc, getDocs } from "firebase/firestore";
import BaseRepository from "./BaseRepository";
import MakeModel from "@/Models/Entities/make";

class MakeRepository extends BaseRepository {
    
    constructor() {
        super("makes");
    }
    
    public addMake = (makeModel: MakeModel): void =>
    {
        addDoc(this.collectionRef, makeModel);
    }

    public getMakes = async (): Promise<MakeModel[]> =>
    {   
        try {
            const snapshot = await getDocs(this.collectionRef);
            let makes: MakeModel[] = [];

            snapshot.docs.forEach((doc) => {
                const {name = "", abrv = "", img = ""} = {...doc.data()};

                let makeModel: MakeModel = new MakeModel(name, abrv, img, doc.id);
                makes.push(makeModel);
            });
            return makes;
        } catch (err: any) {
            console.log(err);
            return [];
        }
    }
}

export default MakeRepository;
