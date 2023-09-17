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
  orderBy,
} from "@firebase/firestore";

const bannerCollection = collection(db, "banner");

export default async function getBanner() {
  const id = "home-banner";
  
  try {
    const querySnapshot = await getDocs(
      query(
        bannerCollection,
        where("id", "==", id),
      )
    );
  
    // map through todos adding them to an array
    const result: QueryDocumentSnapshot<DocumentData>[] = [];
    querySnapshot.forEach((snapshot) => {
      result.push(snapshot);
    });
    return result;
  } catch (error) {
    
  }
}
