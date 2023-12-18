import { ref, getDownloadURL, uploadString } from "@firebase/storage";
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
} from "@firebase/firestore";

const teamCollection = collection(db, "team");

export default async function updateTeamMember(data: any) {
  // update the doc by setting done to true
  await updateDoc(doc(db, "team", data.id), {
    ...data,
  });
}

export async function updateImage(selectedFile: any, data: any) {
  const imageRef = ref(storage, `team/${data.id}`);

  await uploadString(imageRef, selectedFile, "data_url").then(
    async (snapshot) => {
      const downloadURL = await getDownloadURL(imageRef);

      await updateDoc(doc(db, "team", data.id), {
        imageUrl: downloadURL,
      });
    }
  );
}
