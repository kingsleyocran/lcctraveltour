import { db } from "../../../../firebase";
import {
  collection,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  limit,
  getDocs,
  orderBy,
} from "@firebase/firestore";

const projectCollection = collection(db, "gallery");

export default async function listAllGalleryImages() {
  try {
    const querySnapshot = await getDocs(
      query(projectCollection, orderBy("dateCreated", "desc"), limit(20))
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
