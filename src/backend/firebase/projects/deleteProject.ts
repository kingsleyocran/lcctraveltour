import { ref, getDownloadURL, deleteObject } from "@firebase/storage";
import { db, storage } from "../../../../firebase";
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

const projectCollection = collection(db, "projects");

export default async function deleteProject(id: any) {
  // update the doc by setting done to true
  await deleteDoc(doc(db, "projects", id));
  await deleteProjectImageFolder(id)
}

export async function deleteProjectImageFolder(id: string) {
  const imageRef = ref(storage, `projects/${id}`);
  await deleteObject(imageRef)
}
