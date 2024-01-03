import { db } from "../../../../firebase";
import {
  collection,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  getDocs,
  orderBy,
} from "@firebase/firestore";

export default async function getTour() {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "tours"), orderBy("dateCreated", "desc"))
    );

    const result: QueryDocumentSnapshot<DocumentData>[] = [];
    querySnapshot.forEach((snapshot) => {
      result.push(snapshot);
    });

    return result;
  } catch (error) {
    console.error(error);
  }
}
