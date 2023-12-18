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


export default async function deletePartner(id: any) {
  // update the doc by setting done to true
  await deleteDoc(doc(db, "partners", id));
  await deletePartnerImageFolder(id)
}

export async function deletePartnerImageFolder(id: string) {
  const imageRef = ref(storage, `projects/${id}`);
  await deleteObject(imageRef)
}
