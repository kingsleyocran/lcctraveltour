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

const podcastCollection = collection(db, "podcast");

export default async function getPodcastByShowID(showID: string) {
  try {
    const querySnapshot = await getDocs(
      query(
        podcastCollection,
        where("showID", "==", showID),
        limit(1)
      )
    );

    // map through todos adding them to an array
    const result: QueryDocumentSnapshot<DocumentData>[] = [];
    querySnapshot.forEach((snapshot) => {
      result.push(snapshot);
    });

    return result;
  } catch (error) {}
}
