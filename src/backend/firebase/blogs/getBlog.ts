import { db } from "../../../../firebase";
import {
  collection,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  getDocs,
  orderBy,
} from "@firebase/firestore";

export default async function getBlog() {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "blogs"), orderBy("dateCreated", "desc"))
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
