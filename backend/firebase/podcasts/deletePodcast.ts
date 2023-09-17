import { ref, getDownloadURL, uploadString, deleteObject, listAll } from "@firebase/storage";
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

const podcastCollection = collection(db, "podcast");

export default async function deletePodcast(id: any) {
  // update the doc by setting done to true
  await deleteDoc(doc(db, "podcast", id));
  await deletePodcastImageFolder(id)
}

export async function deletePodcastImageFolder(id: string) {
  const imageCoverRef = ref(storage, `podcast/cover-${id}`);
  const imageBannerRef = ref(storage, `podcast/banner-${id}`);

  await deleteObject(imageCoverRef)
  await deleteObject(imageBannerRef)
}
