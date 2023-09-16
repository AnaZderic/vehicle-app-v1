import { initializeApp } from "firebase/app";
import { 
  getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc,
  query, where, onSnapshot 
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs-XSVWl-8ix_-A67bu9GwWtgWm2Vl1Ws",
  authDomain: "vehicle-app-v1-30ccc.firebaseapp.com",
  projectId: "vehicle-app-v1-30ccc",
  storageBucket: "vehicle-app-v1-30ccc.appspot.com",
  messagingSenderId: "995633508792",
  appId: "1:995633508792:web:9b5f17e746aeb56f001f4d"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

const getFirestoreInstance = () => getFirestore(app); 
const getStorageInstance = () => getStorage(app);

// Initialize services
const db = getFirestore(app);

// Makes Ref
const makesRef = collection(db, "makes"); 


// Delete Make
const deleteMake = (id: string) => {
  const docRef = doc(db, "makes", id);
  deleteDoc(docRef); 
};

// Model Ref
const modelsRef = collection(db, "models");

// Get Models
const getModels: any = async () => {
  try {
    const snapshot = await getDocs(modelsRef);
    let models: any = [];
    snapshot.docs.forEach((doc) => {
      models.push({ ...doc.data(), id: doc.id});
    });
    return models; 
  } catch (err: any) {
    console.log(err.message);
  }
};

// Add Model
const addModel = (name: string, abrv: string, img: string, makeId: string) => {
  addDoc(modelsRef, {
    name: name,
    abrv: abrv,
    img: img,
    makeId: makeId,
  });
};

// Delete Model
const deleteModel = (id: string) => {
  const docRef = doc(db, "models", id);
  deleteDoc(docRef);
};

// Collection ref
const colRef = collection(db, "makes");

// Query
const q = query(colRef, where("name", "==", "BMW"));

// Real time collection data based on query
const getQueryDoc = () => {
  onSnapshot(q, (snapshot) => {
  let makes: any = [];
  snapshot.docs.forEach((doc: any) => {
    makes.push({...doc.data(), id: doc.id})
  });
  console.log(makes);
});
};

export {db, deleteMake, getQueryDoc, getFirestoreInstance, getStorageInstance};
