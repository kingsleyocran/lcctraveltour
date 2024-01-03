import { ref, getDownloadURL, uploadString } from "@firebase/storage";
import { db, storage } from "../../../../firebase";
import {
  addDoc,
  serverTimestamp,
  updateDoc,
  collection,
  doc,
} from "@firebase/firestore";

export default async function addTour(selectedFile: any, data: any) {
  try {
    const docRef = await addDoc(collection(db, "tours"), {
      dateCreated: serverTimestamp(),
      ...data,
    });

    const imageRef = ref(storage, `tours/${docRef.id}`);

    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);

        await updateDoc(doc(db, "tours", docRef.id), {
          imageUrl: downloadURL,
        });
      }
    );
  } catch (error) {
    console.error(error);
  }
}
