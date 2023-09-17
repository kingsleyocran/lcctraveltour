import { ref, getDownloadURL, uploadString } from "@firebase/storage";
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

const projectCollection = collection(db, "projects");

export default async function updateProject(data: any) {
  // update the doc by setting done to true
  await updateDoc(doc(db, "projects", data.id), {
    ...data,
  });
}

export async function updateImage(selectedFile: any, data: any) {
  // update the doc by setting done to true
  const imageRef = ref(storage, `projects/${data.id}`);

  await uploadString(imageRef, selectedFile, "data_url").then(
    async (snapshot) => {
      const downloadURL = await getDownloadURL(imageRef);

      await updateDoc(doc(db, "projects", data.id), {
        imageUrl: downloadURL,
      });
    }
  );
}
