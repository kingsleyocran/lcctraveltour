import { db, storage } from "../../../firebase";
import {
  addDoc,
  serverTimestamp,
  updateDoc,
  collection,
  doc,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  where,
  limit,
  getDocs,
  getDoc,
  orderBy,
} from "@firebase/firestore";

const bannerCollection = collection(db, "banner");

export default async function getBanner(id: string) {
  const docRef = doc(db, "banner", id);

  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      //attach the id back to result if you need it
      return docSnap.data();
    } else {
      console.log("Document does not exist");
    }
  } catch (error) {
    console.log(error);
  }
}
