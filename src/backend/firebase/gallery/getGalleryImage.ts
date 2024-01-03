import { db } from "../../../../firebase";
import {
  collection,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  getDocs,
  orderBy,
} from "@firebase/firestore";

const galleryCollection = collection(db, "gallery");

export default async function getGalleryImage() {
  try {
    const querySnapshot = await getDocs(
      query(galleryCollection, orderBy("dateCreated", "desc"))
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
