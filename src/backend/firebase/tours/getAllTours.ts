import { db } from "../../../../firebase";
import {
  collection,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  getDocs,
  orderBy,
  limit
} from "@firebase/firestore";

export default async function listTours() {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "tours"), orderBy("dateCreated", "desc"), limit(50))
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
