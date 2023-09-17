import {
  ref,
  getDownloadURL,
  uploadString,
  deleteObject,
  listAll,
} from "@firebase/storage";
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
  deleteDoc,
} from "@firebase/firestore";

const teamCollection = collection(db, "team");

export default async function deleteTeamMember(id: any) {
  try {
    // update the doc by setting done to true
    await deleteDoc(doc(db, "team", id));
    await deleteTeamImageFolder(id);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTeamImageFolder(id: string) {
  try {
    const imageRef = ref(storage, `team/${id}`);
    await deleteObject(imageRef);
  } catch (error) {
    console.log(error);
  }
}
