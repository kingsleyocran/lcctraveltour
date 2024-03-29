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

export default async function listBlogs() {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "blogs"), orderBy("dateCreated", "desc"), limit(20))
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
