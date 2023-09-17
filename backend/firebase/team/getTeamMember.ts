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

const teamCollection = collection(db, "team");

export default async function getTeamMember(id:string) {
  try {
    const querySnapshot = await getDocs(
      query(
        teamCollection,
        orderBy("dateCreated", "asc"),
        where("id", "==", id),
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
    console.log(error)
  }
}
