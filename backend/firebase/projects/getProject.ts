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

const projectCollection = collection(db, "projects");

export default async function getProject() {
  try {
    const querySnapshot = await getDocs(
      query(
        projectCollection,
        orderBy("dateCreated", "desc")
        //where("done", "==", false),
        //limit(10)
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
