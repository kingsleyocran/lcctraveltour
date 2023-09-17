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

const blogCollection = collection(db, "blog");

export default async function deleteBlog(id: any) {
  try {
    // update the doc by setting done to true
    await deleteDoc(doc(db, "blog", id));
    await deleteBlogImageFolder(id);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteBlogImageFolder(id: string) {
  try {
    const imageRef = ref(storage, `blog/${id}`);
    await deleteObject(imageRef);
  } catch (error) {
    console.log(error);
  }
}
